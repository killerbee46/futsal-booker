import type { Meta, StoryObj } from "@storybook/react";
import SectionTitle from "./SectionTitle";

const meta = {
  title: "Section Title",
  component: SectionTitle,
  parameters: {
    // layout: "centered",
  },
} satisfies Meta<typeof SectionTitle>;

export default meta;
type SectionTitleTypes = StoryObj<typeof meta>;

export const Section_Title: SectionTitleTypes = {
  args: {
    title: "<span class='text-secondary'> Our Boxing </span> Events",
    subtitle:
      "Boxing is also one of the most enjoyed and popular games in Nepal. With all the modality and administrative purpose, Nepal Boxing Federation was inagurated in",
    alignCenter: true,
  },
};
