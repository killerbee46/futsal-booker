import type { Meta, StoryObj } from "@storybook/react";
import ServiceContainer from "./ServiceContainer";

const meta = {
  title: "Open Intl",
  component: ServiceContainer,
  parameters: {
    // layout: "centered",
  },
} satisfies Meta<typeof ServiceContainer>;

export default meta;
type ContainerTypes = StoryObj<typeof meta>;

export const Service_Container: ContainerTypes = {
  args: {
    sectionTitle: "Our Services",
    image: "https://cdn-icons-png.flaticon.com/128/3914/3914110.png",
    data:[
        {
            title: "Study in Japan",
            content:
              "We have targeted to guide Japanese Learners and make them pass the Japanese Language Proficiency Test like NAT-TEST/JLPT/TOP-J with excellent score.",
            // image: "https://cdn-icons-png.flaticon.com/128/3914/3914110.png",
          },
          {
            title: "Study in Japan",
            content:
              "We have targeted to guide Japanese Learners and make them pass the Japanese Language Proficiency Test like NAT-TEST/JLPT/TOP-J with excellent score.",
            // image: "https://cdn-icons-png.flaticon.com/128/3914/3914110.png",
          },
          {
            title: "Study in Japan",
            content:
              "We have targeted to guide Japanese Learners and make them pass the Japanese Language Proficiency Test like NAT-TEST/JLPT/TOP-J with excellent score.",
            // image: "https://cdn-icons-png.flaticon.com/128/3914/3914110.png",
          },
    ]
},
};
