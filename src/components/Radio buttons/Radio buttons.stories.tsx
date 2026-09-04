import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { RadioButtons } from './Radio buttons';

const meta: Meta<typeof RadioButtons> = {
  title: 'Inputs/Radio Buttons',
  component: RadioButtons,
  parameters: {
    docs: {
      description: {
        component: 'Pixel-perfect Radio Buttons component rebuilt from Figma Node 46:5914 / 46:6245. 10 Variants across State (Enabled, Hovered, Focused, Pressed, Disabled) × Selected (False, True). Dimensions: 48×48px outer touch target, 40×40px circular state layer, 20×20px vector icon.'
      }
    }
  },
  argTypes: {
    selected: {
      control: 'boolean',
      description: 'Radio selected state'
    },
    state: {
      control: 'select',
      options: ['Enabled', 'Hovered', 'Focused', 'Pressed', 'Disabled'],
      description: 'Interactive state'
    },
    label: {
      control: 'text',
      description: 'Optional label text'
    }
  }
};

export default meta;
type Story = StoryObj<typeof RadioButtons>;

/* ── Interactive Playground ──────────────────────────────── */
export const Playground: Story = {
  args: {
    selected: true,
    state: 'Enabled',
    label: 'Standard Overnight Delivery',
  },
  render: (args) => (
    <div style={{ padding: '32px', background: '#FFFFFF' }}>
      <RadioButtons {...args} />
    </div>
  )
};

/* ── All 10 Variants Matrix (Figma Component Set) ────────── */
export const AllVariantsMatrix: Story = {
  name: 'All 10 Variants Matrix',
  render: () => (
    <div style={{
      display: 'grid',
      gridTemplateColumns: '180px repeat(5, 120px)',
      alignItems: 'center',
      gap: '24px',
      padding: '32px',
      background: '#FFFFFF',
      fontFamily: 'var(--uedp-font-family)'
    }}>
      {/* Column Headers */}
      <span style={{ fontWeight: 600, fontSize: '13px', color: '#64748B' }}>VARIANT</span>
      <span style={{ fontWeight: 600, fontSize: '13px', color: '#64748B', textAlign: 'center' }}>Enabled</span>
      <span style={{ fontWeight: 600, fontSize: '13px', color: '#64748B', textAlign: 'center' }}>Hovered</span>
      <span style={{ fontWeight: 600, fontSize: '13px', color: '#64748B', textAlign: 'center' }}>Focused</span>
      <span style={{ fontWeight: 600, fontSize: '13px', color: '#64748B', textAlign: 'center' }}>Pressed</span>
      <span style={{ fontWeight: 600, fontSize: '13px', color: '#64748B', textAlign: 'center' }}>Disabled</span>

      {/* Row 1: Selected = False */}
      <span style={{ fontWeight: 500, fontSize: '14px', color: '#171717' }}>Selected = False</span>
      <div style={{ display: 'flex', justifyContent: 'center' }}><RadioButtons selected={false} state="Enabled" /></div>
      <div style={{ display: 'flex', justifyContent: 'center' }}><RadioButtons selected={false} state="Hovered" /></div>
      <div style={{ display: 'flex', justifyContent: 'center' }}><RadioButtons selected={false} state="Focused" /></div>
      <div style={{ display: 'flex', justifyContent: 'center' }}><RadioButtons selected={false} state="Pressed" /></div>
      <div style={{ display: 'flex', justifyContent: 'center' }}><RadioButtons selected={false} state="Disabled" /></div>

      {/* Row 2: Selected = True */}
      <span style={{ fontWeight: 500, fontSize: '14px', color: '#171717' }}>Selected = True</span>
      <div style={{ display: 'flex', justifyContent: 'center' }}><RadioButtons selected={true} state="Enabled" /></div>
      <div style={{ display: 'flex', justifyContent: 'center' }}><RadioButtons selected={true} state="Hovered" /></div>
      <div style={{ display: 'flex', justifyContent: 'center' }}><RadioButtons selected={true} state="Focused" /></div>
      <div style={{ display: 'flex', justifyContent: 'center' }}><RadioButtons selected={true} state="Pressed" /></div>
      <div style={{ display: 'flex', justifyContent: 'center' }}><RadioButtons selected={true} state="Disabled" /></div>
    </div>
  )
};

/* ── Interactive Radio Group ─────────────────────────────── */
export const RadioGroupDemo: Story = {
  name: 'Interactive Radio Group Demo',
  render: () => {
    const [selectedOption, setSelectedOption] = useState('express');

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', padding: '32px', background: '#FFFFFF' }}>
        <RadioButtons
          selected={selectedOption === 'standard'}
          label="Standard Delivery (3-5 business days)"
          onChange={() => setSelectedOption('standard')}
        />
        <RadioButtons
          selected={selectedOption === 'express'}
          label="Express Air Freight (Next morning delivery)"
          onChange={() => setSelectedOption('express')}
        />
        <RadioButtons
          selected={selectedOption === 'sameday'}
          label="Same-Day Dispatch & Telemetry Tracked"
          onChange={() => setSelectedOption('sameday')}
        />
        <RadioButtons
          selected={false}
          state="Disabled"
          label="Scheduled Bulk Haulage (Currently unavailable)"
        />
      </div>
    );
  }
};
