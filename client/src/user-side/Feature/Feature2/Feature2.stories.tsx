import { UploadCloud } from "lucide-react";
import { Feature2 } from "./Feature2";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Feature Section",
  component: Feature2,
  parameters: {
    // layout: "centered",
  },
} satisfies Meta<typeof Feature2>;

export default meta;
type Feature_types = StoryObj<typeof meta>;

export const FeatureTwo: Feature_types = {
  args: {
    title: "Deploy faster",
    subtitle: "Everything you need to deploy your app",
    description:
      "Quis tellus eget adipiscing convallis sit sit eget aliquet quis. Suspendisse eget egestas a elementum pulvinar et feugiat blandit at. In mi viverra elit nunc.",
    feature_card: [
      {
        icon: "https://cdn-icons-png.freepik.com/512/32/32273.png",
        title: "Push to deploy",
        description:
          "Morbi viverra dui mi arcu sed. Tellus semper adipiscing suspendisse semper morbi. Odio urna massa nunc massa.",
      },
      {
        icon: "https://cdn-icons-png.freepik.com/512/32/32273.png",
        title: "Push to deploy",
        description:
          "Morbi viverra dui mi arcu sed. Tellus semper adipiscing suspendisse semper morbi. Odio urna massa nunc massa.",
      },
      {
        icon: "https://cdn-icons-png.freepik.com/512/32/32273.png",
        title: "Push to deploy",
        description:
          "Morbi viverra dui mi arcu sed. Tellus semper adipiscing suspendisse semper morbi. Odio urna massa nunc massa.",
      },
      {
        icon: "https://cdn-icons-png.freepik.com/512/32/32273.png",
        title: "Push to deploy",
        description:
          "Morbi viverra dui mi arcu sed. Tellus semper adipiscing suspendisse semper morbi. Odio urna massa nunc massa.",
      },
    ],
  },
};
