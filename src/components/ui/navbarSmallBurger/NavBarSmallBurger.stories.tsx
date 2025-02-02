import type { Meta, StoryObj } from "@storybook/react";

import NavBarSmallBurger from "./NavBarSmallBurger";
import { mockNavBarSmallBurgerProps } from "./NavBarSmallBurger.mocks";

const meta: Meta<typeof NavBarSmallBurger> = {
  component: NavBarSmallBurger,
};

export default meta;
type Story = StoryObj<typeof NavBarSmallBurger>;

export const Primary: Story = {
  args: {
    ...mockNavBarSmallBurgerProps.base,
  },
};
