import type { Meta, StoryObj } from "@storybook/react";
import IconText from "./IconText";

const meta = {
  title: "Icon Text",
  component: IconText,
  parameters: {
    // layout: "centered",
  },
} satisfies Meta<typeof IconText>;

export default meta;
type IconTextTypes = StoryObj<typeof meta>;

export const Icon_Text: IconTextTypes = {
  args: {
    icon:'https://imgs.search.brave.com/DTSZuFj0aj2vBrjeN9P8VxIPg0qZis88USHiOVNRmDA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4t/aWNvbnMtcG5nLmZy/ZWVwaWsuY29tLzI1/Ni8xMjQ3Ni8xMjQ3/NjkzNC5wbmc_c2Vt/dD1haXNfaHlicmlk',
    text:'email.email.com',
    href:'',
    textBold:false,
    textColor:''
  },
};
