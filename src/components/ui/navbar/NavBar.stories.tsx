import type { Meta, StoryObj } from "@storybook/react";

import NavBar from "./NavBar";
import { mockNavBarProps } from "./NavBar.mocks";

const meta: Meta<typeof NavBar> = {
  component: NavBar,
  parameters: { layout: "fullscreen" },
};

export default meta;
type Story = StoryObj<typeof NavBar>;

export const Primary: Story = {
  args: {
    ...mockNavBarProps.base,
  },
};
