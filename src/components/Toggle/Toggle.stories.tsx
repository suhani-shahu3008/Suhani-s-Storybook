import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Toggle } from './Toggle';

const meta: Meta<typeof Toggle> = {
  title: 'Inputs/Toggle',
  component: Toggle,
  parameters: {
    docs: {
      description: {
        component: 'Pixel-perfect Toggle switch component rebuilt from Figma Node 56:6962. 10 Variants across Type (Primary, Success) × State (Enabled, Hovered, Focused, Pressed, Disabled). Track: 52×32px, Thumb: 24×24px (Pressed: 28×28px), Focus ring: 56×36px.'
      }
    }
  },
  argTypes: {
    typeVariant: {
      control: 'select',
      options: ['Primary', 'Success'],
      description: 'Toggle color type variant'
    },
    state: {
      control: 'select',
      options: ['Enabled', 'Hovered', 'Focused', 'Pressed', 'Disabled'],
      description: 'Interactive state'
    },
    checked: {
      control: 'boolean',
      description: 'Toggle checked / on status'
    },
    label: {
      control: 'text',
      description: 'Optional label text'
    }
  }
};

export default meta;
type Story = StoryObj<typeof Toggle>;

/* ── Interactive Playground ──────────────────────────────── */
export const Playground: Story = {
  args: {
    typeVariant: 'Primary',
    state: 'Enabled',
    checked: true,
    label: 'Live GPS Telemetry',
  },
  render: (args) => (
    <div style={{ padding: '32px', background: '#FFFFFF' }}>
      <Toggle {...args} />
    </div>
  )
};

/* ── All 10 Variants Matrix (Figma Component Set) ────────── */
export const AllVariantsMatrix: Story = {
  name: 'All 10 Variants Matrix',
  render: () => (
    <div style={{
      display: 'grid',
      gridTemplateColumns: '160px repeat(5, 120px)',
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

      {/* Row 1: Type = Primary */}
      <span style={{ fontWeight: 500, fontSize: '14px', color: '#171717' }}>Type = Primary</span>
      <div style={{ display: 'flex', justifyContent: 'center' }}><Toggle typeVariant="Primary" state="Enabled" checked={true} /></div>
      <div style={{ display: 'flex', justifyContent: 'center' }}><Toggle typeVariant="Primary" state="Hovered" checked={true} /></div>
      <div style={{ display: 'flex', justifyContent: 'center' }}><Toggle typeVariant="Primary" state="Focused" checked={true} /></div>
      <div style={{ display: 'flex', justifyContent: 'center' }}><Toggle typeVariant="Primary" state="Pressed" checked={true} /></div>
      <div style={{ display: 'flex', justifyContent: 'center' }}><Toggle typeVariant="Primary" state="Disabled" checked={true} /></div>

      {/* Row 2: Type = Success */}
      <span style={{ fontWeight: 500, fontSize: '14px', color: '#171717' }}>Type = Success</span>
      <div style={{ display: 'flex', justifyContent: 'center' }}><Toggle typeVariant="Success" state="Enabled" checked={true} /></div>
      <div style={{ display: 'flex', justifyContent: 'center' }}><Toggle typeVariant="Success" state="Hovered" checked={true} /></div>
      <div style={{ display: 'flex', justifyContent: 'center' }}><Toggle typeVariant="Success" state="Focused" checked={true} /></div>
      <div style={{ display: 'flex', justifyContent: 'center' }}><Toggle typeVariant="Success" state="Pressed" checked={true} /></div>
      <div style={{ display: 'flex', justifyContent: 'center' }}><Toggle typeVariant="Success" state="Disabled" checked={true} /></div>
    </div>
  )
};

/* ── Interactive Settings Demo ───────────────────────────── */
export const SettingsDemo: Story = {
  name: 'Interactive Settings Demo',
  render: () => {
    const [gps, setGps] = useState(true);
    const [alerts, setAlerts] = useState(true);
    const [autoRoute, setAutoRoute] = useState(false);

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', padding: '32px', background: '#FFFFFF' }}>
        <Toggle
          typeVariant="Primary"
          checked={gps}
          label="Real-Time GPS Fleet Telemetry"
          onChange={setGps}
        />
        <Toggle
          typeVariant="Success"
          checked={alerts}
          label="Speed & Geo-Fence Immediate Alerts"
          onChange={setAlerts}
        />
        <Toggle
          typeVariant="Primary"
          checked={autoRoute}
          label="Automatic AI Traffic Rerouting"
          onChange={setAutoRoute}
        />
        <Toggle
          typeVariant="Primary"
          checked={true}
          state="Disabled"
          label="Encrypted Blackbox Logging (Required by policy)"
        />
      </div>
    );
  }
};
