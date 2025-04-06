import { ReactNode } from "react";
import { TDetails } from "../DetailsCard/Details_card_types";

export interface Header_types {
  title?: string;
  description?: string;
  image?: string;
  breadcrumbs?: ReactNode;
  details?:TDetails[];
  tabFilter?:boolean;
  button?: {
    label:string;
    path?:string
  }
}
