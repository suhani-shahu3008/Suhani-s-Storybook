import type { Meta, StoryObj } from '@storybook/react';
import { Cards } from './Cards';
import { ICONOGRAPHY_NAMES } from '../Iconography/Iconography';

const meta: Meta<typeof Cards> = {
  title: 'Data Display/Cards',
  component: Cards,
  parameters: {
    docs: {
      description: {
        component: 'Pixel-perfect metric Cards component rebuilt from Figma Node 88:10691. 4 Variants: Card 1 (Active Shipments, 1247, +12%, Box icon), Card 2 (On-Time Delivery, 94%, +2.1%, Tick icon), Card 3 (Delayed Routes, 73, -5%, Warning icon), Card 4 (Fleet Utilization, 68%, +3%, Truck icon). Dimensions: 367×145px, Radius: 24px, Padding: 12px 20px, Shadow: 4px 4px 10.9px rgba(0,0,0,0.25).'
      }
    }
  },
  argTypes: {
    type: {
      control: 'select',
      options: ['Card 1', 'Card 2', 'Card 3', 'Card 4'],
      description: 'Card variant type from Figma'
    },
    title: {
      control: 'text',
      description: 'Card title (Lufga 20px Regular)'
    },
    value: {
      control: 'text',
      description: 'Metric value (Lufga 20px Medium)'
    },
    change: {
      control: 'text',
      description: 'Change / trend description (Lufga 12px Regular)'
    },
    iconName: {
      control: 'select',
      options: ICONOGRAPHY_NAMES,
      description: 'Which Iconography icon to show — overrides the variant default'
    }
  }
};

export default meta;
type Story = StoryObj<typeof Cards>;

/* ── Default Interactive Card ────────────────────────────── */
export const Playground: Story = {
  args: {
    type: 'Card 1',
  },
  render: (args) => (
    <div style={{ padding: '32px', background: '#F8FAFC' }}>
      <Cards {...args} />
    </div>
  )
};

/* ── All 4 Cards Dashboard Grid ──────────────────────────── */
export const AllCardsGrid: Story = {
  name: 'All 4 Cards Row (Dashboard Layout)',
  render: () => (
    <div style={{
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap',
      gap: '24px',
      padding: '32px',
      background: '#F1F5F9'
    }}>
      <Cards type="Card 1" />
      <Cards type="Card 2" />
      <Cards type="Card 3" />
      <Cards type="Card 4" />
    </div>
  )
};
