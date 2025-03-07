"use client";
import { Empty, Image, Typography } from "antd";
import { ChevronRight, ChevronLeft } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";
import Slider, { CustomArrowProps } from "react-slick";
import { CarouselDataTypes, CarouselTypes } from "../Carousel.types";
import ReactPlayer from "react-player/lazy";
import Thumbnail from "../../../components/Thumbnail/Thumbnail";

const MediaViewerCarousel = ({ data, defaultOpen }: CarouselTypes) => {
  const [nav1, setNav1] = useState<any>(null);
  const [nav2, setNav2] = useState<any>(null);
  let sliderRef1: any = useRef(null);
  let sliderRef2: any = useRef(null);

  useEffect(() => {
    setNav1(sliderRef1);
    setNav2(sliderRef2);
  }, []);
  const [current, setCurrent] = useState(0);
  function CustomNextArrow(props: CustomArrowProps) {
    const { onClick } = props;
    return (
      <ChevronRight
        className="!hidden lg:!block slick-arrow slick-next stroke-white hover:stroke-slate-400 !w-[32px] !h-[32px] z-10 !me-[30px] !mt-4 !bg-primary/60"
        onClick={onClick}
      />
    );
  }

  function CustomPrevArrow(props: CustomArrowProps) {
    const { onClick } = props;
    return (
      <div>
        <ChevronLeft
          className="!hidden lg:!block slick-arrow slick-prev stroke-white hover:stroke-slate-400 !w-[32px] !h-[32px] z-10 !ms-[30px] !mt-4 !bg-primary/60"
          onClick={onClick}
        />
      </div>
    );
  }
  const Content = ({ data, showTitle, active  }: { data: any, showTitle?:boolean, active?:boolean}) => {
    const isVideo = data?.mediaType === 'video'
    return (
      <div className="relative -mt-16 aspect-[7/3] overflow-hidden">
        { isVideo && data?.video !== "" && <ReactPlayer playing={false} className="mt-10" controls width={'100%'} url={data?.video} /> }
        {isVideo && data?.video === "" && 
        <div className="w-full h-full flex flex-col justify-center items-center bg-black/30">
          <Empty />
          <Typography.Text className="!text-white">No Video URL!!!</Typography.Text>
          </div>} 
        {
          !isVideo && 
          <>
          <Thumbnail data={{image:data?.image}} />
          {/* <Image
          preview={false}
          width={"100%"}
          src={data?.image}
          alt="caro_img"
          /> */}
          {
            !!showTitle && !isVideo &&
            <div className="absolute top-14 left-5 bg-black/40 text-white py-2 px-5 text-xl">
              {data?.mediaTitle}
            </div>
          }
          </>
        }
      </div>
    );
  };
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    pauseOnHover: true,
    swipeToSlide: true,
    initialSlide:defaultOpen,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
    beforeChange: (_: number, page: number) => {
      setCurrent(page);
    },
  };
  return (
    <div className="slider-container cursor-pointer w-full overflow-hidden">
      <Slider
      className="mv-slider"
        {...settings}
        slidesToShow={1}
        asNavFor={nav2}
        ref={(slider) => (sliderRef1 = slider)}
      >
        {data?.map((d:any, i) => {
          return <Content showTitle active={i===current} key={i} data={d?.data} />;
        })}
      </Slider>
      <Slider
      className="px-20 overflow-hidden"
        asNavFor={nav1}
        slidesToShow={5}
        ref={(slider) => (sliderRef2 = slider)}
        focusOnSelect={true}
        centerMode={true}
        {...settings}
        initialSlide={0}
        responsive={[
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 5,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 800,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1
            }
          }
        ]}
      >
        {data?.map((d, i) => {
          const active = current === i ? " border-primary border-[2px] " : "";
          return <div key={i}>
            <Thumbnail data={d?.data} />
          </div>
        })}
      </Slider>
    </div>
  );
};

export default MediaViewerCarousel;
