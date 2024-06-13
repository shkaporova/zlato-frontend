export interface ILinkMenu {
  label: LinksMenuLabel;
  href: string;
  icon: string;
}

export enum LinksMenuLabel {
  DASHBOARD = 'Dashboard',
  TRANSACTIONS = 'Transactions',
  STATISTIC = 'Statistic',
  ABOUT = 'About',
  SETTINGS = 'Settings',
  HELP = 'Help',
}
