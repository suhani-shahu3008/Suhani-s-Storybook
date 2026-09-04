import type { Meta, StoryObj } from '@storybook/react';
import { Dividers } from './Dividers';

const meta: Meta<typeof Dividers> = {
  title: 'Layout/Dividers',
  component: Dividers,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    size: { control: 'radio', options: ['Small', 'Medium', 'Large', 'Extra Large'] },
  },
  args: {
    size: 'Small',
  },
};

export default meta;
type Story = StoryObj<typeof Dividers>;

export const Playground: Story = {};
