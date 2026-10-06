import { expect, test } from '@playwright/test';

const routes = [
  '/',
  '/about/',
  '/resume/',
  '/work/',
  '/writing/',
  '/work/agentic-engineering/',
  '/work/team-brain/',
  '/work/secure-agent-execution/',
  '/work/agent-trust/',
  '/work/pr-to-production/',
  '/work/onecloud-network/',
  '/work/vpc-deletion-automation/',
  '/work/license-management/',
  '/work/global-gateway/',
  '/writing/the-harness-should-not-live-on-your-laptop/',
  '/writing/the-model-is-table-stakes/',
  '/writing/done-is-a-claim-not-a-state/',
  '/this-route-should-not-exist/',
];

for (const route of routes) {
  test(`${route} preserves the site visual contract`, async ({ page }) => {
    await page.goto(route, { waitUntil: 'domcontentloaded' });
    await page.evaluate(() => document.fonts.ready);

    const geometry = await page.evaluate(() => {
      const box = (selector: string) => document.querySelector(selector)?.getBoundingClientRect();
      const brand = box('.site-brand');
      const nav = box('.site-header nav');
      const viewport = document.documentElement.clientWidth;
      const shell = box('.site-shell');

      return {
        viewport,
        overflow: document.documentElement.scrollWidth - viewport,
        shellWidth: shell?.width ?? 0,
        brandNavOverlap:
          brand && nav
            ? !(brand.right <= nav.left || nav.right <= brand.left || brand.bottom <= nav.top || nav.bottom <= brand.top)
            : false,
        h1Size: parseFloat(getComputedStyle(document.querySelector('h1')!).fontSize),
        bodySize: parseFloat(getComputedStyle(document.documentElement).fontSize),
        undersizedHeadings: [...document.querySelectorAll<HTMLElement>('main h2, main h3')]
          .filter((heading) => !heading.closest('figure, aside, nav, .harness-map'))
          .filter((heading) => parseFloat(getComputedStyle(heading).fontSize) < 20)
          .map((heading) => heading.textContent?.trim()),
        escapedMedia: [...document.querySelectorAll<HTMLElement>('main img, main figure, main aside, main nav')]
          .filter((element) => {
            const rect = element.getBoundingClientRect();
            return rect.left < -1 || rect.right > viewport + 1;
          })
          .map((element) => element.className || element.tagName),
      };
    });

    expect(geometry.overflow, 'page must not scroll horizontally').toBeLessThanOrEqual(0);
    expect(geometry.brandNavOverlap, 'brand and primary navigation must not collide').toBe(false);
    expect(geometry.h1Size, 'the page title must be visually dominant').toBeGreaterThanOrEqual(
      geometry.bodySize * 1.75,
    );
    expect(geometry.undersizedHeadings, 'semantic section headings must not look like metadata').toEqual([]);
    expect(geometry.escapedMedia, 'visuals must remain within the viewport').toEqual([]);

    if (geometry.viewport >= 1200) {
      expect(geometry.shellWidth, 'wide layouts must use the viewport instead of a narrow fixed column').toBeGreaterThanOrEqual(1200);
      expect(geometry.shellWidth, 'wide layouts still need a readable maximum measure').toBeLessThanOrEqual(1440);
    }

    const directLists = page.locator('.content > ul, .content > ol');
    for (let index = 0; index < (await directLists.count()); index += 1) {
      const list = directLists.nth(index);
      const treatment = await list.locator(':scope > li').first().evaluate((item) => ({
        display: getComputedStyle(item).display,
        marker: getComputedStyle(item, '::before').content,
        markerDisplay: getComputedStyle(item, '::before').display,
        markerPosition: getComputedStyle(item, '::before').position,
      }));
      expect(treatment.display, 'prose list rows must use the editorial layout').toBe('block');
      expect(
        treatment.marker === 'none' || treatment.markerPosition === 'absolute',
        'list markers must be omitted or visually attached to their item',
      ).toBe(true);
      expect(
        treatment.markerDisplay === 'block' && treatment.markerPosition !== 'absolute',
        'list markers must not render as detached glyphs above each item',
      ).toBe(false);
    }

    if (geometry.viewport >= 1200 && route === '/writing/') {
      const featureComposition = await page.locator('.featured-post').evaluate((card) => {
        const cardBox = card.getBoundingClientRect();
        const childBoxes = [...card.children]
          .map((child) => child.getBoundingClientRect())
          .filter((box) => box.width > 0 && box.height > 0);
        const occupiedLeft = Math.min(...childBoxes.map((box) => box.left));
        const occupiedRight = Math.max(...childBoxes.map((box) => box.right));
        return (occupiedRight - occupiedLeft) / cardBox.width;
      });
      expect(
        featureComposition,
        'full-width feature panels must compose content across the available width',
      ).toBeGreaterThanOrEqual(0.75);
    }

    if (route === '/writing/') {
      await expect(
        page.locator('#writing-archive-title'),
        'the current publication list must not be mislabeled as an archive',
      ).toHaveText('More writing');
    }

    if (route.startsWith('/writing/') && route !== '/writing/') {
      const articleImages = page.locator('.article-figure img');
      expect(
        await articleImages.count(),
        'long-form essays must use at least two meaningful visual resets',
      ).toBeGreaterThanOrEqual(2);

      for (let index = 0; index < (await articleImages.count()); index += 1) {
        const image = articleImages.nth(index);
        const semantics = await image.evaluate((element) => ({
          alt: element.getAttribute('alt')?.trim() ?? '',
          width: element.getAttribute('width'),
          height: element.getAttribute('height'),
          loading: element.getAttribute('loading'),
        }));
        expect(semantics.alt, 'editorial visuals need descriptive alternative text').not.toBe('');
        expect(semantics.width, 'editorial visuals must reserve intrinsic width').toBeTruthy();
        expect(semantics.height, 'editorial visuals must reserve intrinsic height').toBeTruthy();
        if (index > 0) {
          expect(semantics.loading, 'later article visuals should not compete for initial load').toBe('lazy');
        }
      }
    }

    if (geometry.viewport < 640 && route === '/writing/') {
      const rows = page.locator('.post-row');
      for (let index = 0; index < (await rows.count()); index += 1) {
        const row = rows.nth(index);
        const dateLeft = (await row.locator('span').nth(0).boundingBox())?.x;
        const titleLeft = (await row.locator('span').nth(1).boundingBox())?.x;
        expect(titleLeft, 'mobile archive titles must not be tabbed into a narrow column').toBe(dateLeft);
      }
    }
  });
}

test('both themes preserve readable foreground and background tokens', async ({ page }) => {
  await page.goto('/', { waitUntil: 'domcontentloaded' });

  for (const theme of ['dark', 'light']) {
    const colors = await page.evaluate((activeTheme) => {
      document.documentElement.dataset.theme = activeTheme;
      const style = getComputedStyle(document.documentElement);
      return { background: style.backgroundColor, foreground: style.color };
    }, theme);

    expect(colors.background).not.toBe(colors.foreground);
  }
});

test('hero avatar loops without controls and honors reduced motion', async ({ page }) => {
  await page.goto('/');
  const portrait = page.locator('.pixel-avatar__portrait');
  await expect(portrait).toBeVisible();
  const asset = await page.request.get('/images/mitch-emotes-developer.png');
  expect(asset.ok()).toBe(true);
  expect(asset.headers()['content-type']).toContain('image/png');
  const spriteBleed = await page.evaluate(async () => {
    const image = new Image();
    image.src = '/images/mitch-emotes-developer.png';
    await image.decode();
    const canvas = document.createElement('canvas');
    canvas.width = image.naturalWidth;
    canvas.height = image.naturalHeight;
    const context = canvas.getContext('2d')!;
    context.drawImage(image, 0, 0);
    const { data } = context.getImageData(0, 0, canvas.width, canvas.height);
    const portrait = document.querySelector('.pixel-avatar__portrait')!;
    const animation = portrait.getAnimations().find((entry) => (entry as CSSAnimation).animationName === 'avatar-states')!;
    const rows = (animation.effect as KeyframeEffect).getKeyframes().map((frame) => {
      const height = canvas.height * 100 / parseFloat(String(frame['--row-size'] ?? '300%'));
      const start = parseFloat(String(frame['--state-y'])) / 100 * (canvas.height - height);
      return { start, end: start + height };
    });
    let opaqueBoundaryPixels = 0;
    for (let y = 0; y < canvas.height; y++) {
      for (let x = 0; x < canvas.width; x++) {
        const nearColumnEdge = Math.abs(x / (canvas.width / 6) - Math.round(x / (canvas.width / 6))) < 0.01;
        const nearRowEdge = rows.some(({ start, end }) => Math.abs(y - start) < 2 || Math.abs(y - end) < 2);
        // Ignore alpha=1 export noise (less than 0.4% opacity).
        if ((nearColumnEdge || nearRowEdge) && data[(y * canvas.width + x) * 4 + 3] > 1) {
          opaqueBoundaryPixels++;
        }
      }
    }
    return opaqueBoundaryPixels;
  });
  expect(spriteBleed, 'sprite cells must have transparent gutters to prevent neighboring frames bleeding in').toBe(0);
  await expect(page.locator('.pixel-avatar button')).toHaveCount(0);
  expect(await portrait.evaluate((node) => getComputedStyle(node).animationIterationCount)).toBe('infinite, infinite');
  expect(await portrait.evaluate((node) => getComputedStyle(node).animationPlayState)).toBe('running, running');
  await page.emulateMedia({ reducedMotion: 'reduce' });
  expect(await portrait.evaluate((node) => getComputedStyle(node).animationName)).toBe('none');
});
