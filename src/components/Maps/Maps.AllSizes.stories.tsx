import type { Meta, StoryObj } from '@storybook/react';
import { Maps } from './Maps';
import type { MapsSize } from './Maps';

const meta: Meta = {
  title: 'Visualizations/Maps/All Sizes',
};

export default meta;
type Story = StoryObj;

const SIZES: MapsSize[] = ['Compact', 'Standard', 'Wide'];

/* Equal-size comparison tile: overrides each variant's own aspect-ratio/
   max-width so all three render at the same 280x200 box, cropped via the
   component's existing background-size: cover. */
const TILE_SIZE = { width: 280, height: 200 };

export const AllSizes: Story = {
  name: 'All Sizes',
  render: () => (
    <div style={{ display: 'flex', gap: '32px', alignItems: 'flex-start', flexWrap: 'wrap' }}>
      <style>{`
        .uedp-map-equal-tile {
          width: ${TILE_SIZE.width}px !important;
          height: ${TILE_SIZE.height}px !important;
          max-width: none !important;
          aspect-ratio: auto !important;
        }
      `}</style>
      {SIZES.map((size) => (
        <div key={size} style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <Maps size={size} className="uedp-map-equal-tile" />
          <span style={{ fontFamily: 'var(--uedp-font-family)', fontSize: '13px', color: '#525252' }}>{size}</span>
        </div>
      ))}
    </div>
  )
};
