import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { DeliveryTrendsCard } from './Delivery trends card';

const meta: Meta<typeof DeliveryTrendsCard> = {
  title: 'Charts & Graphs/Delivery trends card',
  component: DeliveryTrendsCard
};

export default meta;
type Story = StoryObj<typeof DeliveryTrendsCard>;

export const Default: Story = {};
