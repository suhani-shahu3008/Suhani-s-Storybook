import React from 'react';
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

export const Compact: Story = {
  args: {
    size: 'Compact'
  }
};

export const Standard: Story = {
  args: {
    size: 'Standard'
  }
};

export const Wide: Story = {
  args: {
    size: 'Wide'
  }
};
