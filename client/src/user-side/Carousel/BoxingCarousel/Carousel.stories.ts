import type { Meta, StoryObj } from "@storybook/react";
import BoxingTestimonialCarousel from "./Carousel";

const meta = {
  title: "BoxingTestimonal",
  component: BoxingTestimonialCarousel,
  parameters: {
    // layout: "centered",
  },
} satisfies Meta<typeof BoxingTestimonialCarousel>;

export default meta;
type CarouselTypes = StoryObj<typeof meta>;

export const Event_Carousel: CarouselTypes = {
  args: {
    title: "Our Boxer Testimonials",
    subtitle:
      "Boxing is also one of the most enjoyed and popular games in Nepal. With all the modality and administrative purpose, Nepal Boxing Federation was inagurated in",
    image:
      "https://t4.ftcdn.net/jpg/06/33/50/89/360_F_633508902_HrmMPOOYiFrVxryrqKNWQym6uq7zMsyY.jpg",
    data: [
      {
        image:
          "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=600",
        content:
          "During the 19th and again at the beginning of the 20th century, the popularity of boxing brought. the popularity of boxing brought",
        user_name: "Anish Shrestha",
        designation: "Boxer Trainer",
        rating: 4,
      },
      {
        image:
          "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=600",
        content:
          "During the 19th and again at the beginning of the 20th century, the popularity of boxing brought. the popularity of boxing brought",
        user_name: "Anish Shrestha",
        designation: "Boxer Trainer",
        rating: 4,
      },
      {
        image:
          "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=600",
        content:
          "During the 19th and again at the beginning of the 20th century, the popularity of boxing brought. the popularity of boxing brought",
        user_name: "Anish Shrestha",
        designation: "Boxer Trainer",
        rating: 4,
      },
      {
        image:
          "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=600",
        content:
          "During the 19th and again at the beginning of the 20th century, the popularity of boxing brought. the popularity of boxing brought",
        user_name: "Anish Shrestha",
        designation: "Boxer Trainer",
        rating: 4,
      },
    ],
  },
};
