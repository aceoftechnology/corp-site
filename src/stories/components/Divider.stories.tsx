import type { Meta, StoryObj } from '@storybook/react';
import Divider from '@/components/layout/Divider';

const meta: Meta = {
  title: 'Layout/Divider',
  component: Divider,
  tags: ['components', 'autodocs'],
} satisfies Meta<typeof Divider>;

export default meta;
type Story = StoryObj<typeof meta>;
export const Primary: Story = {} satisfies StoryObj<typeof Primary>;
