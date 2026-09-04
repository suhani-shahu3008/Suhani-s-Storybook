import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { FleetStatusCard } from './Fleet Status card';

const meta: Meta<typeof FleetStatusCard> = {
  title: 'Charts & Graphs/Fleet Status card',
  component: FleetStatusCard
};

export default meta;
type Story = StoryObj<typeof FleetStatusCard>;

export const Default: Story = {};
