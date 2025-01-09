export type SectionDataTypes = {
    title:string;
    description:string;
    venue?:string;
    image?:any;
    reverse?:boolean;
    verticalTextAlign?:'top'|'bottom'|'middle'
}

export type SectionTypes = {
    sectionTitle?:string;
    subtitle?:string;
    data: SectionDataTypes[];
    invertFromFirst?:boolean;
}