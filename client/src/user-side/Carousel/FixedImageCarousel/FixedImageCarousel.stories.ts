import type { Meta, StoryObj } from "@storybook/react";
import FixedImageCarousel from "./FixedImageCarousel";

const meta = {
  title: "Fixed Image Carousel",
  component: FixedImageCarousel,
  parameters: {
    // layout: "centered",
  },
} satisfies Meta<typeof FixedImageCarousel>;

export default meta;
type CarouselTypes = StoryObj<typeof meta>;

export const Fixed_Image_Carousel: CarouselTypes = {
  args: {
    data: [
      {content:"The First content for the content ful carousel",buttonDetails:[{label:"Explore", path:'/sdas'}]},
      {content:"This is the second content for the content ful carousel",buttonDetails:[{label:"Explore", path:'/sdas'}]},
      {content:"The contents",buttonDetails:[{label:"Find More"},{label:"Function", onClick:()=>alert("Run a function")}]},
      {content:"Should Continue",buttonDetails:[{label:"Function", onClick:()=>alert("Run a function")}]},
    ],
  cover : "https://imgs.search.brave.com/_6czKZ_ubNbmDwR7sLmjWRclM7_f9vvtEZ6GjX5jzn0/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXItbWFuaWEu/Y29tL3dwLWNvbnRl/bnQvdXBsb2Fkcy8y/MDE4LzA5L0hpZ2hf/cmVzb2x1dGlvbl93/YWxscGFwZXJfYmFj/a2dyb3VuZF9JRF83/NzcwMTM2ODQzMC5q/cGc"
  },
  
};
