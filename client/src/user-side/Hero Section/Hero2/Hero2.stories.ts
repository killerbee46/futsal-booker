import { Hero2 } from "./Hero2";
import type { Meta, StoryObj } from "@storybook/react";
import heroimage from "../../../assets/hero-image.png";
import Title from "antd/es/skeleton/Title";
import { ArrowRight } from "lucide-react";

const meta = {
  title: "Hero2",
  component: Hero2,
  parameters: {
    // layout: "centered",
  },
} satisfies Meta<typeof Hero2>;

export default meta;
type Hero2 = StoryObj<typeof meta>;

export const HeroTwo: Hero2 = {
  args: {
    bgImageUrl:
      "https://images.unsplash.com/photo-1434648957308-5e6a859697e8?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    titleText: "Explore the world of Boxing",
  },
};
