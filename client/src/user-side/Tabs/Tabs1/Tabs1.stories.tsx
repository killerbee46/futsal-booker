import type { Meta, StoryObj } from "@storybook/react";
import Tabs1 from "./Tabs1";

const meta = {
  title: "Open Intl",
  component: Tabs1,
  parameters: {
    // layout: "centered",
  },
} satisfies Meta<typeof Tabs1>;

export default meta;
type TabsTypes = StoryObj<typeof meta>;

export const Tabs_One: TabsTypes = {
  args: {
    title: "Our Courses",
    data:[],
    subtitle:
      "Boxing is also one of the most enjoyed and popular games in Nepal. With all the modality and administrative purpose, Nepal Boxing Federation was inagurated in"
  },
};
