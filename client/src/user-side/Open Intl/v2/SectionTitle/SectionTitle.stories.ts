import type { Meta, StoryObj } from "@storybook/react";
import SectionTitle from "./SectionTitle";

const meta = {
  title: "Open Intl",
  component: SectionTitle,
  parameters: {
    // layout: "centered",
  },
} satisfies Meta<typeof SectionTitle>;

export default meta;
type SectionTitleTypes = StoryObj<typeof meta>;

export const Open_Section_Title: SectionTitleTypes = {
  args: {
    title: "The Title",
    subtitle:"The subtitle",
    buttonLabel:"View More"
  },
};
