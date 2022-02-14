import React from "react";

import Button, { IButtonProps } from "./Button";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  component: Button,
  title: "Button",
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args: IButtonProps) => (
  <Button {...args}>{args.children}</Button>
);

export const Default = Template.bind({});
Default.args = {
  children: "Readonly Button!",
};
