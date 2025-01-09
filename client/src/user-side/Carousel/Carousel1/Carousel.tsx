"use client";
import Testimonial1 from "@/components/Testimonial/Testimonial1/Testimonial1";
import { Col, Flex, Image, Row, Space } from "antd";
import Title from "antd/es/typography/Title";
import { ArrowLeftCircle, ArrowRightCircle } from "lucide-react";
import React from "react";
import Slider from "react-slick";
import { CarouselDataTypes } from "../Carousel.types";

export const Carousel1 = ({ title, subtitle, carousel_data }: any) => {
  function SampleNextArrow(props: any) {
    const { onClick } = props;
    return (
      <ArrowRightCircle
        className="!hidden lg:!block slick-arrow slick-next stroke-slate-300 hover:stroke-primary !w-[32px] !h-[32px]"
        onClick={onClick}
      />
    );
  }

  function SamplePrevArrow(props: any) {
    const { onClick } = props;
    return (
      <div>
        <ArrowLeftCircle
          className="!hidden lg:!block slick-arrow slick-prev stroke-slate-300 hover:stroke-primary !w-[32px] !h-[32px]"
          onClick={onClick}
        />
      </div>
    );
  }
  const Content = ({ data }: { data: CarouselDataTypes }) => {
    return (
      <div className="relative">
        <Image
          preview={false}
          width={"100%"}
          className="aspect-[7/3]"
          src={
            "https://imgs.search.brave.com/wqHNuvgMtRdq7Qw0cVmOyk4ArNhTmmAOR0wOfHBxPY0/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuZnJlZWltYWdl/cy5jb20vaW1hZ2Vz/L2xhcmdlLXByZXZp/ZXdzLzQ4MC92ZXJ5/LXdpZGUtMTIxODAw/Ny5qcGc_Zm10"
          }
          alt="caro_img"
        />
        {data?.content && (
          <div
            className="absolute text-white w-2/5 text-center z-10"
            style={{ top: "50%", left: "10%" }}
          >
            <p className="text-7xl text-left text-bold leading-tight">
              {data?.content}
            </p>
          </div>
        )}
        <div
          style={{ opacity: 0.3 }}
          className="w-full h-full bg-black absolute top-0 right-0 left-0 bottom-0 z-0"
        ></div>
      </div>
    );
  };
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: true,
    swipeToSlide: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <div className="relative ">
      <div className="slider-container">
        <Slider {...settings} className="w-full">
          {carousel_data.map((item: any, index: number) => (
            <Content key={index} data={item} />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Carousel1;
