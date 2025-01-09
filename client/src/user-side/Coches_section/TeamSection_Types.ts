import { title } from "process";

export interface TeamSection_Types {
  title: string;
  subtitle: string;
  bg_image: string;
  card_data: TCard_data[];
  button: Tbutton;
}

export interface TCard_data {
  image: string;
  title: string;
  content: string;
}

export interface Tbutton {
  label: string;
  path: string;
}
