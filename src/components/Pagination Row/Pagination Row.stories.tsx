import type { Meta, StoryObj } from '@storybook/react';
import { PaginationRow } from './Pagination Row';

const meta: Meta<typeof PaginationRow> = {
  title: 'Navigation/Pagination Row',
  component: PaginationRow,
  parameters: {
    docs: {
      description: {
        component: 'Pixel-perfect Pagination Row component rebuilt from Figma Node 202:181. Records Label (text) + Pagination instance (State=Default), laid out horizontally with space-between.'
      }
    }
  },
  argTypes: {
    recordsLabel: { control: 'text' },
    pageNumber: { control: 'text' },
    state: {
      control: 'select',
      options: ['Default', 'Hovered', 'Focused', 'Pressed', 'Disabled']
    }
  }
};

export default meta;
type Story = StoryObj<typeof PaginationRow>;

export const Default: Story = {
  args: {
    recordsLabel: 'Showing 1 to 5 of 50 records',
    pageNumber: 1,
    state: 'Default'
  },
  render: (args) => (
    <div style={{ padding: '32px', background: '#FFFFFF', width: '1488px', maxWidth: '100%' }}>
      <PaginationRow {...args} />
    </div>
  )
};
