import { Contact1 } from "./Contact1";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Contact",
  component: Contact1,
  parameters: {
    // layout: "centered",
  },
} satisfies Meta<typeof Contact1>;

export default meta;
type Contact1 = StoryObj<typeof meta>;

export const ContactOne: Contact1 = {
  args: {},
};
