export interface Footer_Types {
  logo?: Logo;
  columns: Columns[];
  copyright: Copyright;
}

export interface Logo {
  image: string;
  href: string;
  description?: string;
}

export interface Columns {
  title: string;
  vertical: boolean;
  links: Links[];
}

export interface Links {
  title?: string;
  href: string;
  icon?: string;
}

export interface Copyright {
  copyright_text: string;
  links?: Links[];
}
