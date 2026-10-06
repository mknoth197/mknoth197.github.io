export const site = {
  name: 'Mitchell Knoth',
  shortName: 'Mitch',
  title: 'Mitchell Knoth – Cloud Software Engineer',
  description:
    'Cloud and developer-platform engineer building production systems for AI-assisted software delivery.',
  location: 'Des Moines, Iowa',
  email: 'mknoth197@gmail.com',
  github: 'https://github.com/mknoth197',
  linkedin: 'https://www.linkedin.com/in/mitchellknoth/',
};

export type NavItem = { label: string; href: string };

export const nav: NavItem[] = [
  { label: 'Writing', href: '/writing/' },
  { label: 'Work', href: '/work/' },
  { label: 'About', href: '/about/' },
];
