import type { Meta, StoryObj } from '@storybook/react';
import { Indicators } from './Indicators';

const meta: Meta<typeof Indicators> = {
  title: 'Data Display/Indicators',
  component: Indicators,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    state: { control: 'radio', options: ['Info', 'Error', 'Warning', 'Success', 'Inactive'] },
    size: { control: 'radio', options: ['Small', 'Large'] },
    pulse: { control: 'boolean' },
  },
  args: {
    state: 'Info',
    size: 'Small',
    text: 'Indicator',
    pulse: false,
  },
};

export default meta;
type Story = StoryObj<typeof Indicators>;

export const Playground: Story = {};
