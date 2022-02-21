import ModalGeneric, { IModalGeneric } from "./ModalGeneric";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  component: ModalGeneric,
  title: "Modal Generic",
} as ComponentMeta<typeof ModalGeneric>;

const Template: ComponentStory<typeof ModalGeneric> = (args: IModalGeneric) => (
  <ModalGeneric {...args} />
);
let show = true;

export const Default = Template.bind({});
Default.args = {
  show: show,
  handleClose: () => (show = false),
  modalMessage: "Generic modal Message",
  texts: {
    title: "Hello there!!!",
    btnLeft: "CANCEL",
    btnRight: "CONFIRM",
  },
};

export const LargeModalOneButton = Template.bind({});
LargeModalOneButton.args = {
  ...Default.args,
  hideLeftBtn: true,
  modalMessage: "This is an Large modal with only one button 😁",
  size: "large",
};
