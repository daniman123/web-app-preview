import type { Meta, StoryObj } from "@storybook/react";

import PrimaryLayout from "./PrimaryLayout";
import { mockPrimaryLayoutProps } from "./PrimaryLayout.mocks";

const meta: Meta<typeof PrimaryLayout> = {
  component: PrimaryLayout,
  
};

export default meta;
type Story = StoryObj<typeof PrimaryLayout>;

export const Primary: Story = {
  args: {
    ...mockPrimaryLayoutProps.base,
  },
};
