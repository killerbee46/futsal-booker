export interface CTATypes {
  title: string;
  description?: string;
  image_url?: string;
  bg_image?: string;
  button_text?: string;
  button_path?: string;
  cta_action?: () => void;
}
