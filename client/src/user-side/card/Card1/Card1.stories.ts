import type { Meta, StoryObj } from "@storybook/react";
import Card1 from "./Card1";

const meta = {
  title: "Card",
  component: Card1,
  parameters: {
    // layout: "centered",
  },
} satisfies Meta<typeof Card1>;

export default meta;
type CardType = StoryObj<typeof meta>;

export const CardOne: CardType = {
  args: {
    image:
      "https://imgs.search.brave.com/4foqJkZ0suocb4Z1SWGz-o47qxooTl6AJSNmm39UoCw/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jbGlw/YXJ0LWxpYnJhcnku/Y29tL25ld19nYWxs/ZXJ5LzM2Ny0zNjc5/MzQzX3BuZy1sb2dv/LXBvcnRhYmxlLW5l/dHdvcmstZ3JhcGhp/Y3MucG5n",
    content:
      "We specialize in UI design for exceptional user experiences aligned with your brand. Our services include website and app design, as well as wireframing and prototyping to refine digital products efficiently. We specialize in UI design for exceptional user experiences aligned with your brand. Our services include website and app design, as well",
    title: "UI Design",
    width: 300,
  },
};
