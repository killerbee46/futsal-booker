import EventDetailBanner from "./EventDetailBanner";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "EventDetailBanner",
  component: EventDetailBanner,
  parameters: {
    // layout: "centered",
  },
} satisfies Meta<typeof EventDetailBanner>;

export default meta;
type Header_types = StoryObj<typeof meta>;

const demoMap = 'https://imgs.search.brave.com/-xXj1bqhBXUcyuMwdoHe18SWkWhAPWx_8U5ZFsZS020/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/dmVjdG9yc3RvY2su/Y29tL2kvcHJldmll/dy0xeC81OS8xMy9j/cmVhdGl2ZS1hYnN0/cmFjdC1zcXVhcmUt/c2hhcGUtZm9ybWVk/LXdvcmxkLW1hcC12/ZWN0b3ItMTU0NTkx/My5qcGc'
  const demoIcon = 'https://imgs.search.brave.com/Xa-GSOimGVYuzcJkvX4aZWYLh91xm4hmsR72MnPvWzY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4x/Lmljb25maW5kZXIu/Y29tL2RhdGEvaWNv/bnMvY29sb3ItYm9s/ZC1zdHlsZS8yMS8w/Nl8xLTUxMi5wbmc'
  

export const Headertwo: Header_types = {
  args: {
    image:
      "https://img.freepik.com/premium-photo/people-wallking-blurred-background-wallpaper_846066-14.jpg",
      details:[
        {label:'Event Date', value: '21 March', icon: demoIcon},
        {label:'Event Time', value: '10:30 PM', icon: demoIcon},
        {label:'Event Location', value: 'Pokhara Cubbod Hall', icon: demoIcon},
      ],
  },
};
