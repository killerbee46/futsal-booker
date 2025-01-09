import { CTA2 } from "./CTA2";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Open Intl",
  component: CTA2,
  parameters: {
    // layout: "centered",
  },
} satisfies Meta<typeof CTA2>;

export default meta;
type CTATypes = StoryObj<typeof meta>;

export const CTA_Two: CTATypes = {
  args: {
    title: "About Us",
    description:
      "Japan is an economically-developed country with advanced scientific technology. People in universities and businesses carry out innovative basic and applied research every day, and countless new technologies and theories are being developed and put to use. This scientific technology and academic theoretical work are the tools that support people’s lives and society all over the world.",
    image_url:
      "https://openintlacademy.com/wp-content/uploads/2020/09/online-education-service-flat-vector-concept_81522-3732.jpg",
    imgOnLeft: false,
  },
};
