import { Contact } from "./ContactPage";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Open Intl",
  component: Contact,
  parameters: {
    // layout: "centered",
  },
} satisfies Meta<typeof Contact>;

export default meta;
type ContactTypes = StoryObj<typeof meta>;

export const Contact_Section: ContactTypes = {
  args: {
    contactDetails: {
      map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1432.935557853134!2d85.33425003839616!3d27.689866569081754!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19f72ace638b%3A0x45755e20d8ade83f!2sOpen%20International%20Academy!5e1!3m2!1sen!2snp!4v1724309917265!5m2!1sen!2snp",
      location: "Baneshwor, Kathmandu, Nepal",
      phone: "01 4453608, 9851099658",
      email: "openintlacademy@gmail.com",
      socials: {
        facebook: "https://www.facebook.com",
        instagram: "https://www.instagram.com",
        youtube: "https://www.youtube.com",
        twitter: "https://www.x.com",
      },
    },
  },
};
