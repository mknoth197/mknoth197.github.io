export const site = {
  name: 'Mitchell Knoth',
  shortName: 'Mitch',
  title: 'Mitchell Knoth – Cloud Software Engineer',
  description:
    'Cloud software engineer. Building toward an SDLC where AI is a first-class participant.',
  location: 'Des Moines, Iowa',
  email: 'mknoth197@gmail.com',
  github: 'https://github.com/mknoth197',
  linkedin: 'https://www.linkedin.com/in/mitchellknoth/',
  // Update if you change the "currently" pill on the home page:
  currently: 'building the SDLC for an AI-first world',
};

export type NavItem = { label: string; href: string };

export const nav: NavItem[] = [
  { label: 'Writing', href: '/writing/' },
  { label: 'Work', href: '/work/' },
  { label: 'About', href: '/about/' },
];
