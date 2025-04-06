import React from 'react'
import MainContainer from '../../user-side/Maincontainer/Maincontainer'
import Slider, { CustomArrowProps } from 'react-slick'
import FutsalCard from '../FutsalCard/FutsalCard'
import SectionTitle from '../SectionTitle/SectionTitle'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const FutsalSlider = ({data}:any) => {
    console.log(data)
    function CustomNextArrow(props: CustomArrowProps) {
        const { onClick } = props;
        return (
            <ChevronRight
                className="!hidden lg:!block slick-arrow slick-next stroke-[#357960] hover:stroke-slate-400 !w-[32px] !h-[32px] z-10 m-0 md:-me-2"
                onClick={onClick}
            />
        );
    }

    function CustomPrevArrow(props: CustomArrowProps) {
        const { onClick } = props;
        return (
            <div>
                <ChevronLeft
                    className="!hidden lg:!block slick-arrow slick-prev stroke-[#357960] hover:stroke-slate-400 !w-[32px] !h-[32px] z-10 m-0 md:-ms-2"
                    onClick={onClick}
                />
            </div>
        );
    }

    const settings = {
        dots: false,
    infinite: true,
    speed: 500,
    adaptiveHeight:true,
    slidesToShow: 4,
    autoautoplay: true,
    slidesToScroll: 1,
    pauseOnHover: true,
    swipeToSlide: true,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
            }
          },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
          }
        }
      ]
    }
    return (
        <MainContainer className='my-10'>
            <SectionTitle subTitle="Popular Futsals" />
            <Slider {...settings} >
                {
                    data?.map((d:any, i:number) => (
                        <div key={i} className='!p-3'>
                            <FutsalCard {...d} />
                        </div>
                    ))
                }
            </Slider>
        </MainContainer>
    )
}

export default FutsalSlider