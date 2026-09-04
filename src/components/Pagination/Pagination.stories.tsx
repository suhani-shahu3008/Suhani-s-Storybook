import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Pagination } from './Pagination';

const meta: Meta<typeof Pagination> = {
  title: 'Navigation/Pagination',
  component: Pagination,
  parameters: {
    docs: {
      description: {
        component: 'Pixel-perfect Pagination component rebuilt from Figma Node 202:180. 5 Variants across State (Default, Hovered, Focused, Pressed, Disabled). Prev/Next: 60×60px circles (r:9999), Page Number text: Lufga 400 20px/26.1px.'
      }
    }
  },
  argTypes: {
    state: {
      control: 'select',
      options: ['Default', 'Hovered', 'Focused', 'Pressed', 'Disabled'],
      description: 'Interactive state'
    },
    pageNumber: {
      control: 'text',
      description: 'Current page number text'
    }
  }
};

export default meta;
type Story = StoryObj<typeof Pagination>;

/* ── Interactive Playground ──────────────────────────────── */
export const Playground: Story = {
  args: {
    state: 'Default',
    pageNumber: 1,
  },
  render: (args) => (
    <div style={{ padding: '32px', background: '#FFFFFF' }}>
      <Pagination {...args} />
    </div>
  )
};

/* ── All 5 Variants Matrix (Figma Component Set) ─────────── */
export const AllVariantsMatrix: Story = {
  name: 'All 5 Variants Matrix',
  render: () => (
    <div style={{
      display: 'grid',
      gridTemplateColumns: '120px repeat(5, 160px)',
      alignItems: 'center',
      gap: '24px',
      padding: '32px',
      background: '#FFFFFF',
      fontFamily: 'var(--uedp-font-family)'
    }}>
      <span style={{ fontWeight: 600, fontSize: '13px', color: '#64748B' }}>VARIANT</span>
      <span style={{ fontWeight: 600, fontSize: '13px', color: '#64748B', textAlign: 'center' }}>Default</span>
      <span style={{ fontWeight: 600, fontSize: '13px', color: '#64748B', textAlign: 'center' }}>Hovered</span>
      <span style={{ fontWeight: 600, fontSize: '13px', color: '#64748B', textAlign: 'center' }}>Focused</span>
      <span style={{ fontWeight: 600, fontSize: '13px', color: '#64748B', textAlign: 'center' }}>Pressed</span>
      <span style={{ fontWeight: 600, fontSize: '13px', color: '#64748B', textAlign: 'center' }}>Disabled</span>

      <span style={{ fontWeight: 500, fontSize: '14px', color: '#171717' }}>State</span>
      <div style={{ display: 'flex', justifyContent: 'center' }}><Pagination state="Default" /></div>
      <div style={{ display: 'flex', justifyContent: 'center' }}><Pagination state="Hovered" /></div>
      <div style={{ display: 'flex', justifyContent: 'center' }}><Pagination state="Focused" /></div>
      <div style={{ display: 'flex', justifyContent: 'center' }}><Pagination state="Pressed" /></div>
      <div style={{ display: 'flex', justifyContent: 'center' }}><Pagination state="Disabled" /></div>
    </div>
  )
};
