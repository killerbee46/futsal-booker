import { VoiceofPrincipal } from "./VoiceofPrincipal";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Open Intl",
  component: VoiceofPrincipal,
  parameters: {
    // layout: "centered",
  },
} satisfies Meta<typeof VoiceofPrincipal>;

export default meta;
type PrincipalTypes = StoryObj<typeof meta>;

export const Principal: PrincipalTypes = {
  args: {
    name: "RUPSING TAMANG",
    designation: "Principal",
    content:
      "NAMASTE, First of all, I would like to welcome you all in Open International Academy. As we all know that, Japan and South Korea has become a popular destination for abroad study among Nepalese Students. Thus, keeping these facts in mind Open International Academy is established to assist Nepalese Student who wants to pursue their further education from globally recognized Universities of Japan and South Korea. We have been providing many services and also have been working as a bridge between Nepalese Students and Japanese and South Korea Language Schools/University.<br>Japan and Korea is known as one of the developed and prosperous countries in the world. In addition, its technological breakthrough and educational advancement has aroused curiosity and attraction to people from all over the world. Due to its influence there is an increasing number of Nepalese students showing interest towards Japan and South Korea day by day. As a result, many students are planning to continue their education from renowned Japanese and South Korean Language Schools/University. <br>In this institution we have got excellent language trainers who are specialist in this field and have many years of experience, qualifications in teaching Japanese and Korean language to many students. Thus, we would like to welcome you all in Open International Academy and help you in further guidance related to study in Japan and South Korea.",
    images: [
      {
        image:
          "https://openintlacademy.com/wp-content/uploads/2020/10/Japan-Nepal-Flag.jpg",
      },
      {
        image:
          "https://openintlacademy.com/wp-content/uploads/2022/03/Rupsingh.jpeg",
      },
      {
        image:
          "https://openintlacademy.com/wp-content/uploads/2020/10/Korea-Nepal-Flag.jpg",
      },
    ],
  },
};
