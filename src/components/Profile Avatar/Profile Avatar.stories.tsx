import type { Meta, StoryObj } from '@storybook/react';
import { ProfileAvatar } from './Profile Avatar';

const meta: Meta<typeof ProfileAvatar> = {
  title: 'Data Display/Profile Avatar',
  component: ProfileAvatar,
  parameters: {
    docs: {
      description: {
        component: 'Pixel-perfect Profile Avatar card rebuilt from Figma Node 80:8888. Dimensions: 367×88px, border-radius: 24px, padding: 14px 20px, gap: 20px, drop-shadow: 4px 4px 10.9px rgba(0,0,0,0.25). Includes 60px avatar, name (Lufga 20px), role (Lufga 12px), states (Default, Hovered, Focused, Pressed), status indicator dots, and showStatus boolean.'
      }
    }
  },
  argTypes: {
    state: {
      control: 'select',
      options: ['Default', 'Hovered', 'Focused', 'Pressed'],
      description: 'Profile Avatar interaction state'
    },
    showStatus: {
      control: 'boolean',
      description: 'Boolean toggle: Show or hide the status symbol dot'
    },
    status: {
      control: 'select',
      options: ['Online', 'Offline', 'Busy', 'InTransit'],
      description: 'Status indicator badge'
    },
    name: {
      control: 'text',
      description: 'User display name (Lufga 20px Regular)'
    },
    role: {
      control: 'text',
      description: 'User role title (Lufga 12px Regular)'
    },
    initials: {
      control: 'text',
      description: 'Initials shown when no image'
    },
    imageUrl: {
      control: 'text',
      description: 'Avatar image URL'
    }
  }
};

export default meta;
type Story = StoryObj<typeof ProfileAvatar>;

/* ── Interactive Playground ──────────────────────────────── */
export const Playground: Story = {
  args: {
    state: 'Default',
    showStatus: true,
    status: 'Online',
    name: 'Suhani Shahu',
    role: 'Route Planner',
    initials: 'SS',
  },
  render: (args) => (
    <div style={{ padding: '32px', background: '#F8FAFC', borderRadius: '16px', display: 'inline-block' }}>
      <ProfileAvatar {...args} />
    </div>
  )
};

/* ── All States (Figma Node 80:8888) ─────────────────────── */
export const AllStates: Story = {
  name: 'All States (Figma Node 80:8888)',
  render: () => (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '24px',
      padding: '32px',
      background: '#F1F5F9',
      borderRadius: '20px',
      fontFamily: 'var(--uedp-font-family)'
    }}>
      <div>
        <p style={{ margin: '0 0 8px', fontSize: '12px', fontWeight: 600, color: '#64748B' }}>DEFAULT (#FFFFFF)</p>
        <ProfileAvatar state="Default" status="Online" name="Suhani Shahu" role="Route Planner" />
      </div>

      <div>
        <p style={{ margin: '0 0 8px', fontSize: '12px', fontWeight: 600, color: '#64748B' }}>HOVERED (#F5F5F5)</p>
        <ProfileAvatar state="Hovered" status="Online" name="Suhani Shahu" role="Route Planner" />
      </div>

      <div>
        <p style={{ margin: '0 0 8px', fontSize: '12px', fontWeight: 600, color: '#64748B' }}>FOCUSED (#E5E5E5)</p>
        <ProfileAvatar state="Focused" status="Online" name="Suhani Shahu" role="Route Planner" />
      </div>

      <div>
        <p style={{ margin: '0 0 8px', fontSize: '12px', fontWeight: 600, color: '#64748B' }}>PRESSED (#D4D4D4)</p>
        <ProfileAvatar state="Pressed" status="Online" name="Suhani Shahu" role="Route Planner" />
      </div>
    </div>
  )
};

/* ── Status Indicator Variations ─────────────────────────── */
export const StatusVariations: Story = {
  name: 'Status Indicator Dots',
  render: () => (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '20px',
      padding: '32px',
      background: '#F1F5F9',
      borderRadius: '20px',
      fontFamily: 'var(--uedp-font-family)'
    }}>
      <div>
        <p style={{ margin: '0 0 8px', fontSize: '12px', fontWeight: 600, color: '#22C55E' }}>ONLINE</p>
        <ProfileAvatar status="Online" showStatus name="Suhani Shahu" role="Route Planner" />
      </div>

      <div>
        <p style={{ margin: '0 0 8px', fontSize: '12px', fontWeight: 600, color: '#94A3B8' }}>OFFLINE</p>
        <ProfileAvatar status="Offline" showStatus name="Suhani Shahu" role="Route Planner" />
      </div>

      <div>
        <p style={{ margin: '0 0 8px', fontSize: '12px', fontWeight: 600, color: '#EF4444' }}>BUSY</p>
        <ProfileAvatar status="Busy" showStatus name="Suhani Shahu" role="Route Planner" />
      </div>

      <div>
        <p style={{ margin: '0 0 8px', fontSize: '12px', fontWeight: 600, color: '#3B82F6' }}>IN TRANSIT</p>
        <ProfileAvatar status="InTransit" showStatus name="Suhani Shahu" role="Route Planner" />
      </div>

      <div>
        <p style={{ margin: '0 0 8px', fontSize: '12px', fontWeight: 600, color: '#64748B' }}>WITHOUT STATUS (showStatus = false)</p>
        <ProfileAvatar showStatus={false} name="Suhani Shahu" role="Route Planner" />
      </div>
    </div>
  )
};
