import { Component, ReactNode } from "react";

export interface Feature_Types {
  title: string;
  subtitle: string;
  description?: string;
  feature_card: Feature_card[];
}

export interface Feature_card {
  icon?: string;
  title: string;
  description: string;
  image?:any;
}
