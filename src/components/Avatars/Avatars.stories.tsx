import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Avatars } from './Avatars';

const meta: Meta<typeof Avatars> = {
  title: 'Data Display/Avatars',
  component: Avatars,
  parameters: {
    docs: {
      description: {
        component: 'Avatars component with Big (120px) and Small (60px) sizes, initials fallback, and status indicator dots (Online, Offline, Busy, InTransit).'
      }
    }
  },
  argTypes: {
    size: {
      control: 'radio',
      options: ['Big', 'Small'],
      description: 'Size of avatar: Big (120px) | Small (60px)'
    },
    showStatus: {
      control: 'boolean',
      description: 'Boolean toggle: Show or hide the status badge dot'
    },
    status: {
      control: 'select',
      options: ['Online', 'Offline', 'Busy', 'InTransit'],
      description: 'Status indicator badge'
    },
    initials: {
      control: 'text',
      description: 'Initials shown when no image'
    },
    name: {
      control: 'text',
      description: 'Name for tooltip and label'
    },
    imageUrl: {
      control: 'text',
      description: 'Avatar image URL'
    }
  }
};

export default meta;
type Story = StoryObj<typeof Avatars>;

/* ── Interactive Playground ──────────────────────────────── */
export const Playground: Story = {
  args: {
    size: 'Big',
    showStatus: true,
    status: 'Online',
    initials: 'SS',
    name: 'Suhani Shahu',
  }
};

/* ── With Status vs Without Status (Boolean comparison) ─── */
export const StatusVisibilityToggle: Story = {
  name: 'Status Visibility (showStatus Boolean)',
  render: () => (
    <div style={{ display: 'flex', gap: '32px', alignItems: 'center', fontFamily: 'var(--uedp-font-family)' }}>
      <div style={{ textAlign: 'center' }}>
        <Avatars size="Big" showStatus={true} status="Online" initials="SS" name="With Status" />
        <p style={{ margin: '8px 0 0', fontSize: '13px', fontWeight: 600, color: '#0F172A' }}>showStatus = true</p>
      </div>
      <div style={{ textAlign: 'center' }}>
        <Avatars size="Big" showStatus={false} status="Online" initials="SS" name="Without Status" />
        <p style={{ margin: '8px 0 0', fontSize: '13px', fontWeight: 600, color: '#0F172A' }}>showStatus = false</p>
      </div>
      <div style={{ textAlign: 'center' }}>
        <Avatars size="Small" showStatus={true} status="Online" initials="SS" name="With Status" />
        <p style={{ margin: '8px 0 0', fontSize: '13px', fontWeight: 600, color: '#0F172A' }}>Small (showStatus = true)</p>
      </div>
      <div style={{ textAlign: 'center' }}>
        <Avatars size="Small" showStatus={false} status="Online" initials="SS" name="Without Status" />
        <p style={{ margin: '8px 0 0', fontSize: '13px', fontWeight: 600, color: '#0F172A' }}>Small (showStatus = false)</p>
      </div>
    </div>
  )
};

/* ── Size Comparison (Big 120px vs Small 60px) ───────────── */
export const SizeComparison: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '32px', alignItems: 'center', fontFamily: 'var(--uedp-font-family)' }}>
      <div style={{ textAlign: 'center' }}>
        <Avatars size="Big" status="Online" initials="SS" name="Suhani Shahu" />
        <p style={{ margin: '8px 0 0', fontSize: '13px', fontWeight: 600, color: '#0F172A' }}>Big (120px)</p>
      </div>
      <div style={{ textAlign: 'center' }}>
        <Avatars size="Small" status="Online" initials="SS" name="Suhani Shahu" />
        <p style={{ margin: '8px 0 0', fontSize: '13px', fontWeight: 600, color: '#0F172A' }}>Small (60px)</p>
      </div>
    </div>
  )
};

/* ── All Status States (Big 120px) ───────────────────────── */
export const AllStatusesBig: Story = {
  name: 'All Statuses — Big (120px)',
  render: () => (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '28px', alignItems: 'center', fontFamily: 'var(--uedp-font-family)' }}>
      <div style={{ textAlign: 'center' }}>
        <Avatars size="Big" status="Online" initials="ON" name="Online User" />
        <p style={{ margin: '8px 0 0', fontSize: '12px', color: '#22C55E', fontWeight: 600 }}>Online</p>
      </div>
      <div style={{ textAlign: 'center' }}>
        <Avatars size="Big" status="Offline" initials="OF" name="Offline User" />
        <p style={{ margin: '8px 0 0', fontSize: '12px', color: '#94A3B8', fontWeight: 600 }}>Offline</p>
      </div>
      <div style={{ textAlign: 'center' }}>
        <Avatars size="Big" status="Busy" initials="BU" name="Busy User" />
        <p style={{ margin: '8px 0 0', fontSize: '12px', color: '#EF4444', fontWeight: 600 }}>Busy</p>
      </div>
      <div style={{ textAlign: 'center' }}>
        <Avatars size="Big" status="InTransit" initials="TR" name="In Transit" />
        <p style={{ margin: '8px 0 0', fontSize: '12px', color: '#3B82F6', fontWeight: 600 }}>In Transit</p>
      </div>
    </div>
  )
};

/* ── All Status States (Small 60px) ──────────────────────── */
export const AllStatusesSmall: Story = {
  name: 'All Statuses — Small (60px)',
  render: () => (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '28px', alignItems: 'center', fontFamily: 'var(--uedp-font-family)' }}>
      <div style={{ textAlign: 'center' }}>
        <Avatars size="Small" status="Online" initials="ON" name="Online User" />
        <p style={{ margin: '8px 0 0', fontSize: '12px', color: '#22C55E', fontWeight: 600 }}>Online</p>
      </div>
      <div style={{ textAlign: 'center' }}>
        <Avatars size="Small" status="Offline" initials="OF" name="Offline User" />
        <p style={{ margin: '8px 0 0', fontSize: '12px', color: '#94A3B8', fontWeight: 600 }}>Offline</p>
      </div>
      <div style={{ textAlign: 'center' }}>
        <Avatars size="Small" status="Busy" initials="BU" name="Busy User" />
        <p style={{ margin: '8px 0 0', fontSize: '12px', color: '#EF4444', fontWeight: 600 }}>Busy</p>
      </div>
      <div style={{ textAlign: 'center' }}>
        <Avatars size="Small" status="InTransit" initials="TR" name="In Transit" />
        <p style={{ margin: '8px 0 0', fontSize: '12px', color: '#3B82F6', fontWeight: 600 }}>In Transit</p>
      </div>
    </div>
  )
};
