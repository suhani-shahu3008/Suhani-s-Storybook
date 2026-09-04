import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta = {
  title: 'Tokens/Typography',
  parameters: {
    docs: {
      description: {
        component: 'Complete typography scale using the Lufga font family extracted from the Figma Design System. Includes all heading levels (H1 to H6), weights, line-heights, and letter spacings.'
      }
    }
  }
};

export default meta;

export const TypographyScale: StoryObj = {
  render: () => {
    const scales = [
      { name: 'H1 / SemiBold', varName: '--uedp-font-h1', size: '40px', weight: '600', lh: '1.25', sample: 'Smart Fleet Logistics Dashboard' },
      { name: 'H2 / Regular', varName: '--uedp-font-h2', size: '24px', weight: '400', lh: '1.3', sample: 'Hello Suhani, welcome back' },
      { name: 'H3 / Medium', varName: '--uedp-font-h3-medium', size: '20px', weight: '500', lh: '1.3', sample: 'Active Vehicles & Delivery Routes' },
      { name: 'H3 / Regular', varName: '--uedp-font-h3-regular', size: '20px', weight: '400', lh: '1.3', sample: '1,248 Shipments Dispatched' },
      { name: 'H4 / Medium', varName: '--uedp-font-h4-medium', size: '16px', weight: '500', lh: '1.3', sample: 'Driver Status & Performance' },
      { name: 'H4 / Regular', varName: '--uedp-font-h4-regular', size: '16px', weight: '400', lh: '1.3', sample: 'Zone B - ETA 14:30 PM' },
      { name: 'H5 / Medium', varName: '--uedp-font-h5-medium', size: '12px', weight: '500', lh: '1.3', sample: 'Input label & button text' },
      { name: 'H5 / Regular', varName: '--uedp-font-h5-regular', size: '12px', weight: '400', lh: '1.3', sample: 'Placeholder and table row text' },
      { name: 'H6 / Regular', varName: '--uedp-font-h6-regular', size: '8px', weight: '400', lh: '1.3', sample: 'Timestamp: 2 mins ago • Live GPS' },
      { name: 'H6 / Light', varName: '--uedp-font-h6-light', size: '8px', weight: '300', lh: '1.3', sample: 'Supporting metadata & hints' },
      { name: 'Caption / Light', varName: '--uedp-font-caption', size: '10px', weight: '300', lh: '1.3', sample: 'System tags & micro badges' },
    ];

    return (
      <div style={{ fontFamily: 'var(--uedp-font-family)', padding: '24px', maxWidth: '1100px' }}>
        <h1 style={{ fontSize: '28px', fontWeight: 600, color: 'var(--uedp-slate-900)', margin: '0 0 8px 0' }}>
          Typography Tokens
        </h1>
        <p style={{ color: 'var(--uedp-slate-500)', fontSize: '14px', marginBottom: '32px' }}>
          Primary font family: <code>Lufga</code> with fallback to system sans-serif.
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          {scales.map((item) => (
            <div
              key={item.name}
              style={{
                background: '#FFFFFF',
                borderRadius: 'var(--uedp-rounded-xl)',
                border: '1px solid var(--uedp-slate-200)',
                padding: '20px',
                boxShadow: 'var(--uedp-shadow-secondary)'
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px', borderBottom: '1px solid var(--uedp-slate-100)', paddingBottom: '8px' }}>
                <span style={{ fontWeight: 600, fontSize: '14px', color: 'var(--uedp-slate-800)' }}>
                  {item.name}
                </span>
                <span style={{ fontSize: '12px', color: 'var(--uedp-slate-500)', fontFamily: 'monospace' }}>
                  {item.size} • Weight {item.weight} • Line-Height {item.lh}
                </span>
              </div>
              <div style={{
                fontFamily: 'var(--uedp-font-family)',
                fontSize: item.size,
                fontWeight: Number(item.weight),
                lineHeight: item.lh,
                color: 'var(--uedp-slate-900)'
              }}>
                {item.sample}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
};
