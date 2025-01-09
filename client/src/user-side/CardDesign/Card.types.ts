export interface CardType {
  imageUrl: string;
  title: string;
  subTitle?: string;
  date?: string;
  buttonDetails?: ButtonDetails[];
  socials?: Tsocials[];
  avatar?:boolean
}

export interface ButtonDetails {
  type: string;
  text: string;
  href: string;
}

export interface Tsocials {
  platform: string;
  link: string;
}
