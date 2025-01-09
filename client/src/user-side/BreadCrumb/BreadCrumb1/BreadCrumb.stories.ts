import type { Meta, StoryObj } from "@storybook/react";
import BreadCrumb1 from "./BreadCrumb1";

const meta = {
  title: "BreadCrumb",
  component: BreadCrumb1,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof BreadCrumb1>;

export default meta;
type BreadCrumbTypes = StoryObj<typeof meta>;

export const BreadCrumbTypes: BreadCrumbTypes = {
  args: {
    data:['','hello'],
    page:"Page"
  },
};
