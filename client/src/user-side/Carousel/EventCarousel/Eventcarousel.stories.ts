import type { Meta, StoryObj } from "@storybook/react";
import EventCarousel from "./EventCarousel";

const meta = {
  title: "Event Carousel",
  component: EventCarousel,
  parameters: {
    // layout: "centered",
  },
} satisfies Meta<typeof EventCarousel>;

export default meta;
type CarouselTypes = StoryObj<typeof meta>;

export const Event_Carousel: CarouselTypes = {
  args: {
    title: "<span class='text-secondary'> Our Boxing </span> Events",
    subtitle:
      "Boxing is also one of the most enjoyed and popular games in Nepal. With all the modality and administrative purpose, Nepal Boxing Federation was inagurated in",
    bg_image:
      "https://t3.ftcdn.net/jpg/06/73/80/28/360_F_673802814_3oMijquiPFxGH8iMKjEiB5uCxBYNnJjA.jpg",
    data: [
      {
        image:
          "https://img.freepik.com/free-vector/boxing-gloves-realistic_1284-11420.jpg?w=740&t=st=1718776144~exp=1718776744~hmac=a7566cf7a530e152c8b333ca0efa3ef16ee41af4f59fec64a826fee446649b11",
        content:
          "During the 19th and again at the beginning of the 20th century, the popularity of boxing brought. the popularity of boxing brought",
        title: "Boxing, Men's Flyweight (51kg)",
      },
      {
        image:
          "https://img.freepik.com/free-vector/boxing-gloves-realistic_1284-11420.jpg?w=740&t=st=1718776144~exp=1718776744~hmac=a7566cf7a530e152c8b333ca0efa3ef16ee41af4f59fec64a826fee446649b11",
        content:
          "During the 19th and again at the beginning of the 20th century, the popularity of boxing brought. the popularity of boxing brought",
        title: "Boxing, Men's Flyweight (51kg)",
      },
      {
        image:
          "https://img.freepik.com/free-vector/boxing-gloves-realistic_1284-11420.jpg?w=740&t=st=1718776144~exp=1718776744~hmac=a7566cf7a530e152c8b333ca0efa3ef16ee41af4f59fec64a826fee446649b11",
        content:
          "During the 19th and again at the beginning of the 20th century, the popularity of boxing brought. the popularity of boxing brought",
        title: "Boxing, Men's Flyweight (51kg)",
      },
      {
        image:
          "https://img.freepik.com/free-vector/boxing-gloves-realistic_1284-11420.jpg?w=740&t=st=1718776144~exp=1718776744~hmac=a7566cf7a530e152c8b333ca0efa3ef16ee41af4f59fec64a826fee446649b11",
        content:
          "During the 19th and again at the beginning of the 20th century, the popularity of boxing brought. the popularity of boxing brought",
        title: "Boxing, Men's Flyweight (51kg)",
      },
      {
        image:
          "https://img.freepik.com/free-vector/boxing-gloves-realistic_1284-11420.jpg?w=740&t=st=1718776144~exp=1718776744~hmac=a7566cf7a530e152c8b333ca0efa3ef16ee41af4f59fec64a826fee446649b11",
        content:
          "During the 19th and again at the beginning of the 20th century, the popularity of boxing brought. the popularity of boxing brought",
        title: "Boxing, Men's Flyweight (51kg)",
      },
    ],
  },
};
