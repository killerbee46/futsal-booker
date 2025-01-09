export type VideoPlayerModalTypes = {
    data:VideoDataTypes;
    closeModal:()=>void
}

export type VideoDataTypes = {
    visible:boolean;
    url:string;
}