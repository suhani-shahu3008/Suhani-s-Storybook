import type { Meta, StoryObj } from '@storybook/react';
import { Maps } from './Maps';
import type { MapsSize } from './Maps';

const meta: Meta = {
  title: 'Visualizations/Maps/All Sizes',
};

export default meta;
type Story = StoryObj;

const SIZES: MapsSize[] = ['Compact', 'Standard', 'Wide'];

export const AllSizes: Story = {
  name: 'All Sizes',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', alignItems: 'flex-start' }}>
      {SIZES.map((size) => (
        <div key={size} style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <Maps size={size} />
          <span style={{ fontFamily: 'var(--uedp-font-family)', fontSize: '13px', color: '#525252' }}>{size}</span>
        </div>
      ))}
    </div>
  )
};
