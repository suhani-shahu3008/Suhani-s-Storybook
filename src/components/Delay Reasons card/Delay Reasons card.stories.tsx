import type { Meta, StoryObj } from '@storybook/react';
import { DelayReasonsCard } from './Delay Reasons card';

const meta: Meta<typeof DelayReasonsCard> = {
  title: 'Charts & Graphs/Delay Reasons card',
  component: DelayReasonsCard
};

export default meta;
type Story = StoryObj<typeof DelayReasonsCard>;

export const Default: Story = {};
