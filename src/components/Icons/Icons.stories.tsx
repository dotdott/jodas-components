import Icons, { IIConsProps } from "./Icons";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  component: Icons,
  title: "Icons",
} as ComponentMeta<typeof Icons>;

const Template: ComponentStory<typeof Icons> = (args: IIConsProps) => (
  <div style={{ display: "flex", flexDirection: "column" }}>
    <p>
      You can see others icons in{" "}
      <a
        href="https://fonts.google.com/icons?selected=Material+Icons"
        target="_blank"
        rel="noreferrer"
      >
        Google fonts icons
      </a>{" "}
      and just have to switch the name of the icon in the controls
    </p>
    <Icons {...args} />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  name: "home",
  color: "blue",
  circleRadius: false,
};

export const CircleOutline = Template.bind({});
CircleOutline.args = {
  name: "close",
  color: "red",
  circleRadius: true,
};
