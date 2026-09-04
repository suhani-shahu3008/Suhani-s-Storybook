import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { IconButton } from './Icon Button';
import { ICONOGRAPHY_NAMES } from '../Iconography/Iconography';

const meta: Meta<typeof IconButton> = {
  title: 'Inputs/Icon Button',
  component: IconButton,
  parameters: {
    docs: {
      description: {
        component: 'Pixel-perfect Icon Button component set rebuilt from Figma Node 81:8976. Includes 10 variants across State (Default, Hovered, Focused, Pressed, Disabled) and Size (Large 60×60px, Small 30×30px) with the exact Notification icon.'
      }
    }
  },
  argTypes: {
    state: {
      control: 'select',
      options: ['Default', 'Hovered', 'Focused', 'Pressed', 'Disabled'],
      description: 'Icon Button interaction state'
    },
    size: {
      control: 'radio',
      options: ['Large', 'Small'],
      description: 'Large (60×60px, 30px icon) vs Small (30×30px, 15px icon)'
    },
    iconName: {
      control: 'select',
      options: ICONOGRAPHY_NAMES,
      description: 'Which Iconography icon to show (defaults to Notification)'
    }
  }
};

export default meta;
type Story = StoryObj<typeof IconButton>;

/* ── Interactive Playground ──────────────────────────────── */
export const Playground: Story = {
  args: {
    state: 'Default',
    size: 'Large',
  },
  render: (args) => (
    <div style={{ padding: '32px', background: '#F8FAFC', borderRadius: '12px', display: 'inline-block' }}>
      <IconButton {...args} />
    </div>
  )
};

/* ── All States Comparison (Large & Small) ───────────────── */
export const AllStates: Story = {
  name: 'All States (Figma Node 81:8976)',
  render: () => (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '32px',
      padding: '32px',
      background: '#F1F5F9',
      borderRadius: '16px',
      fontFamily: 'var(--uedp-font-family)'
    }}>
      {/* Large Row */}
      <div>
        <h4 style={{ margin: '0 0 16px', fontSize: '14px', fontWeight: 600, color: '#0F172A' }}>
          Size: Large (60×60px)
        </h4>
        <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
          <div style={{ textAlign: 'center' }}>
            <IconButton state="Default" size="Large" />
            <p style={{ margin: '8px 0 0', fontSize: '12px', color: '#64748B' }}>Default</p>
          </div>
          <div style={{ textAlign: 'center' }}>
            <IconButton state="Hovered" size="Large" />
            <p style={{ margin: '8px 0 0', fontSize: '12px', color: '#64748B' }}>Hovered</p>
          </div>
          <div style={{ textAlign: 'center' }}>
            <IconButton state="Focused" size="Large" />
            <p style={{ margin: '8px 0 0', fontSize: '12px', color: '#64748B' }}>Focused</p>
          </div>
          <div style={{ textAlign: 'center' }}>
            <IconButton state="Pressed" size="Large" />
            <p style={{ margin: '8px 0 0', fontSize: '12px', color: '#64748B' }}>Pressed</p>
          </div>
          <div style={{ textAlign: 'center' }}>
            <IconButton state="Disabled" size="Large" />
            <p style={{ margin: '8px 0 0', fontSize: '12px', color: '#64748B' }}>Disabled</p>
          </div>
        </div>
      </div>

      {/* Small Row */}
      <div>
        <h4 style={{ margin: '0 0 16px', fontSize: '14px', fontWeight: 600, color: '#0F172A' }}>
          Size: Small (30×30px)
        </h4>
        <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
          <div style={{ textAlign: 'center' }}>
            <IconButton state="Default" size="Small" />
            <p style={{ margin: '8px 0 0', fontSize: '12px', color: '#64748B' }}>Default</p>
          </div>
          <div style={{ textAlign: 'center' }}>
            <IconButton state="Hovered" size="Small" />
            <p style={{ margin: '8px 0 0', fontSize: '12px', color: '#64748B' }}>Hovered</p>
          </div>
          <div style={{ textAlign: 'center' }}>
            <IconButton state="Focused" size="Small" />
            <p style={{ margin: '8px 0 0', fontSize: '12px', color: '#64748B' }}>Focused</p>
          </div>
          <div style={{ textAlign: 'center' }}>
            <IconButton state="Pressed" size="Small" />
            <p style={{ margin: '8px 0 0', fontSize: '12px', color: '#64748B' }}>Pressed</p>
          </div>
          <div style={{ textAlign: 'center' }}>
            <IconButton state="Disabled" size="Small" />
            <p style={{ margin: '8px 0 0', fontSize: '12px', color: '#64748B' }}>Disabled</p>
          </div>
        </div>
      </div>
    </div>
  )
};
