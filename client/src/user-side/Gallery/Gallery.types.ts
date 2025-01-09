export type GalleryTypes = {
    data:GalleryDataTypes[],
}

export type GalleryDataTypes = {
    data:MediaTypes[],
    galleryTitle?:string,
    galleryDesc?:string,
}

export type MediaTypes = {
    video?:string;
    image:string;
    mediaType:"image"|"video";
    mediaTitle?:string;
    mediaDesc?:string;
}