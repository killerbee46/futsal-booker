export interface Herotypes {
  bgImageUrl?: string;
  heroImageUrl?: string;
  titleText: string;
  subTitleText?: string;
  buttonDetails?: ButtonDetails[];
}

export interface ButtonDetails {
  type: string;
  text: string;
  href: string;
  hasIcon?: boolean;
}
