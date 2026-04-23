import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { site } from '../config';
import type { APIContext } from 'astro';

export async function GET(context: APIContext) {
  const posts = (await getCollection('posts')).filter((p) => !p.data.draft);
  return rss({
    title: site.name,
    description: site.description,
    site: context.site!,
    items: posts
      .sort((a, b) => b.data.date.getTime() - a.data.date.getTime())
      .map((post) => ({
        title: post.data.title,
        pubDate: post.data.date,
        description: post.data.summary,
        link: `/writing/${post.id}/`,
      })),
  });
}
