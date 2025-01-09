import { Avatar, Col, Flex, Image, Row, Space } from "antd";
import Title from "antd/es/typography/Title";
import { ArrowLeft, ArrowRight } from "lucide-react";
import React, { useState } from "react";
import Slider, { CustomArrowProps } from "react-slick";
import { CarouselDataTypes } from "../Carousel.types";

export const TestimonialCarousel = ({ data, imageMode, title }: any) => {
  const [current, setCurrent] = useState(0);
  function CustomNextArrow(props: CustomArrowProps) {
    const { onClick } = props;
    return (
      <ArrowRight
        className="!hidden lg:!block absolute bottom-[15%] left-[80%] stroke-black hover:stroke-slate-400 !w-[32px] !h-[32px] z-10 !me-10 cursor-pointer"
        onClick={onClick}
      />
    );
  }

  function CustomPrevArrow(props: CustomArrowProps) {
    const { onClick } = props;
    return (
      <div>
        <ArrowLeft
          className="!hidden lg:!block absolute bottom-[15%] left-[80%] stroke-black hover:stroke-slate-400 !w-[32px] !h-[32px] z-10 !ms-[-40px] cursor-pointer"
          onClick={onClick}
        />
      </div>
    );
  }
  const Content = ({data}:{data:CarouselDataTypes}) => {
    return <Row align={'middle'} className="w-5/6 h-max relative pt-[1%] md:pt-[3%] lg:pt-[5%] ps-[3%] sm:ps-[5%] md:ps-[7%]">
        <Col span={24} className="w-full h-[70%] bg-slate-300 absolute top-0 right-0 left-0 bottom-0 z-0">
        <div
      style={{ opacity: 0.3 }}
      className="w-5/6 h-4/6 bg-black-2/5 absolute top-0 right-0 left-0 bottom-0 z-0"
    ></div>
    </Col>
            <Col span={8}><ImageRender src={data?.image || ""} /></Col>
            <Col span={16}>
            <Flex className="flex-col h-full !justify-between items-stretch px-4 md:px-6 lg:px-10 py-5 pb-2">
            <Title level={3} className="line-clamp-4 !leading-10 !font-normal">{data?.content}</Title>
                <Space direction="vertical" className="lg:mt-20">
                    <Title level={4} className="!font-medium">{data?.user_name}</Title>
                    <Title level={4} className="!text-slate-400 !font-medium mt-[-15px] ">{data?.designation}</Title>
                </Space>
            </Flex>
            </Col>
        </Row>
  }
  const ImageRender = ({src}:{src:string}) => {
    if (imageMode === "avatar") {
        return <div className="w-full p-3 border-primary border-[5px] rounded-full">
            <Avatar className="w-full h-full" alt="al" icon={<Image src={src} preview={false} className="aspect-square object-cover object-top" alt="al"  />} />
        </div>
    } else {
        return <div className="relative border-black border-2  translate-x-[-10px] translate-y-[-5px]">
        <Image src={src} preview={false} className="aspect-square object-cover object-top translate-x-[-10px] translate-y-[-10px]" alt="al"  />
        </div>
    }
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
    <div className="bg-white py-20 w-full">
        <Title level={2} className="w-[100%] md:w-[50%] lg:w-[2/5] px-24 font-semibold">{title}</Title>
        <Slider {...settings} className="h-full w-full">
          {data?.map((item: CarouselDataTypes, index: number) => (
            <Content key={index} data={item} />
          ))}
        </Slider>
    </div>
  );
};

export default TestimonialCarousel;
