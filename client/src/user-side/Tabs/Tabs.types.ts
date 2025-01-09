import { SectionDataTypes } from "../Sections/Section.types";

export type TabsTypes = {
title?: string;
subtitle?:string;
data:TabsDataTypes[]
}

export type TabsDataTypes = {
    title:string;
    content:SectionDataTypes;
}
