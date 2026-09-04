import type { Meta, StoryObj } from '@storybook/react';
import { TabBars } from './Tab bars';

const meta: Meta<typeof TabBars> = {
  title: 'Navigation/Tab bars',
  component: TabBars,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    state: { control: 'radio', options: ['Default', 'Active', 'Hovered', 'Focused', 'Pressed', 'Disabled'] },
    selectedTab: { control: 'radio', options: [1, 2, 3, 4, 5] },
  },
  args: {
    prop1stText: 'Tabs',
    prop2ndText: 'Tabs',
    prop3rdText: 'Tabs',
    prop4thText: 'Tabs',
    prop5thText: 'Tabs',
    state: 'Default',
    selectedTab: 1,
  },
};

export default meta;
type Story = StoryObj<typeof TabBars>;

export const Playground: Story = {};
