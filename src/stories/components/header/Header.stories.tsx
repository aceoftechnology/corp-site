import type { Meta, StoryObj } from '@storybook/react';
import Header from '@/components/layout/header';

const meta: Meta = {
  title: 'Layout/Header',
  component: Header,
  tags: ['components', 'autodocs'],
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;
export const Primary: Story = {} satisfies StoryObj<typeof Primary>;
