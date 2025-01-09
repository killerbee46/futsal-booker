import { ServiceCard } from "./ServiceCard";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Open Intl",
  component: ServiceCard,
  parameters: {
    // layout: "centered",
  },
} satisfies Meta<typeof ServiceCard>;

export default meta;
type CardTypes = StoryObj<typeof meta>;

export const Service_Card: CardTypes = {
  args: {
    title: "Study in Japan",
    content:
      "We have targeted to guide Japanese Learners and make them pass the Japanese Language Proficiency Test like NAT-TEST/JLPT/TOP-J with excellent score.",
    image: "https://cdn-icons-png.flaticon.com/128/3914/3914110.png",
  },
};
