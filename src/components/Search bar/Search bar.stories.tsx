import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { SearchBar } from './Search bar';

const meta: Meta<typeof SearchBar> = {
  title: 'Inputs/Search Bar',
  component: SearchBar,
  parameters: {
    docs: {
      description: {
        component: 'Pixel-perfect Search Bar component rebuilt from Figma Node 42:5064 (Component Sets: 44:5165 & 44:5271). Dimensions: 644×88px, radius: 9999px (Capsule), padding: 20px 32px, gap: 32px, shadow: 4px 4px 10.9px rgba(0,0,0,0.25). Includes 8 states: Default, Hovered, Focused, Pressed, Disabled, Typing, Filled, Error.'
      }
    }
  },
  argTypes: {
    state: {
      control: 'select',
      options: ['Default', 'Hovered', 'Focused', 'Pressed', 'Disabled', 'Typing', 'Filled', 'Error'],
      description: 'Search Bar interaction state'
    },
    showCancel: {
      control: 'boolean',
      description: 'Show trailing Cancel / Clear button icon (Figma 44:5165 vs 44:5271)'
    },
    placeholder: {
      control: 'text',
      description: 'Placeholder text (Lufga 16px Regular, #A3A3A3)'
    },
    errorText: {
      control: 'text',
      description: 'Text displayed in Error state (Lufga 16px Regular, #DC2626)'
    }
  }
};

export default meta;
type Story = StoryObj<typeof SearchBar>;

/* ── Interactive Playground ──────────────────────────────── */
export const Playground: Story = {
  args: {
    state: 'Default',
    showCancel: true,
    placeholder: 'Search in Shipments...',
    errorText: 'Delivery Route*',
  },
  render: (args) => (
    <div style={{ padding: '40px', background: '#F8FAFC', borderRadius: '16px', display: 'inline-block' }}>
      <SearchBar {...args} />
    </div>
  )
};

/* ── All States (With Cancel Button — Figma 44:5165) ──────── */
export const AllStatesWithCancel: Story = {
  name: 'All States — With Cancel (Figma 44:5165)',
  render: () => (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '24px',
      padding: '40px',
      background: '#F1F5F9',
      borderRadius: '20px',
      fontFamily: 'var(--uedp-font-family)'
    }}>
      <div>
        <p style={{ margin: '0 0 8px', fontSize: '12px', fontWeight: 600, color: '#64748B' }}>DEFAULT</p>
        <SearchBar state="Default" showCancel />
      </div>

      <div>
        <p style={{ margin: '0 0 8px', fontSize: '12px', fontWeight: 600, color: '#64748B' }}>HOVERED</p>
        <SearchBar state="Hovered" showCancel />
      </div>

      <div>
        <p style={{ margin: '0 0 8px', fontSize: '12px', fontWeight: 600, color: '#64748B' }}>FOCUSED</p>
        <SearchBar state="Focused" showCancel />
      </div>

      <div>
        <p style={{ margin: '0 0 8px', fontSize: '12px', fontWeight: 600, color: '#64748B' }}>TYPING (with blue cursor)</p>
        <SearchBar state="Typing" showCancel />
      </div>

      <div>
        <p style={{ margin: '0 0 8px', fontSize: '12px', fontWeight: 600, color: '#64748B' }}>FILLED</p>
        <SearchBar state="Filled" showCancel />
      </div>

      <div>
        <p style={{ margin: '0 0 8px', fontSize: '12px', fontWeight: 600, color: '#64748B' }}>ERROR</p>
        <SearchBar state="Error" showCancel errorText="Delivery Route*" />
      </div>

      <div>
        <p style={{ margin: '0 0 8px', fontSize: '12px', fontWeight: 600, color: '#64748B' }}>PRESSED</p>
        <SearchBar state="Pressed" showCancel />
      </div>

      <div>
        <p style={{ margin: '0 0 8px', fontSize: '12px', fontWeight: 600, color: '#64748B' }}>DISABLED</p>
        <SearchBar state="Disabled" showCancel />
      </div>
    </div>
  )
};

/* ── All States (Without Cancel Button — Figma 44:5271) ───── */
export const AllStatesWithoutCancel: Story = {
  name: 'All States — Without Cancel (Figma 44:5271)',
  render: () => (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '24px',
      padding: '40px',
      background: '#F1F5F9',
      borderRadius: '20px',
      fontFamily: 'var(--uedp-font-family)'
    }}>
      <div>
        <p style={{ margin: '0 0 8px', fontSize: '12px', fontWeight: 600, color: '#64748B' }}>DEFAULT</p>
        <SearchBar state="Default" showCancel={false} />
      </div>

      <div>
        <p style={{ margin: '0 0 8px', fontSize: '12px', fontWeight: 600, color: '#64748B' }}>TYPING</p>
        <SearchBar state="Typing" showCancel={false} />
      </div>

      <div>
        <p style={{ margin: '0 0 8px', fontSize: '12px', fontWeight: 600, color: '#64748B' }}>FILLED</p>
        <SearchBar state="Filled" showCancel={false} />
      </div>

      <div>
        <p style={{ margin: '0 0 8px', fontSize: '12px', fontWeight: 600, color: '#64748B' }}>ERROR</p>
        <SearchBar state="Error" showCancel={false} errorText="Delivery Route*" />
      </div>

      <div>
        <p style={{ margin: '0 0 8px', fontSize: '12px', fontWeight: 600, color: '#64748B' }}>DISABLED</p>
        <SearchBar state="Disabled" showCancel={false} />
      </div>
    </div>
  )
};
