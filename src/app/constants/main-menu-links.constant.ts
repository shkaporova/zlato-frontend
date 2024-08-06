import { ILinkMenu, LinksMenuLabel } from '../models/main-menu-link.model';

export const mainMenuLinks: ILinkMenu[] = [
  { label: LinksMenuLabel.DASHBOARD, href: '', icon: 'home' },
  { label: LinksMenuLabel.TRANSACTIONS, href: '', icon: 'credit_card' },
  { label: LinksMenuLabel.STATISTIC, href: '', icon: 'monitoring' },
  { label: LinksMenuLabel.ABOUT, href: '', icon: 'info' },
  { label: LinksMenuLabel.SETTINGS, href: '', icon: 'settings' },
  { label: LinksMenuLabel.HELP, href: '', icon: 'help' },
];
