import { ExCard } from "./ExCard";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Details Card",
  component: ExCard,
  parameters: {
    // layout: "centered",
  },
} satisfies Meta<typeof ExCard>;

export default meta;
type EventDetails_Types = StoryObj<typeof meta>;

export const ExperienceCard: EventDetails_Types = {
  args: {
    details: [
      {
        label: "Matches",
        value: "100+",
      },
      {
        label: "National",
        value: "20",
      },
      {
        label: "International",
        value: "30",
      },
      {
        label: "Experince",
        value: "3Yr+",
      },
    ],
  },
};
