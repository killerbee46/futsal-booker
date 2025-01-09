import VideoPlayerModal from "@/components/videoPlayerModal/VideoPlayerModal";
import { Image } from "antd";
import Link from "antd/es/typography/Link";
import { ChevronRight, ChevronLeft, Play } from "lucide-react";
import React, { useState } from "react";
import Slider from "react-slick";
import { CarouselDataTypes, CarouselTypes } from "../Carousel.types";
import SectionTitle from "@/components/SectionTitle/SectionTitle";

export const VideoCarousel = ({ data }: CarouselTypes) => {
  const [current, setCurrent] = useState(0);
  function CustomNextArrow(props: any) {
    const { onClick } = props;
    return (
      <ChevronRight
        className="!hidden !bg-primary lg:!block slick-arrow slick-next !w-[4%] !h-[8%] z-10 p-10 !me-[40px]"
        onClick={onClick}
        size={16}
        strokeWidth={2}
        style={{ color: "white" }}
      />
    );
  }

  function CustomPrevArrow(props: any) {
    const { onClick } = props;
    return (
      <div>
        <ChevronLeft
          className="!hidden !bg-primary lg:!block slick-arrow slick-prev !w-[4%] !h-[8%] z-10 p-10 !ms-[40px]"
          onClick={onClick}
          size={16}
          strokeWidth={2}
          style={{ color: "white" }}
        />
      </div>
    );
  }

  const [videoModal, setVideoModal] = useState({
    visible: false,
    url: "",
  });
  const handleVideoModal = (url?: string) => {
    if (url) {
      setVideoModal({
        visible: true,
        url: url,
      });
    } else {
      setVideoModal({
        visible: false,
        url: "",
      });
    }
  };

  const Content = ({
    data,
    active,
  }: {
    data: CarouselDataTypes;
    active?: boolean;
  }) => {
    return (
      <Link onClick={(e: any) => handleVideoModal(data?.video || "")}>
        <div className="relative mx-10 group/item">
          <div
            hidden={active}
            style={{ opacity: 0.5 }}
            className="w-full h-[99%] bg-black absolute top-0 right-0 left-0 bottom-5 z-10"
          ></div>
          {active && (
            <div className="play_button invisible group-hover/item:visible w-full h-full flex justify-center items-center absolute !z-20">
              <Play size={40} strokeWidth={2} color="white" />
            </div>
          )}
          <Image
            preview={false}
            width={"100%"}
            className="aspect-[7/4]"
            src={data?.image}
            alt="caro_img"
          />
          {data?.content && (
            <div
              className="absolute text-white w-1/2 text-center z-10"
              style={{ top: "50%", left: "10%" }}
            >
              <h1 className="xs:!text-xl sm:!text-3xl md:!text-5xl lg:!text-7xl text-left text-bold leading-tight">
                {data?.content}
              </h1>
            </div>
          )}
        </div>
      </Link>
    );
  };
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "25%",
    slidesToShow: 1,
    speed: 500,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
    beforeChange: (_: number, page: number) => {
      setCurrent(page);
    },
  };
  return (
    <div className="relative my-10 w-full">
      <VideoPlayerModal
        data={videoModal}
        closeModal={() => handleVideoModal()}
      />
      <div className="slider-container">
        <Slider {...settings}>
          {data?.map((item: any, index: number) => (
            <Content key={index} data={item} active={current == index} />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default VideoCarousel;
