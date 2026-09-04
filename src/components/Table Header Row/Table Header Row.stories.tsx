import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { TableHeaderRow } from './Table Header Row';

const meta: Meta<typeof TableHeaderRow> = {
  title: 'Data Display/Table Header Row',
  component: TableHeaderRow,
  parameters: {
    docs: {
      description: {
        component: 'Pixel-perfect Table Header Row from Figma Node 179:1512 (Variant=Header, id: 179:1470). Dimensions: 1488×40px. Background: #F5F5F5. Border radius: 12px. Padding: 12px 36px. 7 column cells (FILL width each): Vehicle ID | Type | Model | Capacity | Assigned Driver | Status | Actions. All text: Lufga 12px Regular #171717.'
      }
    }
  },
  argTypes: {
    col1: { control: 'text', description: 'Column 1 label (default: "Vehicle ID")' },
    col2: { control: 'text', description: 'Column 2 label (default: "Type")' },
    col3: { control: 'text', description: 'Column 3 label (default: "Model")' },
    col4: { control: 'text', description: 'Column 4 label (default: "Capacity")' },
    col5: { control: 'text', description: 'Column 5 label (default: "Assigned Driver")' },
    col6: { control: 'text', description: 'Column 6 label (default: "Status")' },
    col7: { control: 'text', description: 'Column 7 label (default: "Actions")' },
  }
};

export default meta;
type Story = StoryObj<typeof TableHeaderRow>;

/* ── Default — exact Figma values ───────────────────────── */
export const Default: Story = {
  args: {
    col1: 'Vehicle ID',
    col2: 'Type',
    col3: 'Model',
    col4: 'Capacity',
    col5: 'Assigned Driver',
    col6: 'Status',
    col7: 'Actions',
  },
  render: (args) => (
    <div style={{ padding: '24px', background: '#FFFFFF' }}>
      <TableHeaderRow {...args} />
    </div>
  )
};
