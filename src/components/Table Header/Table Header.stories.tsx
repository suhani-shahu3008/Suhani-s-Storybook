import type { Meta, StoryObj } from '@storybook/react';
import { TableHeader } from './Table Header';

const meta: Meta<typeof TableHeader> = {
  title: 'Data Display/Table Header',
  component: TableHeader,
  parameters: {
    docs: {
      description: {
        component: 'Pixel-perfect Table Header from Figma Node 164:1299. Dimensions: 1437×64px. Left: Title + Subtitle. Right: 3 buttons (160×53px, r:12) — Button 1 (Arrow Down), Button 2 (Filter funnel), Button 3 (Plus, primary #1D4ED8).'
      }
    }
  },
  argTypes: {
    title: { control: 'text' },
    subtitle: { control: 'text' },
    button1Label: { control: 'text' },
    button2Label: { control: 'text' },
    button3Label: { control: 'text' },
  }
};

export default meta;
type Story = StoryObj<typeof TableHeader>;

export const Default: Story = {
  args: {
    title: 'Vehicle List',
    subtitle: 'Overview of all fleet vehicles and their operational data',
    button1Label: 'Button',
    button2Label: 'Button',
    button3Label: 'Button',
  },
  render: (args) => (
    <div style={{ padding: '32px 40px', background: '#FFFFFF', borderRadius: '16px', border: '1px solid #E2E8F0' }}>
      <TableHeader {...args} />
    </div>
  )
};
