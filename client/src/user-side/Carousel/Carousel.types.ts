import React from "react";

export type CarouselTypes = {
  title?: string;
  subtitle?: string;
  bg_image?: string;
  image?: string;
  data: CarouselDataTypes[];
  cover?: string;
  arrows?: boolean;
  dots?: boolean;
  nextIcon?: React.ReactNode;
  prevIcon?: React.ReactNode;
  defaultOpen?:number;
  slides?:number;
  scroll?:number;
  content?:React.ReactNode || Element={};
};

export type CarouselDataTypes = {
  content?: string;
  image?: string;
  buttonDetails?: CarouselButtonTypes[];
  designation?: string;
  user_name?: string;
  video?: string;
  title?: string;
  subtitle?: string;
  rating?: number;
};
export type CarouselButtonTypes = {
  label: string;
  path?: string;
  onClick?: () => void;
};
