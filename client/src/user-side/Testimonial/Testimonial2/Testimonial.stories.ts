import { Testimonial2 } from "./Testimonial2";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Testimonial",
  component: Testimonial2,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Testimonial2>;

export default meta;
type Testimonial_Type = StoryObj<typeof meta>;

export const Testimonial_two: Testimonial_Type = {
  args: {
    image_url:
      "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=600",
    user_name: "Rajesh Chaudhary",
    designation: "Frontend Developer",
    content:
      "Choosing Boxing has been one of the best decisions I've made for my fitness and personal growth. The training is rigorous, but the results are worth it. The coaches push you to be your best while also ensuring proper technique and safety. The team spirit is fantastic, with everyone supporting each other's progress. Highly recommend to anyone serious about boxing!",
    rating: 4,
  },
};
