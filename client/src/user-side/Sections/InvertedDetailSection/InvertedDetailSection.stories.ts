import type { Meta, StoryObj } from "@storybook/react";
import InvertedDetailSection from "./InvertedDetailSection";

const meta = {
  title: "Sections",
  component: InvertedDetailSection,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof InvertedDetailSection>;

export default meta;
type Section_Types = StoryObj<typeof meta>;

export const Inverted_Detail_Section: Section_Types = {
  args: {
    data:[
        {
            title: "This is the title section",
            description:
              "Choosing Boxing has been one of the best decisions I've made for my fitness and personal growth. The training is rigorous, but the results are worth it. The coaches push you to be your best while also ensuring proper technique and safety. The team spirit is fantastic, with everyone supporting each other's progress. Highly recommend to anyone serious about boxing!",
            // image:
            //   "https://imgs.search.brave.com/XUZsajzIAQ69OiQ_22tKCi4mSVfVAtfEanAK8_nwdqY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvOTM4/NDE4MTc4L3Bob3Rv/L3NvY2Nlci1wbGF5/ZXItaG9sZGluZy1z/b2NjZXItYmFsbC5q/cGc_cz02MTJ4NjEy/Jnc9MCZrPTIwJmM9/SWRYMnVoM1ZsVkst/YzhpNEoxbXRVWUdp/NGpuWTRXZWtIUEZG/anNsTWo3az0",
          },
          {
            title: "This is the title section",
            description:
              "Choosing Boxing has been one of the best decisions I've made for my fitness and personal growth. The training is rigorous, but the results are worth it. The coaches push you to be your best while also ensuring proper technique and safety. The team spirit is fantastic, with everyone supporting each other's progress. Highly recommend to anyone serious about boxing!",
            image:
              "https://imgs.search.brave.com/XUZsajzIAQ69OiQ_22tKCi4mSVfVAtfEanAK8_nwdqY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvOTM4/NDE4MTc4L3Bob3Rv/L3NvY2Nlci1wbGF5/ZXItaG9sZGluZy1z/b2NjZXItYmFsbC5q/cGc_cz02MTJ4NjEy/Jnc9MCZrPTIwJmM9/SWRYMnVoM1ZsVkst/YzhpNEoxbXRVWUdp/NGpuWTRXZWtIUEZG/anNsTWo3az0",
          },
          {
            title: "This is the title section",
            description:
              "Choosing Boxing has been one of the best decisions I've made for my fitness and personal growth. The training is rigorous, but the results are worth it. The coaches push you to be your best while also ensuring proper technique and safety. The team spirit is fantastic, with everyone supporting each other's progress. Highly recommend to anyone serious about boxing!",
            image:
              "https://imgs.search.brave.com/XUZsajzIAQ69OiQ_22tKCi4mSVfVAtfEanAK8_nwdqY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvOTM4/NDE4MTc4L3Bob3Rv/L3NvY2Nlci1wbGF5/ZXItaG9sZGluZy1z/b2NjZXItYmFsbC5q/cGc_cz02MTJ4NjEy/Jnc9MCZrPTIwJmM9/SWRYMnVoM1ZsVkst/YzhpNEoxbXRVWUdp/NGpuWTRXZWtIUEZG/anNsTWo3az0",
          },
          {
            title: "This is the title section",
            description:
              "Choosing Boxing has been one of the best decisions I've made for my fitness and personal growth. The training is rigorous, but the results are worth it. The coaches push you to be your best while also ensuring proper technique and safety. The team spirit is fantastic, with everyone supporting each other's progress. Highly recommend to anyone serious about boxing!",
            image:
              "https://imgs.search.brave.com/XUZsajzIAQ69OiQ_22tKCi4mSVfVAtfEanAK8_nwdqY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvOTM4/NDE4MTc4L3Bob3Rv/L3NvY2Nlci1wbGF5/ZXItaG9sZGluZy1z/b2NjZXItYmFsbC5q/cGc_cz02MTJ4NjEy/Jnc9MCZrPTIwJmM9/SWRYMnVoM1ZsVkst/YzhpNEoxbXRVWUdp/NGpuWTRXZWtIUEZG/anNsTWo3az0",
          },
          {
            title: "This is the title section",
            description:
              "Choosing Boxing has been one of the best decisions I've made for my fitness and personal growth. The training is rigorous, but the results are worth it. The coaches push you to be your best while also ensuring proper technique and safety. The team spirit is fantastic, with everyone supporting each other's progress. Highly recommend to anyone serious about boxing!",
            image:
              "https://imgs.search.brave.com/XUZsajzIAQ69OiQ_22tKCi4mSVfVAtfEanAK8_nwdqY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvOTM4/NDE4MTc4L3Bob3Rv/L3NvY2Nlci1wbGF5/ZXItaG9sZGluZy1z/b2NjZXItYmFsbC5q/cGc_cz02MTJ4NjEy/Jnc9MCZrPTIwJmM9/SWRYMnVoM1ZsVkst/YzhpNEoxbXRVWUdp/NGpuWTRXZWtIUEZG/anNsTWo3az0",
          },
    ]
  }
};
