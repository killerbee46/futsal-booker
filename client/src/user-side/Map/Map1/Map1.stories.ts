import type { Meta, StoryObj } from "@storybook/react";
import Map1 from "./Map1";

const meta = {
  title: "Map1",
  component: Map1,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Map1>;

export default meta;
type Map_Types = StoryObj<typeof meta>;

export const Map_One: Map_Types = {
  args: {
    location:'Biryani Adda Baluwatar',
    width:'600px'
  },
};
