import type { Meta, StoryObj } from "@storybook/react";
import Footer4 from "./Footer4";

const meta = {
  title: "Open Intl",
  component: Footer4,
  parameters: {
    // layout: "centered",
  },
} satisfies Meta<typeof Footer4>;

export default meta;
type Footer_Types = StoryObj<typeof meta>;

export const FooterFour: Footer_Types = {
  args: {
    columns: [
      {
        title: "Contact Us",
        vertical: true,

        links: [
          {
            title: "+977 9865992256",
            href: "/contact",
            icon: "https://imgs.search.brave.com/lJuOZvckDUHM_BFcFBbSmRS05MkdlhQSkuKtuPc5vjI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/dW50aHNjLmVkdS9J/bmZvcm1hdGlvbi10/ZWNobm9sb2d5LXNl/cnZpY2VzL3dwLWNv/bnRlbnQvdXBsb2Fk/cy9zaXRlcy81NS9w/aG9uZS1pY29uLXBu/Zy02LnBuZw",
          },
          {
            title: "contact@beeaver.co",
            href: "/blogs",
            icon: "https://imgs.search.brave.com/7YOe_ArJaydC2tkKn4gs4y8lraTZZwW3ct7NaLSQnAk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9wbHVz/cG5nLmNvbS9pbWct/cG5nL2VtYWlsLWlj/b24tcG5nLWVtYWls/LW1haWwtc2VuZC1p/Y29uLTUxMi5wbmc",
          },
          {
            title: "Kumaripati, lalitpur",
            href: "/blogs",
            icon: "https://imgs.search.brave.com/5qyLbdbfEQfa6Td1I05jOv12bD1m5MWpRjGX6oZ9a8A/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMudmV4ZWxzLmNv/bS9tZWRpYS91c2Vy/cy8zLzEzMjQ0MC9p/c29sYXRlZC9wcmV2/aWV3LzE3MTUzY2Q2/NDA0ZDQ4M2I2NGEy/NzdkNzY0ODIwOTIx/LXRhcmdldC1pbnNp/ZGUtbG9jYXRpb24t/bWFya2VyLWljb24u/cG5n",
          },
          {
            title: "6 AM - 6 PM",
            href: "/calender",
            icon: "https://imgs.search.brave.com/_YWwidIMnsOMedHFGGDuIKS6ZxZTRHQ-1hbuBB-FgGc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMtMDAuaWNvbmR1/Y2suY29tL2Fzc2V0/cy4wMC9jbG9jay1p/Y29uLTUxMng1MTIt/Z25wNzdzbGQucG5n",
          },
        ],
      }
    ],
    copyright: {
      copyright_text: "2024, All Rights Reserved.",
    },
  },
};
