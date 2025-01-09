import { Fixture1 } from "./Fixture1";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Fixtures",
  component: Fixture1,
  parameters: {
    // layout: "centered",
  },
} satisfies Meta<typeof Fixture1>;

export default meta;
type Fixture_types = StoryObj<typeof meta>;

export const Fixture_one: Fixture_types = {
  args: {
    title: "Nepal Boxing Championship 2024",
    date: "June 20, 2024",
    time: "11:45 AM",
    venue: "Tribhuwan Army Covered Hall, Kathmandu Nepal",
    player1: {
      image:
        "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=600",
      name: "Rajesh Chaudhary",
      details:
        "he has played all the national level games. and managed to win four gold medals and 6 silver medals in boxin . Currently he is playing for Nepal Army as well as he represents nepal in International Matches.",
    },
    player2: {
      image:
        "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=600",
      name: "Khem Singh Dhami",
      details:
        "anaged to win four gold medals and 6 silver medals in boxin . Currently he is playing for Nepal Army as well as he represents nepal in International Matches.",
    },
  },
};
