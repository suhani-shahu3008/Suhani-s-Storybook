import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { LiveFleetOverviewCard } from './Live Fleet Overview card';

const meta: Meta<typeof LiveFleetOverviewCard> = {
  title: 'Charts & Graphs/Live Fleet Overview card',
  component: LiveFleetOverviewCard
};

export default meta;
type Story = StoryObj<typeof LiveFleetOverviewCard>;

export const Default: Story = {};
