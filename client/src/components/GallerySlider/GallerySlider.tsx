import { Col, Image, Row } from "antd";
import React, { useState, useEffect, useRef } from "react";
import Slider from "react-slick";

function GallerySlider({images}:any) {
    const [nav1, setNav1] = useState<any>(null);
    const [nav2, setNav2] = useState<any>(null);
    let sliderRef1 = useRef(null);
    let sliderRef2 = useRef(null);

    const [active, setActive] = useState(0)
    
    useEffect(() => {
        setNav1(sliderRef1);
        setNav2(sliderRef2);
    }, []);
    return (
        <div className="slider-container">
            <Row gutter={20} align={'middle'}>
                <Col span={6}>
                <Slider
                vertical={true}
                arrows={false}
                asNavFor={nav1}
                ref={(slider:any) => (sliderRef2 = slider)}
                slidesToShow={4}
                swipeToSlide={true}
                focusOnSelect={true}
                beforeChange={(_:number, next:number) => {
                    setActive(next);
                  }}
            >
                {
                    images && images?.length !== 0 &&
                    images?.map((img:any, i:number)=> (
                        <Image key={i} src={img?.image} preview={false} className={`aspect-[7/4] cursor-pointer my-1 border-2 ${active === i ? " border-green-600": "border-transparent"}`} />
                    ))
                }
            </Slider>
                </Col>
                <Col span={18}>
                <Slider arrows={false} asNavFor={nav2} ref={(slider:any) => (sliderRef1 = slider)}>
                {
                    images && images?.length !== 0 &&
                    images?.map((img:any, i:number)=> (
                        <Image key={i} src={img?.image} preview={false} className="aspect-[7/5]" />
                    ))
                }
            </Slider>
                </Col>
            </Row>
        </div>
    );
}

export default GallerySlider;
