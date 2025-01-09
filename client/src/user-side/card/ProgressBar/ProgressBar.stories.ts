import type { Meta, StoryObj } from "@storybook/react";
import ProgressBar from "./ProgressBar";

const meta = {
  title: "Card",
  component: ProgressBar,
  parameters: {
    // layout: "centered",
  },
} satisfies Meta<typeof ProgressBar>;

export default meta;
type ProgressBar_types = StoryObj<typeof meta>;

export const ProgressBarCard: ProgressBar_types = {
  args: {
    percent: 90,
    title: "Boxing Instance",
    description: "Driving is a skill many of us desire but do not possess",
    stroke_color: "#001342",
  },
};
