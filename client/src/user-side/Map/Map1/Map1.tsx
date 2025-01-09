import React from "react";
import { MapTypes } from "../Map.types";

const Map1 = ({ location, width, height }: MapTypes) => {
  const square = height ? "aspect-auto" : "aspect-square"
  const getValue = (value:any) => {
    if (value?.includes('px')) {
      return value
    } else {
     return value + 'px'
    }
  }
  return (
    <div className={`${square}`} style={{width:width ? getValue(width) :"100% !important", height:height ? getValue(height) : 'auto'}}>
      <iframe title="map" className="!w-full !h-full"
        src={`https://www.google.com/maps/embed/v1/place?q=${location}&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8`}
      ></iframe>
    </div>
  );
};

export default Map1;
