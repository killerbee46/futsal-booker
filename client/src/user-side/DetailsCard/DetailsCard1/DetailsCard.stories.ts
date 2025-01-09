import { DetailsCard1 } from "./DetailsCard1";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Details Card",
  component: DetailsCard1,
  parameters: {
    // layout: "centered",
  },
} satisfies Meta<typeof DetailsCard1>;

export default meta;
type EventDetails_Types = StoryObj<typeof meta>;

export const DetailsCardOne: EventDetails_Types = {
  args: {
    details: [
      {
        label: "Event Date",
        value: "21 March, 2024",
        icon: "https://cdn-icons-png.flaticon.com/128/3239/3239948.png",
      },
      {
        label: "Event Time",
        value: "12 : 00 AM ",
        icon: "https://cdn-icons-png.flaticon.com/128/3114/3114812.png",
      },
      {
        label: "Event Venue",
        value: "Cubbod Hall, Tripureshwor",
        icon: "https://cdn-icons-png.flaticon.com/128/684/684809.png",
      },
    ],
  },
};
