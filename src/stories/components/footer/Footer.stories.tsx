import type { Meta, StoryObj } from '@storybook/react';
import Footer from '@/components/layout/footer';

const meta: Meta = {
  title: 'Layout/Footer',
  component: Footer,
  tags: ['components', 'autodocs'],
} satisfies Meta<typeof Footer>;

export default meta;
type Story = StoryObj<typeof meta>;
export const Primary: Story = {} satisfies StoryObj<typeof Primary>;
