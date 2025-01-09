export type CardTypes = {
  content?: string;
  image?: string;
  bg_image?: string;
  width?: string | number;
  title?: string;
  subtitle?: string;
  buttonLabel?: string;
  buttonPath?: string;
  date?: string;
  location?: string;
  icons?: Ticons[];
  path?:string;
  secondaryImage?:string;
  user?:string;
};

export interface Ticons {
  platform: string;
  path: string;
  label: string;
}
