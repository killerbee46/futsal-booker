"use client";
import { Image } from "antd";
import { ChevronRight, ChevronLeft } from "lucide-react";
import React, { useState } from "react";
import Slider, { CustomArrowProps } from "react-slick";
import { CarouselDataTypes, CarouselTypes } from "../Carousel.types";
// import getImageUrl from "../../../utilFunctions/getImageUrl";

export const SimpleCarousel = ({ data, dots, slides,scroll  }: CarouselTypes) => {
  const [current, setCurrent] = useState(0);
  function CustomNextArrow(props: CustomArrowProps) {
    const { onClick } = props;
    return (
      <ChevronRight
        className="!hidden lg:!block slick-arrow slick-next stroke-white hover:stroke-slate-400 !w-[32px] !h-[32px] z-10 !me-[30px]"
        onClick={onClick}
      />
    );
  }

  function CustomPrevArrow(props: CustomArrowProps) {
    const { onClick } = props;
    return (
      <div>
        <ChevronLeft
          className="!hidden lg:!block slick-arrow slick-prev stroke-white hover:stroke-slate-400 !w-[32px] !h-[32px] z-10 !ms-[30px]"
          onClick={onClick}
        />
      </div>
    );
  }
  const Content = ({data}:{data:CarouselDataTypes}) => {
    return <div className="relative aspect-[7/2]"
    style={{
        background: `url(${data?.image})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    }}
    >
      <style>{`
      .slick-slider div{
      padding: 0px !important;
      }
      `}</style>
    {/* <Image
      preview={false}
      width={"100%"}
      className="object-contain w-full"
      src={data?.image}
      alt="caro_img"
    /> */}
    {data?.content && (
      <><div
        className="absolute text-white w-2/5 text-center z-10"
        style={{ top: "45%", left: "10%" }}
      >
        <h1 className="xs:!text-xl sm:!text-3xl md:!text-5xl lg:!text-7xl text-left text-bold leading-tight">
          {data?.content}
        </h1>
      </div>
    <div
      style={{ opacity: 0.4 }}
      className="w-full h-[99%] bg-black absolute top-0 right-0 left-0 bottom-0 z-0"
    ></div>
    </>
    )}
  </div>
  }
  const settings = {
    dots: dots,
    infinite: true,
    speed: 500,
    slidesToShow: slides || 1,
    adaptiveHeight:true,
    autoautoplay: true,
    slidesToScroll: scroll || 1,
    pauseOnHover: true,
    swipeToSlide: true,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
    beforeChange: (_: number, page: number) => {
      setCurrent(page);
    },
    customPaging: (i: number) => {
      return (
        <div
          className={`h-1.5 w-5 p-1 bg-${
            current === i ? "white" : "black"
          } z-10 relative mt-[-50px]`}
        ></div>
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
