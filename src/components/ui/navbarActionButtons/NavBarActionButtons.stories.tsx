import type { Meta, StoryObj } from "@storybook/react";

import NavBarActionButtons from "./NavBarActionButtons";
import { mockNavBarActionButtonsProps } from "./NavBarActionButtons.mocks";

const meta: Meta<typeof NavBarActionButtons> = {
  component: NavBarActionButtons,
};

export default meta;
type Story = StoryObj<typeof NavBarActionButtons>;

export const Primary: Story = {
  args: {
    ...mockNavBarActionButtonsProps.base,
  },
};
