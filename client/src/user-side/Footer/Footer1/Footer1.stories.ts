import { title } from "process";
import { Footer1 } from "./Footer1";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Footer",
  component: Footer1,
  parameters: {
    // layout: "centered",
  },
} satisfies Meta<typeof Footer1>;

export default meta;
type Footer_Types = StoryObj<typeof meta>;

export const FooterOne: Footer_Types = {
  args: {
    logo: {
      image: "https://competition.nsc.gov.np/uploads/512_512_3313c4e48c.jpg",
      href: "/",
      description:
        "Hello this is the offficial site of National sports council.",
    },
    columns: [
      {
        title: "Important Links",
        vertical: true,
        links: [
          {
            title: "About us",
            href: "/blogs",
            icon: "",
          },
          {
            title: "Our Portfolio",
            href: "/blogs",
            icon: "",
          },
          {
            title: "Why choose us?",
            href: "/blogs",
            icon: "",
          },
        ],
      },
      {
        title: "Contact Us",
        vertical: true,

        links: [
          {
            title: "+977 9865992256",
            href: "/contact",
            icon: "https://i.pinimg.com/736x/70/8f/04/708f04dc59840d0b6e92ef4f4ed967f8.jpg",
          },
          {
            title: "contact@beeaver.co",
            href: "/blogs",
            icon: "https://i.pinimg.com/736x/70/8f/04/708f04dc59840d0b6e92ef4f4ed967f8.jpg",
          },
          {
            title: "Kumaripati, lalitpur",
            href: "/blogs",
            icon: "https://i.pinimg.com/736x/70/8f/04/708f04dc59840d0b6e92ef4f4ed967f8.jpg",
          },
        ],
      },
      {
        title: "Get Connected",
        vertical: false,

        links: [
          {
            title: "",
            href: "www.facebook.com",
            icon: "https://i.pinimg.com/736x/70/8f/04/708f04dc59840d0b6e92ef4f4ed967f8.jpg",
          },
          {
            title: "",
            href: "www.twitter.com",
            icon: "https://i.pinimg.com/736x/70/8f/04/708f04dc59840d0b6e92ef4f4ed967f8.jpg",
          },
          {
            title: "",
            href: "www.instagram.com",
            icon: "https://i.pinimg.com/736x/70/8f/04/708f04dc59840d0b6e92ef4f4ed967f8.jpg",
          },
          {
            title: "",
            href: "www.youtube.com",
            icon: "https://i.pinimg.com/736x/70/8f/04/708f04dc59840d0b6e92ef4f4ed967f8.jpg",
          },
        ],
      },
    ],
    copyright: {
      copyright_text: "All Rights Reserved to NSC.",
      links: [
        {
          title: "Privacy Policy",
          href: "/privacy-policy",
        },
        {
          title: "Terms & Conditions",
          href: "/tnc",
        },
        {
          title: "Site Map",
          href: "/site-map",
        },
      ],
    },
  },
};
