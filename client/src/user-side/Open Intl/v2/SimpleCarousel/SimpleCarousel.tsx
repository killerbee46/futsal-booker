"use client";
import { CarouselDataTypes, CarouselTypes } from "../../../../components/Carousel/Carousel.types";
import { ChevronRight, ChevronLeft } from "lucide-react";
import React, { useState } from "react";
import Slider, { CustomArrowProps } from "react-slick";
import getImageUrl from "../../../../utilFunctions/getImageUrl";

export const SimpleCarousel = ({ data }: CarouselTypes) => {
  const [current, setCurrent] = useState(0);
  function CustomNextArrow(props: CustomArrowProps) {
    const { onClick } = props;
    return (
      <ChevronRight
        className="!hidden lg:!block slick-arrow slick-next stroke-white hover:stroke-slate-400 !w-[32px] !h-[32px] z-10 !me-[50px]"
        onClick={onClick}
      />
    );
  }

  function CustomPrevArrow(props: CustomArrowProps) {
    const { onClick } = props;
    return (
      <div>
        <ChevronLeft
          className="!hidden lg:!block slick-arrow slick-prev stroke-white hover:stroke-slate-400 !w-[32px] !h-[32px] z-10 !ms-[50px]"
          onClick={onClick}
        />
      </div>
    );
  }
  const Content = ({data}:{data:CarouselDataTypes}) => {

    return <div className="aspect-[7/2.5] !p-0" style={{
      background: `url(${getImageUrl(data?.image?.data?.attributes?.url)})`,
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}>
  </div>
  }
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: true,
    swipeToSlide: true,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
    beforeChange: (_: number, page: number) => {
      setCurrent(page);
    },
    customPaging: (i: number) => {
      return (
          <div style={{boxShadow: 'rgba(255, 255, 255, 0.2) 0px 2px 8px 0px}'}} className={`relative mt-[-50px] md:w-6 lg:w-8 md:h-1 lg:h-1.5 bg-${current === i ? "white" : "black"}`} />
      );
    },
  };
  return (
    <div className="relative ">
      <div className="slider-container">
        <Slider {...settings}>
          {data?.map((item: CarouselDataTypes, index: number) => (
            <Content key={index} data={item} />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default SimpleCarousel;
