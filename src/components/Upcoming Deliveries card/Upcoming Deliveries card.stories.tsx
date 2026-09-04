import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { UpcomingDeliveriesCard } from './Upcoming Deliveries card';

const meta: Meta<typeof UpcomingDeliveriesCard> = {
  title: 'Charts & Graphs/Upcoming Deliveries card',
  component: UpcomingDeliveriesCard
};

export default meta;
type Story = StoryObj<typeof UpcomingDeliveriesCard>;

export const Default: Story = {};
