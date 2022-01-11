import type { ComponentStory, ComponentMeta } from "@storybook/react";

import { Button } from "./Button";

export default {
  title: "Button",
  component: Button,
  argTypes: {
    variant: {
      options: ["primary", "success", "warning", "info", "danger"],
      control: "select",
      defaultValue: "primary",
      name: "Variant",
    },
    round: {
      control: "boolean",
      defaultValue: false,
    },
    size: {
      control: "select",
      options: ["sm", "md", "lg", "xl"],
      defaultValue: "md",
    },
    type: {
      control: "radio",
      options: ["button", "submit"],
      defaultValue: "button",
    },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => (
  <Button {...args}>Button</Button>
);

export const Default = Template.bind({});
Default.args = {
  variant: "primary",
  round: false,
  size: "md",
  type: "button",
};
