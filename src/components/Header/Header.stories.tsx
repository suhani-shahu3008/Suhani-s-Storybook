import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Header } from './Header';

const meta: Meta<typeof Header> = {
  title: 'Navigation/Header',
  component: Header,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'Pixel-perfect Header component rebuilt from Figma Node 82:9262. Dimensions: 1648×88px. Left: Logo (71×80px) + Greeting ("Hello Suhani," Lufga 24px) + DateTime ("24 Oct 2025 , 10:53 a.m" Lufga 16px). Right: Search bar (644×88px) + Notification Button (60×60px) + Profile Avatar (367×88px).'
      }
    }
  },
  argTypes: {
    showIconButton: {
      control: 'boolean',
      description: 'Figma Boolean Property: Icon Button#82:288'
    },
    showSearchBar: {
      control: 'boolean',
      description: 'Figma Boolean Property: Search bar#82:289'
    },
    showProfileAvatar: {
      control: 'boolean',
      description: 'Figma Boolean Property: Profile Avatar#82:290'
    },
    greeting: {
      control: 'text',
      description: 'Greeting title text (Lufga 24px Regular)'
    },
    dateTime: {
      control: 'text',
      description: 'Date and time subtitle (Lufga 16px Regular)'
    },
    searchPlaceholder: {
      control: 'text',
      description: 'Search bar placeholder'
    },
    userName: {
      control: 'text',
      description: 'Profile name (Lufga 20px Regular)'
    },
    userRole: {
      control: 'text',
      description: 'Profile role (Lufga 12px Regular)'
    },
    userStatus: {
      control: 'select',
      options: ['Online', 'Offline', 'Busy', 'InTransit'],
      description: 'User avatar online status badge'
    },
    showUserStatus: {
      control: 'boolean',
      description: 'Boolean toggle to show or hide the avatar status dot'
    }
  }
};

export default meta;
type Story = StoryObj<typeof Header>;

/* ── Default Figma Header ────────────────────────────────── */
export const Default: Story = {
  args: {
    showIconButton: true,
    showSearchBar: true,
    showProfileAvatar: true,
    greeting: 'Hello Suhani,',
    dateTime: '24 Oct 2025 , 10:53 a.m',
    searchPlaceholder: 'Search in Shipments...',
    userName: 'Suhani Shahu',
    userRole: 'Route Planner',
    userStatus: 'Online',
    showUserStatus: true,
  },
  render: (args) => (
    <div style={{ padding: '24px 40px', background: '#F8FAFC', minHeight: '180px' }}>
      <Header {...args} />
    </div>
  )
};

/* ── Different Status States ─────────────────────────────── */
export const StatusVariations: Story = {
  name: 'User Status Variations',
  render: () => (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '32px',
      padding: '24px 40px',
      background: '#F1F5F9',
      fontFamily: 'var(--uedp-font-family)'
    }}>
      <div>
        <p style={{ margin: '0 0 12px', fontSize: '12px', fontWeight: 600, color: '#22C55E' }}>ONLINE</p>
        <Header userStatus="Online" showUserStatus={true} />
      </div>

      <div>
        <p style={{ margin: '0 0 12px', fontSize: '12px', fontWeight: 600, color: '#94A3B8' }}>OFFLINE</p>
        <Header userStatus="Offline" showUserStatus={true} />
      </div>

      <div>
        <p style={{ margin: '0 0 12px', fontSize: '12px', fontWeight: 600, color: '#EF4444' }}>BUSY</p>
        <Header userStatus="Busy" showUserStatus={true} />
      </div>

      <div>
        <p style={{ margin: '0 0 12px', fontSize: '12px', fontWeight: 600, color: '#64748B' }}>WITHOUT STATUS DOT (showUserStatus = false)</p>
        <Header showUserStatus={false} />
      </div>
    </div>
  )
};
