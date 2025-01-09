import Card5 from "@/components/card/Card5/Card5";
import { Col, Row, Space, Image } from "antd";
import Paragraph from "antd/es/typography/Paragraph";
import Title from "antd/es/typography/Title";
import { CircleArrowLeft, CircleArrowRight } from "lucide-react";
import React, { useRef } from "react";
import Slider from "react-slick";
import { CarouselTypes } from "../Carousel.types";
import MainContainer from "@/components/Maincontainer/Maincontainer";
import Testimonial3 from "@/components/Testimonial/Tesmonial3/Testimonial3";
import "./Carousel.css";

const BoxingTestimonialCarousel = ({
  title,
  subtitle,
  data,
  bg_image,
  image,
}: CarouselTypes) => {
  const sliderRef = useRef(null);
  const next = () => {
    sliderRef.current.slickNext();
  };
  const previous = () => {
    sliderRef.current.slickPrev();
  };
  const settings = {
    arrows: false,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    swipeToSlide: true,
    centerPadding: "40px",
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <MainContainer
      wraperClassName="py-10 md:py-20"
      wraperStyle={{
        background: `linear-gradient(rgba(255, 255, 255, 0.96), rgba(255, 255, 255, 0.96)), url(${bg_image})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Row gutter={[20, 20]} className="mb-6 md:mb-10">
        <Col xs={24} sm={24} md={12} xl={12} xxl={12}>
          <Space direction="vertical" size={20}>
            <Title level={2} className="!text-primary !font-bold">
              {title}
            </Title>
            <Paragraph>{subtitle}</Paragraph>
          </Space>
        </Col>
        <Col
          xs={24}
          sm={24}
          md={12}
          xl={12}
          xxl={12}
          className="flex md:justify-end md:items-end"
        >
          <Space size={10}>
            <CircleArrowLeft
              size={32}
              className="stroke-primary hover:cursor-pointer"
              onClick={previous}
            />
            <CircleArrowRight
              size={32}
              className="stroke-primary hover:cursor-pointer"
              onClick={next}
            />
          </Space>
        </Col>
      </Row>
      <Row gutter={40} className="h-full">
        <Col
          sm={24}
          md={24}
          lg={16}
          xl={16}
          xxl={16}
          className="slider-container"
        >
          <Slider ref={sliderRef} {...settings}>
            {data.map((item: any, index: number) => (
              <Testimonial3
                key={index}
                image_url={item.image}
                user_name={item.user_name}
                designation={item.designation}
                content={item.content}
                rating={item.rating}
              />
            ))}
          </Slider>
        </Col>
        <Col sm={0} md={0} lg={8} xl={8} xxl={8} className="mt-[60px]">
          <div className="rounded-xl h-full overflow-hidden">
            <Image
              preview={false}
              src={image}
              alt="//"
              height={"100%"}
              className="object-cover"
            />
          </div>
        </Col>
      </Row>
    </MainContainer>
  );
};

export default BoxingTestimonialCarousel;
