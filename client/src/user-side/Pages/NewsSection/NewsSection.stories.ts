import type { Meta, StoryObj } from "@storybook/react";
import NewsSection from "./NewsSection";

const meta = {
  title: "Pages",
  component: NewsSection,
  parameters: {
    // layout: "centered",
  },
} satisfies Meta<typeof NewsSection>;

export default meta;
type News_section_types = StoryObj<typeof meta>;

export const NewsSection1: News_section_types = {
  args: {
    title: "latest <span class='text-primary'>news</span>",
    bg_image:
      "https://media.istockphoto.com/id/903737446/photo/female-boxer-training-inside-a-boxing-ring.jpg?s=612x612&w=0&k=20&c=qOCcUY-RqZYSPGKquPwpEt4kY1JFsqJuiGV4addLZSM=",
    data: [
      {
        index: "01",
        image:
          "https://img.freepik.com/free-photo/portrait-serious-female-boxer-boxing-gloves-sportive-wear-dark-photo-studio_613910-11552.jpg",
        title: "THE BIGGEST NATIONAL BOXING CHAMPIONSHIP",
        content:
          "Boxing is also one of the most enjoyed and popular games in Nepal. With all the modality and administrative purpose, ",
        date: "May 20, 2024",
      },
      {
        index: "02",
        image:
          "https://img.freepik.com/free-photo/portrait-serious-female-boxer-boxing-gloves-sportive-wear-dark-photo-studio_613910-11552.jpg",
        title: "THE BIGGEST NATIONAL BOXING CHAMPIONSHIP",
        content:
          "Boxing is also one of the most enjoyed and popular games in Nepal. With all the modality and administrative purpose, ",
        date: "May 20, 2024",
      },
      {
        index: "03",
        image:
          "https://img.freepik.com/free-photo/portrait-serious-female-boxer-boxing-gloves-sportive-wear-dark-photo-studio_613910-11552.jpg",
        title: "THE BIGGEST NATIONAL BOXING CHAMPIONSHIP",
        content:
          "Boxing is also one of the most enjoyed and popular games in Nepal. With all the modality and administrative purpose, ",
        date: "May 20, 2024",
      },
    ],
  },
};
