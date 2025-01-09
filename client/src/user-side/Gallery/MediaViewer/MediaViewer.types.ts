import { CarouselTypes } from "@/components/Carousel/Carousel.types";

export type MediaViewerTypes = {
    data:MediaViewerDataTypes;
    closeModal:()=>void
}

export type MediaViewerDataTypes = {
    visible:boolean;
    image?:string;
    video?:string;
    data?:CarouselTypes[]
}