import type { Meta, StoryObj } from '@storybook/react';
import { Maps } from './Maps';

const meta: Meta<typeof Maps> = {
  title: 'Visualizations/Maps',
  component: Maps,
  argTypes: {
    size: { control: 'radio', options: ['Compact', 'Standard', 'Wide'] }
  }
};

export default meta;
type Story = StoryObj<typeof Maps>;

export const Default: Story = {
  args: {
    size: 'Standard'
  }
};
