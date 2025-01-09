export interface News_section_types {
  title: string;
  subtitle?: string;
  bg_image: string;
  data: TCardData[];
}

export interface TCardData {
  index?: string;
  image: string;
  title: string;
  content: string;
  date: string;
}
