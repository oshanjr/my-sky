export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface Destination {
  id: string;
  name: string;
  image: string;
  description: string;
  price?: string;
}

export interface NavItem {
  label: string;
  href: string;
}
