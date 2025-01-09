import { Button, Image, Space } from "antd";
import Link from "antd/es/typography/Link";
import { ChevronRight, ChevronLeft } from "lucide-react";
import React, { useState } from "react";
import Slider, { CustomArrowProps } from "react-slick";
import { CarouselButtonTypes, CarouselDataTypes, CarouselTypes } from "../Carousel.types";

export const FixedImageCarousel = ({ cover, data }: CarouselTypes) => {
  const [current, setCurrent] = useState(0);
  function CustomNextArrow(props: CustomArrowProps) {
    const { onClick } = props;
    return (
      <ChevronRight size={48} strokeWidth={0.5}
        className="!hidden lg:!block slick-arrow slick-next stroke-white hover:stroke-slate-400 !w-[32px] !h-[32px] z-10 !me-[-30px]"
        onClick={onClick}
      />
    );
  }

  function CustomPrevArrow(props: CustomArrowProps) {
    const { onClick } = props;
    return (
      <div>
        <ChevronLeft size={48} strokeWidth={0.5}
          className="!hidden lg:!block slick-arrow slick-prev stroke-white hover:stroke-slate-400 !w-[32px] !h-[32px] z-10 !ms-[-30px]"
          onClick={onClick}
        />
      </div>
    );
  }
  const Content = ({data}:{data:CarouselDataTypes}) => {
    return <div className="relative p-10">
    {data?.content && (
      <div
        className="text-white !h-full"
      >
        <h1 className="!text-xs xs:!text-md sm:!text-xl md:!text-3xl lg:!text-5xl text-left text-bold leading-tight">
          {data?.content}
        </h1>
        {
          data?.buttonDetails && (
            <Space className="ms-5" size={'middle'}>
              {
                data?.buttonDetails?.map((button:CarouselButtonTypes, index:number)=> ( 
                  <Link href={button?.path ? button?.path : ""} key={index}>
                  <button className="lg:mt-8 sm:mt-4 mt-2 bg-black text-white border-none h-auto px-4 py-2 !text-xs xs:!text-sm sm:!text-md md:!text-xl lg:!text-2x rounded-xl font-light hover:bg-white hover:text-black" onClick={button?.onClick ? button?.onClick : undefined}>{button?.label}</button>
                  </Link>
                ))
              }
            </Space>
          )
        }
      </div>
    )}
    
  </div>
  }
  const settings = {
    dots: false,
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
        <div
          className={`h-1.5 w-5 p-1 bg-${
            current === i ? "white" : "black"
          } z-10 relative mt-[-50px]`}
        ></div>
      );
    },
  };
  return (
    <div className="relative">
      <Image
      preview={false}
      width={"100%"}
      className="aspect-[7/3] z-0"
      src={cover}
      alt="caro_img"
    />
    <div
      style={{ opacity: 0.3 }}
      className="w-full h-full bg-black absolute top-0 right-0 left-0 bottom-0 z-0"
    ></div>
      <div className="slider-container absolute z-10 w-1/2 h-1/2 bg-white/20 rounded-3xl"
        style={{ top: "40%", left: "10%" }}>
        <Slider {...settings} className="h-full w-full">
          {data?.map((item: CarouselDataTypes, index: number) => (
            <Content key={index} data={item} />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default FixedImageCarousel;
