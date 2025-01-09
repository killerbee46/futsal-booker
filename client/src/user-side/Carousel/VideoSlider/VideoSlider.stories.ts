import type { Meta, StoryObj } from "@storybook/react";
import VideoCarousel from "./VideoSlider";

const meta = {
  title: "Video Slider",
  component: VideoCarousel,
  parameters: {
    // layout: "centered",
  },
} satisfies Meta<typeof VideoCarousel>;

export default meta;
type CarouselTypes = StoryObj<typeof meta>;

const image ="https://imgs.search.brave.com/RKXiTz1lqkKH0HGVnzUfovatrCpAVib0X4UpaYTl36A/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvNTIx/MDExNjUyL3Bob3Rv/L25pZ2h0LXNjZW5l/LW1pbGt5LXdheS1i/YWNrZ3JvdW5kLndl/YnA_Yj0xJnM9MTcw/NjY3YSZ3PTAmaz0y/MCZjPXM5blZ4UlpM/TEpNTU1TQ2wtSHhL/NnJqYVY1SmNFZy1Q/cjJzRlFmMHp4RDA9"
  "https://imgs.search.brave.com/JbA0waJk6tyUxgCbUgoRj34kvHR9vmK_aSt7i75HtP8/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMudW5zcGxhc2gu/Y29tL3Bob3RvLTE0/OTQ3OTAxMDgzNzct/YmU5YzI5YjI5MzMw/P3E9ODAmdz0xMDAw/JmF1dG89Zm9ybWF0/JmZpdD1jcm9wJml4/bGliPXJiLTQuMC4z/Jml4aWQ9TTN3eE1q/QTNmREI4TUh4elpX/RnlZMmg4TW54OGNH/VnljMjl1SlRJd2FX/TnZibnhsYm53d2ZI/d3dmSHg4TUE9PQ";
  const thumb = 'https://i.ytimg.com/vi/P_XguuxLo10/hqdefault.jpg?sqp=-oaymwE2CNACELwBSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB_gmAAtAFigIMCAAQARhyIEsoPTAP&rs=AOn4CLCjYsUjDk-aijSjrQeR4SVB_694Jw'

export const Video_Slider: CarouselTypes = {
  args: {
    data : [
      {image:image, video:'https://www.youtube.com/watch?v=hjpF8ukSrvk&list=RDqY3GN8UTWco&index=3&pp=8AUB'},
      {image:image, video:'https://youtu.be/t-AHPemYAps?list=RDqY3GN8UTWco'},
      {image:thumb, video:'https://www.youtube.com/watch?v=P_XguuxLo10'},
    ]
  }
};
