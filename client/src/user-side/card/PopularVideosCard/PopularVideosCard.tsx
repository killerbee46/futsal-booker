import { Col, Image, Row, Space } from "antd";
import Link from "antd/es/typography/Link";
import Title from "antd/es/typography/Title";
import { Play } from "lucide-react";
import { CardTypes } from "../Card.types";
import VideoPlayerModal from "@/components/videoPlayerModal/VideoPlayerModal";
import { useState } from "react";

const PopularVideosCard = ({
  path,
  image,
  secondaryImage,
  content,
  title,
  user,
}: CardTypes) => {
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
        url: '',
      });
    }
  };
  return (
    <>
    <VideoPlayerModal data={videoModal} closeModal={()=> handleVideoModal()} />
      <div className="p-[10] pb-[10%] h-fit">
      <Row className="w-[90%]">
        <Col md={10} xs={18}>
          <Image
            src={image}
            alt="img"
            width={"100%"}
            preview={false}
            className="aspect-[8/9]"
          />
        </Col>
        <Col md={14} sm={16} xs={18} className="p-[2%]">
          <Title level={5} className="user_name !text-primary !font-bold !m-0">
            {user}
          </Title>
          <Title level={3} className="title !font-bold !my-2">
            {title}
          </Title>
          <div>
            <Title
              level={5}
              className="content !font-normal text-primary line-clamp-5 !my-2 relative"
            >
              {content}
            </Title>
            <div className="secondary_image w-full md:w-[130%] md:translate-x-[-30%] relative border-8 border-white h-max">
              <Link onClick={()=> handleVideoModal(path)}>
                <div
                  style={{ opacity: 0.3 }}
                  className="w-full bg-black absolute top-0 right-0 left-0 bottom-2 z-10"
                ></div>
                <Image
                  src={secondaryImage}
                  alt="img"
                  width={"100%"}
                  height={'100%'}
                  preview={false}
                  className="aspect-video"
                />
                <Title
                  level={3}
                  className="flex gap-5 items-center absolute bottom-[15%] left-[10%] z-20 !text-white"
                >
                  <Play strokeWidth={4} size={40} className="bg-primary p-2" />{" "}
                  <div>Best Fight Videos</div>
                </Title>
                <div>
                  <Space></Space>
                </div>
              </Link>
            </div>
          </div>
        </Col>
      </Row>
    </div>
    </>
  );
};

export default PopularVideosCard;
