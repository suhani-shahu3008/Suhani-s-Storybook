import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { TableRow } from './Table Row';

const meta: Meta<typeof TableRow> = {
  title: 'Data Display/Table Row',
  component: TableRow,
  parameters: {
    docs: {
      description: {
        component: 'Pixel-perfect Table Row from Figma Node 179:1513 (Variant=Row, id: 179:1485). Dimensions: 1488×49px. Padding: 12px 36px. 7 column cells: Vehicle ID (blue #1D4ED8), Type, Model, Capacity, Assigned Driver, Status Tag (50×22px capsule), Actions (View, Edit, Delete icons, gap: 36px).'
      }
    }
  },
  argTypes: {
    vehicleId: { control: 'text', description: 'Vehicle ID text (Lufga 16px w400, #1D4ED8)' },
    type: { control: 'text', description: 'Type text (Lufga 16px w400, #171717)' },
    model: { control: 'text', description: 'Model text (Lufga 16px w400, #171717)' },
    capacity: { control: 'text', description: 'Capacity text (Lufga 16px w400, #171717)' },
    assignedDriver: { control: 'text', description: 'Assigned Driver text (Lufga 16px w400, #171717)' },
    status: {
      control: 'select',
      options: ['Info', 'Error', 'Warning', 'Success', 'Inactive'],
      description: 'Status Tag Type variant (50×22px capsule)'
    }
  }
};

export default meta;
type Story = StoryObj<typeof TableRow>;

/* ── Default — exact Figma values ───────────────────────── */
export const Default: Story = {
  args: {
    vehicleId: 'Vehicle ID',
    type: 'Type',
    model: 'Model',
    capacity: 'Capacity',
    assignedDriver: 'Assigned Driver',
    status: 'Info',
  },
  render: (args) => (
    <div style={{ padding: '24px', background: '#FFFFFF' }}>
      <TableRow {...args} />
    </div>
  )
};

/* ── Status Variants Matrix ─────────────────────────────── */
export const StatusVariants: Story = {
  name: 'Status Variants',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', padding: '24px', background: '#FFFFFF' }}>
      <TableRow vehicleId="TRK-1001" type="Freight" model="Volvo FH16" capacity="24,000 kg" assignedDriver="Alex Morgan" status="Info" />
      <TableRow vehicleId="TRK-1002" type="Van" model="Ford Transit" capacity="3,500 kg" assignedDriver="David Chen" status="Success" />
      <TableRow vehicleId="TRK-1003" type="Flatbed" model="Scania R500" capacity="18,000 kg" assignedDriver="Marcus Brody" status="Warning" />
      <TableRow vehicleId="TRK-1004" type="Reefer" model="MAN TGX" capacity="20,000 kg" assignedDriver="Sarah Connor" status="Error" />
      <TableRow vehicleId="TRK-1005" type="Pickup" model="Toyota Hilux" capacity="1,200 kg" assignedDriver="Unassigned" status="Inactive" />
    </div>
  )
};
