import type { Meta, StoryObj } from "@storybook/react";
import Error404A from "./Error404A";

const meta = {
  title: "Error 404",
  component: Error404A,
  parameters: {
    // layout: "centered",
  },
} satisfies Meta<typeof Error404A>;

export default meta;
type Error404Types = StoryObj<typeof meta>;

export const Error404_A: Error404Types = {
  args: {
    title:"404",
    subtitle:"Page Not Found", 
    description:"The page page you are requesting for does not exist.",
    buttonLabel:"Back To Home",
    buttonPath:"/", 
    image:"https://imgs.search.brave.com/Z12uytWyYh7ijlJl4N3eax4K0EMUHM99CZIpVc2OToA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/cGl4YWJheS5jb20v/cGhvdG8vMjAxOC8w/My8wMi8wOS8wNC9s/b3R1cy0zMTkyNjU2/XzY0MC5wbmc",
    backgroundPrimary:'black',
    backgroundSecondary:'white', 
    textColor:''
  },
};
