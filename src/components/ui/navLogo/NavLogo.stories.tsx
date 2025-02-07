import type { Meta, StoryObj } from "@storybook/react";

import NavLogo from "./NavLogo";

const meta: Meta<typeof NavLogo> = {
  component: NavLogo,
};

export default meta;
type Story = StoryObj<typeof NavLogo>;

export const Primary: Story = {
  args: {},
};
