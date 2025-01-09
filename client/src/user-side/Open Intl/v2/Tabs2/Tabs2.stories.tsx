import type { Meta, StoryObj } from "@storybook/react";
import Tabs2 from "./Tabs2";

const meta = {
  title: "Open Intl",
  component: Tabs2,
  parameters: {
    // layout: "centered",
  },
} satisfies Meta<typeof Tabs2>;

export default meta;
type TabsTypes = StoryObj<typeof meta>;

export const Tabs_Two: TabsTypes = {
  args: {
    title: "Our Courses",
    data:[
      {
          title:'Hello',
          content:{
              title:'Title Here',
              image:'https://imgs.search.brave.com/zHHgzwLySn7p8bwA-bMNwdA7LQaJQ8U_JB_uce1kO-c/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/bW9zLmNtcy5mdXR1/cmVjZG4ubmV0L002/UnhRNnVMQ2VjUFND/ZmZDR2FhV2QtMzIw/LTgwLnBuZw',
              description:"this is the description for the image and the title mentioned above."
          }
      },
      {
          title:'Nello',
          content:{
              title:'Nello here',
              image:'https://imgs.search.brave.com/zHHgzwLySn7p8bwA-bMNwdA7LQaJQ8U_JB_uce1kO-c/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/bW9zLmNtcy5mdXR1/cmVjZG4ubmV0L002/UnhRNnVMQ2VjUFND/ZmZDR2FhV2QtMzIw/LTgwLnBuZw',
              description:"this is the description for the image and the title mentioned above."
          }
      },
      {
          title:'Iolo',
          content:{
              title:'Title iolo',
              image:'https://imgs.search.brave.com/zHHgzwLySn7p8bwA-bMNwdA7LQaJQ8U_JB_uce1kO-c/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/bW9zLmNtcy5mdXR1/cmVjZG4ubmV0L002/UnhRNnVMQ2VjUFND/ZmZDR2FhV2QtMzIw/LTgwLnBuZw',
              description:"this is the description for the image and the title mentioned above."
          }
      }
  ],
    },
};
