import Button, { IButtonProps } from "./Button";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  component: Button,
  title: "Button",
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args: IButtonProps) => (
  <Button {...args}>{args.children ?? "Readonly Button!"}</Button>
);

export const Default = Template.bind({});

export const RedButtonNoTextFormat = Template.bind({});
RedButtonNoTextFormat.args = {
  noUppercase: true,
  btnClasses: "_red",
};

export const CustomButton = Template.bind({});
CustomButton.args = {
  btnExtraStyles: {
    padding: "16px 32px",
    background: "linear-gradient(45deg, yellow 30%, white 90%)",
    color: "black",
    borderRadius: "16px",
  },
};

export const DisabledButton = Template.bind({});
DisabledButton.args = {
  disabled: true,
};
