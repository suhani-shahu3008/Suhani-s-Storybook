import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';
import { ICONOGRAPHY_NAMES } from '../Iconography/Iconography';

const meta: Meta<typeof Button> = {
  title: 'Inputs/Button',
  component: Button,
  parameters: {
    docs: {
      description: {
        component: 'Pixel-perfect Button component set rebuilt from Figma Node 10:166. Includes 38 variants across Type (Primary/Secondary), State (Active/Hovered/Focused/Pressed/Disabled), Shape (Capsule/Rectangle), Feedback (Default/Error/Warning/Success/Info), and Size (Large/Small).'
      }
    }
  },
  argTypes: {
    typeVariant: {
      control: 'radio',
      options: ['Primary', 'Secondary'],
      description: 'Button type variant'
    },
    state: {
      control: 'select',
      options: ['Active', 'Hovered', 'Focused', 'Pressed', 'Disabled'],
      description: 'Button visual interaction state'
    },
    shape: {
      control: 'radio',
      options: ['Capsule', 'Rectangle'],
      description: 'Capsule (radius 9999px) vs Rectangle (radius 12px)'
    },
    feedback: {
      control: 'select',
      options: ['Default', 'Error', 'Warning', 'Success', 'Info'],
      description: 'Feedback semantic color (Primary type only)'
    },
    size: {
      control: 'radio',
      options: ['Large', 'Small'],
      description: 'Large (20px font, pad 14/24) vs Small (16px font, pad 16/24)'
    },
    label: {
      control: 'text',
      description: 'Button text content'
    },
    showIcon: {
      control: 'boolean',
      description: 'Include icon'
    },
    iconName: {
      control: 'select',
      options: ICONOGRAPHY_NAMES,
      description: 'Which Iconography icon to show (requires Show Icon = true)'
    }
  }
};

export default meta;
type Story = StoryObj<typeof Button>;

/* ── Interactive Playground ──────────────────────────────── */
export const Playground: Story = {
  args: {
    typeVariant: 'Primary',
    state: 'Active',
    shape: 'Capsule',
    feedback: 'Default',
    size: 'Large',
    label: 'Button',
    showIcon: false,
  }
};

/* ── Primary States (Figma Node 10:166) ─────────────────── */
export const PrimaryStates: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <h4 style={{ margin: 0, fontFamily: 'var(--uedp-font-family)' }}>Primary Button States (Capsule & Rectangle)</h4>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', alignItems: 'center' }}>
        <Button typeVariant="Primary" state="Active" shape="Capsule" label="Active" />
        <Button typeVariant="Primary" state="Hovered" shape="Capsule" label="Hovered" />
        <Button typeVariant="Primary" state="Focused" shape="Capsule" label="Focused" />
        <Button typeVariant="Primary" state="Pressed" shape="Capsule" label="Pressed" />
        <Button typeVariant="Primary" state="Disabled" shape="Capsule" label="Disabled" />
      </div>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', alignItems: 'center' }}>
        <Button typeVariant="Primary" state="Active" shape="Rectangle" label="Active" showIcon />
        <Button typeVariant="Primary" state="Hovered" shape="Rectangle" label="Hovered" showIcon />
        <Button typeVariant="Primary" state="Focused" shape="Rectangle" label="Focused" showIcon />
        <Button typeVariant="Primary" state="Pressed" shape="Rectangle" label="Pressed" showIcon />
        <Button typeVariant="Primary" state="Disabled" shape="Rectangle" label="Disabled" showIcon />
      </div>
    </div>
  )
};

/* ── Secondary States (Figma Node 10:166) ───────────────── */
export const SecondaryStates: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <h4 style={{ margin: 0, fontFamily: 'var(--uedp-font-family)' }}>Secondary Button States (Capsule & Rectangle)</h4>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', alignItems: 'center' }}>
        <Button typeVariant="Secondary" state="Active" shape="Capsule" label="Active" />
        <Button typeVariant="Secondary" state="Hovered" shape="Capsule" label="Hovered" />
        <Button typeVariant="Secondary" state="Focused" shape="Capsule" label="Focused" />
        <Button typeVariant="Secondary" state="Pressed" shape="Capsule" label="Pressed" />
        <Button typeVariant="Secondary" state="Disabled" shape="Capsule" label="Disabled" />
      </div>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', alignItems: 'center' }}>
        <Button typeVariant="Secondary" state="Active" shape="Rectangle" label="Active" showIcon />
        <Button typeVariant="Secondary" state="Hovered" shape="Rectangle" label="Hovered" showIcon />
        <Button typeVariant="Secondary" state="Focused" shape="Rectangle" label="Focused" showIcon />
        <Button typeVariant="Secondary" state="Pressed" shape="Rectangle" label="Pressed" showIcon />
        <Button typeVariant="Secondary" state="Disabled" shape="Rectangle" label="Disabled" showIcon />
      </div>
    </div>
  )
};

/* ── Feedback Colors (Primary Active) ───────────────────── */
export const FeedbackVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <h4 style={{ margin: 0, fontFamily: 'var(--uedp-font-family)' }}>Primary Feedback Variants (Large & Small)</h4>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', alignItems: 'center' }}>
        <Button typeVariant="Primary" feedback="Default" size="Large" shape="Rectangle" label="Default" showIcon />
        <Button typeVariant="Primary" feedback="Error" size="Large" shape="Rectangle" label="Error" showIcon />
        <Button typeVariant="Primary" feedback="Warning" size="Large" shape="Rectangle" label="Warning" showIcon />
        <Button typeVariant="Primary" feedback="Success" size="Large" shape="Rectangle" label="Success" showIcon />
        <Button typeVariant="Primary" feedback="Info" size="Large" shape="Rectangle" label="Info" showIcon />
      </div>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', alignItems: 'center' }}>
        <Button typeVariant="Primary" feedback="Default" size="Small" shape="Rectangle" label="Default" showIcon />
        <Button typeVariant="Primary" feedback="Error" size="Small" shape="Rectangle" label="Error" showIcon />
        <Button typeVariant="Primary" feedback="Warning" size="Small" shape="Rectangle" label="Warning" showIcon />
        <Button typeVariant="Primary" feedback="Success" size="Small" shape="Rectangle" label="Success" showIcon />
        <Button typeVariant="Primary" feedback="Info" size="Small" shape="Rectangle" label="Info" showIcon />
      </div>
    </div>
  )
};

/* ── Size Comparison ────────────────────────────────────── */
export const SizeComparison: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <h4 style={{ margin: 0, fontFamily: 'var(--uedp-font-family)' }}>Size Comparison (Large vs Small)</h4>
      <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
        <Button typeVariant="Primary" size="Large" shape="Rectangle" label="Large (20px)" showIcon />
        <Button typeVariant="Primary" size="Small" shape="Rectangle" label="Small (16px)" showIcon />
      </div>
      <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
        <Button typeVariant="Secondary" size="Large" shape="Rectangle" label="Large (20px)" showIcon />
        <Button typeVariant="Secondary" size="Small" shape="Rectangle" label="Small (16px)" showIcon />
      </div>
    </div>
  )
};
