import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { TextField } from './Text field';

const meta: Meta<typeof TextField> = {
  title: 'Inputs/Text Field',
  component: TextField,
  parameters: {
    docs: {
      description: {
        component: 'Pixel-perfect Text Field (textarea) component rebuilt from Figma Node 85:10177. 8 States: Default, Hovered, Focused, Pressed, Typing, Filled, Error, Disabled. Container: 1430×247px, Box: 1430×160px, Radius 12px, Padding 20px 20px, Gap 12px.'
      }
    }
  },
  argTypes: {
    state: {
      control: 'select',
      options: ['Default', 'Hovered', 'Focused', 'Pressed', 'Typing', 'Filled', 'Error', 'Disabled'],
      description: 'Interactive state'
    },
    label: {
      control: 'text',
      description: 'Top label text (Lufga 24px w400)'
    },
    placeholder: {
      control: 'text',
      description: 'Default placeholder text (Lufga 16px w400)'
    },
    value: {
      control: 'text',
      description: 'Filled/Typing text value'
    },
    errorValue: {
      control: 'text',
      description: 'Error text value (underlined in red)'
    },
    supportingText: {
      control: 'text',
      description: 'Bottom helper text (Lufga 12px w400)'
    },
    showSupportingText: {
      control: 'boolean',
      description: 'Boolean toggle to show or hide the supporting text'
    }
  }
};

export default meta;
type Story = StoryObj<typeof TextField>;

/* ── Default Figma Playground ────────────────────────────── */
export const Playground: Story = {
  args: {
    state: 'Default',
    label: 'Label',
    placeholder: 'Enter text',
    value: 'Suhani Shahu',
    errorValue: 'Suhani Shahu*',
    supportingText: 'Supporting Text',
    showSupportingText: true,
  },
  render: (args) => (
    <div style={{ padding: '32px', background: '#FFFFFF' }}>
      <TextField {...args} />
    </div>
  )
};

/* ── All States Matrix ───────────────────────────────────── */
export const AllStates: Story = {
  name: 'All States Matrix',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', padding: '32px', background: '#FFFFFF' }}>
      <TextField state="Default" label="Default State" placeholder="Enter text" />
      <TextField state="Hovered" label="Hovered State" placeholder="Enter text" />
      <TextField state="Focused" label="Focused State" placeholder="Enter text" />
      <TextField state="Pressed" label="Pressed State" placeholder="Enter text" />
      <TextField state="Typing" label="Typing State" value="Suhani Shahu" />
      <TextField state="Filled" label="Filled State" value="Suhani Shahu" />
      <TextField state="Error" label="Error State" errorValue="Suhani Shahu*" />
      <TextField state="Disabled" label="Disabled State" placeholder="Enter text" />
    </div>
  )
};
