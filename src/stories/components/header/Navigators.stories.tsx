import type { Meta, StoryObj } from '@storybook/react';
import Navigators from '@/components/layout/header/Navigators';

const meta: Meta = {
  title: 'Layout/Header/Navigators',
  component: Navigators,
  tags: ['components', 'autodocs'],
} satisfies Meta<typeof Navigators>;

export default meta;
type Story = StoryObj<typeof meta>;
export const Primary: Story = {} satisfies StoryObj<typeof Primary>;
