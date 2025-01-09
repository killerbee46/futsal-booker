'use client'
import { Col, Row, Space } from "antd";
import React, { useState } from "react";
import MediaViewer from "../MediaViewer/MediaViewer";
import { GalleryDataTypes } from "../Gallery.types";
import Thumbnail from "../../../components/Thumbnail/Thumbnail";
import SectionTitle from '../../Open Intl/v2/SectionTitle/SectionTitle'
import MainContainer from "../../Maincontainer/Maincontainer";

const Gallery1 = ({ data:nn, galleryTitle:m, galleryDesc:n }: GalleryDataTypes) => {
  const data = [
    {
      video: "",
      image:
        "https://imgs.search.brave.com/2jHT2fvseazlUbpqRscCxqXh1OUL5Qib4zS_VyrX4Nc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by9w/b3J0cmFpdC13b21l/bi1jb21wZXRpbmct/b2x5bXBpYy1nYW1l/c18yMy0yMTUxNDUw/MjMxLmpwZz9zaXpl/PTYyNiZleHQ9anBn",
      mediaTitle: "Afrothlethe",
      mediaType: "image",
    },
    {
      video: "",
      image:
        "https://imgs.search.brave.com/LNJhAZS-qgKyt0DZ1ixG154EH8GOWtWcjAUAKmdEzU8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzA4LzEyLzQ1LzIw/LzM2MF9GXzgxMjQ1/MjA0MF9YTlJoeVNw/cU55Y1d5N251YmJI/bzdnWHRSNzV4VmZo/by5qcGc",
      mediaTitle: "Eternal Fire",
      mediaType: "image",
    },
    {
      video: "",
      image:
        "https://imgs.search.brave.com/501VFP-cN462FWj_e6GDahtO4oSO3AjmbSUoNFAtAZg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMjE2/MzA4MDYzNi9waG90/by9wYXJpcy1mcmFu/Y2UtYS1nZW5lcmFs/LXZpZXctb2YtdGhl/LWVpZmZlbC10b3dl/ci1haGVhZC1vZi10/aGUtcGFyaXMtMjAy/NC1vbHltcGljLWdh/bWVzLW9uLWp1bHku/anBnP3M9NjEyeDYx/MiZ3PTAmaz0yMCZj/PU41cklEZEtCSGty/c3JIX3VkNDFqX25K/b2dEQWo5aFc2THd6/ZTl0MHE0Mnc9",
      mediaTitle: "The Olympic Tower",
      mediaType: "image",
    },
    {
      video: "",
      image:
        "https://imgs.search.brave.com/URqRDZqV6V4gtTodwuGBZkrd0vbxpjGexlna80-d7ik/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9oaXBz/LmhlYXJzdGFwcHMu/Y29tL2htZy1wcm9k/L2ltYWdlcy9naXJs/LXBsYXlzLWluc2lk/ZS10aGUtb2x5bXBp/Yy1yaW5ncy1vbi1h/LWRpc3BsYXktZm9y/LXRoZS1uZXdzLXBo/b3RvLTE2NDU1NDg2/NjQuanBnP2Nyb3A9/MC42Njh4dzoxLjAw/eGg7MC4wNTkzeHcs/MCZyZXNpemU9MzYw/Oio",
      mediaTitle: "Kawaai",
      mediaType: "image",
    },
    {
      video: "https://youtu.be/ixCnsZswdpU?list=RDeEeX2QMlSlo",
      image:
        "https://imgs.search.brave.com/xFqoyDJ01m1Fr9xcf6Aq9PgMCcPeInMIRTbf9JVJaZU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTEy/NjE5MjU1Mi9waG90/by9hdGhsZXRlLXN3/aW1taW5nLWluLW9s/eW1waWMtcG9vbC5q/cGc_cz02MTJ4NjEy/Jnc9MCZrPTIwJmM9/UFlCV0p0bkIxak9P/cDQ1cjhXVGdvOUxJ/TDlNbi1xQ0NNYWRy/UHNRckdVUT0",
      mediaTitle: "Alexandar Shah",
      mediaType: "video",
    },
    {
      video:
        "https://www.youtube.com/watch?v=dXFVOkq41us&list=RDeEeX2QMlSlo&index=8&pp=8AUB",
      image:
        "https://imgs.search.brave.com/A3COpmSNRey_ygtMu73ZZQt-_3lg5vSc1pDr1bJrDYA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by9w/b3J0cmFpdC1hdGhs/ZXRlLWNvbXBldGlu/Zy1vbHltcGljLWdh/bWVzLXRvdXJuYW1l/bnRfMjMtMjE1MTQ3/MDk5Ni5qcGc_c2l6/ZT02MjYmZXh0PWpw/Zw",
      mediaTitle: "Running, 400m",
      mediaType: "video",
    },
    {
      video: "",
      image:
        "https://imgs.search.brave.com/R9dVgtBi627mVTcG3TKzyi4vuDbQ6Rdb6JRMhkO-O9c/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by9w/b3J0cmFpdC13b21h/bi1jb21wZXRpbmct/b2x5bXBpYy1nYW1l/c18yMy0yMTUxNDUw/MjIwLmpwZz9zaXpl/PTYyNiZleHQ9anBn",
      mediaTitle: "Archery, 200m",
      mediaType: "video",
    },
    {
      video: "",
      image:
        "https://imgs.search.brave.com/ySzUqIMnJxmohvIwIrQD8muklcLjnN0IsTYUYD83SGM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTQ0/OTg1NTczNi9waG90/by93aW5uaW5nLXJl/dHJvLXRyYWNrLXJh/Y2Vycy5qcGc_cz02/MTJ4NjEyJnc9MCZr/PTIwJmM9WE1lWHo1/R2FpUlJYSkhNQWNS/ZDFFUkRHbXBmM0x3/M01FSnM4QTVCOUhV/ST0",
      mediaTitle: "Kid Athletes",
      mediaType: "video",
    },
    {
      video: "",
      image:
        "https://imgs.search.brave.com/2jHT2fvseazlUbpqRscCxqXh1OUL5Qib4zS_VyrX4Nc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by9w/b3J0cmFpdC13b21l/bi1jb21wZXRpbmct/b2x5bXBpYy1nYW1l/c18yMy0yMTUxNDUw/MjMxLmpwZz9zaXpl/PTYyNiZleHQ9anBn",
      mediaTitle: "Afrothlethe",
      mediaType: "video",
    },
    {
      video: "",
      image:
        "https://imgs.search.brave.com/LNJhAZS-qgKyt0DZ1ixG154EH8GOWtWcjAUAKmdEzU8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzA4LzEyLzQ1LzIw/LzM2MF9GXzgxMjQ1/MjA0MF9YTlJoeVNw/cU55Y1d5N251YmJI/bzdnWHRSNzV4VmZo/by5qcGc",
      mediaTitle: "Eternal Fire",
      mediaType: "video",
    },
    {
      video: "",
      image:
        "https://imgs.search.brave.com/501VFP-cN462FWj_e6GDahtO4oSO3AjmbSUoNFAtAZg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMjE2/MzA4MDYzNi9waG90/by9wYXJpcy1mcmFu/Y2UtYS1nZW5lcmFs/LXZpZXctb2YtdGhl/LWVpZmZlbC10b3dl/ci1haGVhZC1vZi10/aGUtcGFyaXMtMjAy/NC1vbHltcGljLWdh/bWVzLW9uLWp1bHku/anBnP3M9NjEyeDYx/MiZ3PTAmaz0yMCZj/PU41cklEZEtCSGty/c3JIX3VkNDFqX25K/b2dEQWo5aFc2THd6/ZTl0MHE0Mnc9",
      mediaTitle: "The Olympic Tower",
      mediaType: "video",
    },
    {
      video: "",
      image:
        "https://imgs.search.brave.com/URqRDZqV6V4gtTodwuGBZkrd0vbxpjGexlna80-d7ik/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9oaXBz/LmhlYXJzdGFwcHMu/Y29tL2htZy1wcm9k/L2ltYWdlcy9naXJs/LXBsYXlzLWluc2lk/ZS10aGUtb2x5bXBp/Yy1yaW5ncy1vbi1h/LWRpc3BsYXktZm9y/LXRoZS1uZXdzLXBo/b3RvLTE2NDU1NDg2/NjQuanBnP2Nyb3A9/MC42Njh4dzoxLjAw/eGg7MC4wNTkzeHcs/MCZyZXNpemU9MzYw/Oio",
      mediaTitle: "Kawaai",
      mediaType: "video",
    },
  ],
  galleryTitle= "Olympic 2024 - Paris",
  galleryDesc= "Olympic"
  const images: any = [];
  for (let index = 0; index < data.length; index++) {
    if (index % 5 === 0) {
      const elementThree = data.slice(index, index + 3)?.map((d) => {
        return { data: d, two: false };
      });
      const elementTwo = data.slice(index + 3, index + 5)?.map((d) => {
        return { data: d, two: true };
      });
      images.push(...elementThree, ...elementTwo);
    }
  }

  const [mediaViewerModal, setMediaViewerModal] = useState({
    visible: false,
    url: "",
    videoUrl: "",
    data: [],
    open: 0,
  });

  const handleMediaViewerModal = ({ url, videoUrl, data, open }: any) => {
    console.log(url, "clicked");
    if (url || videoUrl) {
      setMediaViewerModal({
        visible: true,
        url: url,
        videoUrl: videoUrl,
        data: data,
        open: open,
      });
    } else {
      setMediaViewerModal({
        visible: false,
        url: "",
        videoUrl: "",
        data: [],
        open: 0,
      });
    }
  };

  return (
    <div>
      <MainContainer>
      <MediaViewer
        data={mediaViewerModal}
        closeModal={() => handleMediaViewerModal({})}
      />
      <Space
        className="!mt-5 !md:mt-10 !lg:mt-20 !mb-8 !md:mb-16 !lg:mb-24"
        size={"small"}
        direction="vertical"
      >
        <SectionTitle title={galleryTitle} subtitle={galleryDesc} />
      </Space>
      <Row gutter={[20, 30]}>
        {images?.map((dat: any, i: number) => {
          console.log(dat, i, "restructured array");
          return (
            <Col span={dat?.two ? 12 : 8} key={i}>
              <Thumbnail
                data={dat?.data}
                onClick={() =>
                  handleMediaViewerModal({
                    url: dat?.data?.image,
                    data: images,
                    open: i,
                  })
                }
              />
            </Col>
          );
        })}
      </Row>
      </MainContainer>
    </div>
  );
};

export default Gallery1;
