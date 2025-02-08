import type { Meta, StoryObj } from "@storybook/react";

import ItemCard from "./ItemCard";
import { mockItemCardProps } from "./ItemCard.mocks";

const meta: Meta<typeof ItemCard> = {
  component: ItemCard,
  parameters: { layout: "centered" },
};

export default meta;
type Story = StoryObj<typeof ItemCard>;

export const Primary: Story = {
  args: {
    ...mockItemCardProps.base,
  },
};
