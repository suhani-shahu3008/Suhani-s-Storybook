import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { TopDelayedZonesCard } from './Top Delayed Zones card';

const meta: Meta<typeof TopDelayedZonesCard> = {
  title: 'Charts & Graphs/Top Delayed Zones card',
  component: TopDelayedZonesCard
};

export default meta;
type Story = StoryObj<typeof TopDelayedZonesCard>;

export const Default: Story = {};
