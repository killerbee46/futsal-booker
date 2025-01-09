import Card5 from "@/components/card/Card5/Card5";
import { Col, Row, Space } from "antd";
import Paragraph from "antd/es/typography/Paragraph";
import Title from "antd/es/typography/Title";
import { CircleArrowLeft, CircleArrowRight } from "lucide-react";
import React, { useRef } from "react";
import Slider from "react-slick";
import { CarouselTypes } from "../Carousel.types";
import MainContainer from "@/components/Maincontainer/Maincontainer";
import SectionTitle from "@/components/SectionTitle/SectionTitle";

const EventCarousel = ({ title, subtitle, data, bg_image }: CarouselTypes) => {
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
    slidesToShow: 3,
    slidesToScroll: 2,
    swipeToSlide: true,
    centerPadding: "40px",
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 1,
        },
      },
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
          {/* <Space direction="vertical" size={20}>
            <Title level={2} className="!text-primary !font-bold">
              {title}
            </Title>
            <Paragraph>{subtitle}</Paragraph>
          </Space> */}
          <SectionTitle
            title={title}
            subtitle={subtitle}
            alignCenter={false}
            bgDark={false}
          />
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
      <Row>
        <Col flex={1} className="slider-container">
          <Slider ref={sliderRef} {...settings}>
            {data.map((item: any, index: number) => (
              <Card5
                key={index}
                image={item.image}
                title={item.title}
                content={item.content}
              />
            ))}
          </Slider>
        </Col>
      </Row>
    </MainContainer>
  );
};

export default EventCarousel;
