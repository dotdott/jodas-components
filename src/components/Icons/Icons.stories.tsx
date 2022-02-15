import Icons, { IIConsProps } from "./Icons";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  component: Icons,
  title: "Icons",
} as ComponentMeta<typeof Icons>;

const Template: ComponentStory<typeof Icons> = (args: IIConsProps) => (
  <Icons {...args} />
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
