import { Team1 } from "./Team1";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Feature Section",
  component: Team1,
  parameters: {
    // layout: "centered",
  },
} satisfies Meta<typeof Team1>;

export default meta;
type TeamSection_Types = StoryObj<typeof meta>;

export const TeamOne: TeamSection_Types = {
  args: {
    title:
      "<span class='text-white'>Our</span> Expert <span class='text-white'>Coaches</span>",
    subtitle:
      "Boxing is also one of the most enjoyed and popular games in Nepal. With all the modality and administrative purpose",
    bg_image:
      "https://t4.ftcdn.net/jpg/06/33/50/89/360_F_633508902_HrmMPOOYiFrVxryrqKNWQym6uq7zMsyY.jpg",
    card_data: [
      {
        image:
          "https://img.freepik.com/free-photo/portrait-serious-female-boxer-boxing-gloves-sportive-wear-dark-photo-studio_613910-11552.jpg",
        title: "Nobita Shrsetha",
        content: "Coach",
      },
      {
        image:
          "https://img.freepik.com/free-photo/portrait-serious-female-boxer-boxing-gloves-sportive-wear-dark-photo-studio_613910-11552.jpg",
        title: "Doremon Shrsetha",
        content: "Coach",
      },
      {
        image:
          "https://img.freepik.com/free-photo/portrait-serious-female-boxer-boxing-gloves-sportive-wear-dark-photo-studio_613910-11552.jpg",
        title: "Roita Shrsetha",
        content: "Coach",
      },
      {
        image:
          "https://img.freepik.com/free-photo/portrait-serious-female-boxer-boxing-gloves-sportive-wear-dark-photo-studio_613910-11552.jpg",
        title: "Roita Shrsetha",
        content: "Coach",
      },
    ],
    button: {
      label: "View all",
      path: "/coaches",
    },
  },
};
