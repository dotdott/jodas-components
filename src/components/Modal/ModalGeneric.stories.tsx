import ModalGeneric, { IModalGeneric } from "./ModalGeneric";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  component: ModalGeneric,
  title: "Modal Generic",
} as ComponentMeta<typeof ModalGeneric>;

const Template: ComponentStory<typeof ModalGeneric> = (args: IModalGeneric) => (
  <ModalGeneric {...args} />
);

export const Default = Template.bind({});
Default.args = {
  show: true,
  handleClose: () => {},
  modalMessage: "Generic modal Message",
  texts: {
    title: "Hello there!!!",
    btnLeft: "CANCEL",
    btnRight: "CONFIRM",
  },
};
