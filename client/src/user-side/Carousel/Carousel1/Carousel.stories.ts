import { Carousel1 } from "./Carousel";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Carousel",
  component: Carousel1,
  parameters: {
    // layout: "centered",
  },
} satisfies Meta<typeof Carousel1>;

export default meta;
type Testimonial_Type = StoryObj<typeof meta>;

export const Carousel_One: Testimonial_Type = {
  args: {
    title: "Testimonials",
    subtitle: "What our customers say about us",
    carousel_data: [
      {
        image_url:
          "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=600",
        user_name: "Rajesh Chaudhary",
        designation: "Frontend Developer",
        content:
          "Choosing Boxing has been one of the best decisions I've made for my fitness and personal growth. The training is rigorous, but the results are worth it. The coaches push you to be your best while also ensuring proper technique and safety. The team spirit is fantastic, with everyone supporting each other's progress. Highly recommend to anyone serious about boxing!",
      },
      {
        image_url:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVaRqJ7z3wjo9Zd2TKsjJHkHyAlCNjY26CjQ&s",
        user_name: "Anish Shrestha",
        designation: "Frontend Developer",
        content:
          "Choosing Boxing has been one of the best decisions I've made for my fitness and personal growth. The training is rigorous, but the results are worth it. The coaches push you to be your best while also ensuring proper technique and safety. The team spirit is fantastic, with everyone supporting each other's progress. Highly recommend to anyone serious about boxing!",
      },
      {
        image_url:
          "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg",
        user_name: "Khem singh",
        designation: "Frontend Developer",
        content:
          "Choosing Boxing has been one of the best decisions I've made for my fitness and personal growth. The training is rigorous, but the results are worth it. The coaches push you to be your best while also ensuring proper technique and safety. The team spirit is fantastic, with everyone supporting each other's progress. Highly recommend to anyone serious about boxing!",
      },
    ],
  },
};
