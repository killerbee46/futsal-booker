import type { Meta, StoryObj } from "@storybook/react";
import PopularVideosCard from "./PopularVideosCard";

const meta = {
  title: "Popular Videos Card",
  component: PopularVideosCard,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof PopularVideosCard>;

export default meta;
type CardType = StoryObj<typeof meta>;

export const Popular_Videos_Card: CardType = {
  args: {
    path: "https://youtu.be/3r6bDmdNl_k?list=RD3r6bDmdNl_k",
    image:
      "https://imgs.search.brave.com/e76OOIOCBOsHEYaQjH57-dpKHg9J9UrWj7f7ckI7hUY/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by9m/ZW1hbGUtZm9vdGJh/bGwtcGxheWVyLWtp/Y2tpbmctYmFsbF8y/My0yMTQ4ODUwNzQ0/LmpwZz9zaXplPTYy/NiZleHQ9anBn",
    secondaryImage:
      "https://imgs.search.brave.com/vHDHqzbXL3Q_8d7KZTzXAVXuTaraHdQrpjd6sK27Q_8/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTQw/ODY0MzQxNC9waG90/by9uaWNlLXBvcnRy/YWl0LW9mLWEtYW1l/cmljYW4tZm9vdGJh/bGwtcGxheWVyLmpw/Zz9zPTYxMng2MTIm/dz0wJms9MjAmYz03/OTJYelJxcUhmZ3g5/cVU4enZGSnZFWm14/SjVERm1TNXlPWlky/SDBfT1o0PQ",
    content:
      "Boxing is also one of the most enjoyed and popular games in Nepal. With all the modality and administrative purpose, Nepal Boxing Federation was in hsjndfjsd",
    title: "Current  Women National Champion",
    user: "Manisha Dangol",
  },
};
