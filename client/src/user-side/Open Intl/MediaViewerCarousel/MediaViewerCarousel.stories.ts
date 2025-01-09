import type { Meta, StoryObj } from "@storybook/react";
import MediaViewerCarousel from "./MediaViewerCarousel";

const meta = {
  title: "Carousel",
  component: MediaViewerCarousel,
  parameters: {
    // layout: "centered",
  },
} satisfies Meta<typeof MediaViewerCarousel>;

export default meta;
type CarouselTypes = StoryObj<typeof meta>;

export const MV_Carousel: CarouselTypes = {
  args: {
    data: [
      {
        image:
          "https://imgs.search.brave.com/141UUboIwdkevfOgiLrgfWCuDSe1pcssc4ejcOV3yG0/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuZnJlZWltYWdl/cy5jb20vaW1hZ2Vz/L2xhcmdlLXByZXZp/ZXdzL2RmOC93b3Js/ZC13aWRlLW1vZGVs/cy0yLTEzMDkxNjEu/anBnP2ZtdA",
        content: "The first content of this carousel.",
      },
      {
        image:
          "https://imgs.search.brave.com/FzdyvXPJlyLYyHTmtXFce33AMaDUF0wAJSOHF53It_s/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pMC53/cC5jb20vZGlnaXRh/bC1waG90b2dyYXBo/eS1zY2hvb2wuY29t/L3dwLWNvbnRlbnQv/dXBsb2Fkcy8yMDIx/LzAzL3dpZGUtYW5n/bGUtaW1hZ2VzLTE5/LmpwZz9yZXNpemU9/NjAwLDQ1MCZzc2w9/MQ",
        content: "This is the second with image.",
      },
      {
        image:
          "https://imgs.search.brave.com/wqHNuvgMtRdq7Qw0cVmOyk4ArNhTmmAOR0wOfHBxPY0/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuZnJlZWltYWdl/cy5jb20vaW1hZ2Vz/L2xhcmdlLXByZXZp/ZXdzLzQ4MC92ZXJ5/LXdpZGUtMTIxODAw/Ny5qcGc_Zm10",
        content: "The image must be of same ratio on each.",
      },
    ],
  },
};
