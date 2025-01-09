import type { Meta, StoryObj } from "@storybook/react";
import TestimonialCarousel from "./TestimonialCarousel";

const meta = {
  title: "Testimonial Carousel",
  component: TestimonialCarousel,
  parameters: {
    // layout: "centered",
  },
} satisfies Meta<typeof TestimonialCarousel>;

export default meta;
type CarouselTypes = StoryObj<typeof meta>;

const image =
  "https://imgs.search.brave.com/JbA0waJk6tyUxgCbUgoRj34kvHR9vmK_aSt7i75HtP8/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMudW5zcGxhc2gu/Y29tL3Bob3RvLTE0/OTQ3OTAxMDgzNzct/YmU5YzI5YjI5MzMw/P3E9ODAmdz0xMDAw/JmF1dG89Zm9ybWF0/JmZpdD1jcm9wJml4/bGliPXJiLTQuMC4z/Jml4aWQ9TTN3eE1q/QTNmREI4TUh4elpX/RnlZMmg4TW54OGNH/VnljMjl1SlRJd2FX/TnZibnhsYm53d2ZI/d3dmSHg4TUE9PQ";
const image2 =
  "https://imgs.search.brave.com/xmI34XCLK-C6Gi30PYRgw7iCBjKnB6gt6lVpd8wu7jc/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMudW5zcGxhc2gu/Y29tL3Bob3RvLTE1/NTQxNTEyMjgtMTRk/OWRlZjY1NmU0P3E9/ODAmdz0xMDAwJmF1/dG89Zm9ybWF0JmZp/dD1jcm9wJml4bGli/PXJiLTQuMC4zJml4/aWQ9TTN3eE1qQTNm/REI4TUh4elpXRnlZ/Mmg4T0h4OGNHVnlj/Mjl1ZkdWdWZEQjhm/REI4Zkh3dw";
const image3 =
  "https://imgs.search.brave.com/bLiiqor1TNhr5l4XUYOqeKQU6aMbtiXf2B4BJ8BzYhY/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jZG4u/cGl4YWJheS5jb20v/cGhvdG8vMjAxNy8x/Mi8zMS8xNS81Ni9w/b3J0cmFpdC0zMDUy/NjQxXzY0MC5qcGc";

export const Testimonial_Carousel: CarouselTypes = {
  args: {
    data: [
      {
        content:
          "Beautiful words that came out my mouth for this awesome organization Beautiful words that came out my mouth for this awesome organizationBeautiful words that came out my mouth for this awesome organization",
        user_name: "Hari Bahadur",
        designation: "Village Goon",
        image: image,
      },
      {
        content:
          "Beautiful words that came out my mouth for this awesome organization",
        user_name: "Hari Bahadur",
        designation: "Village Goon",
        image: image2,
      },
      {
        content:
          "Beautiful words that came out my mouth for this awesome organization",
        user_name: "Hari Bahadur",
        designation: "Village Goon",
        image: image3,
      },
    ],
    title: "What Our Clients Say About",
    imageMode:'avatar'
  },
};
