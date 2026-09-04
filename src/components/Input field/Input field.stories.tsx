import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { InputField } from './Input field';

const meta: Meta<typeof InputField> = {
  title: 'Inputs/Input Field',
  component: InputField,
  parameters: {
    docs: {
      description: {
        component: 'Pixel-perfect Input Field component rebuilt from Figma Node 85:9820. 16 Variants across Type (Filled, Outlined) and State (Default, Hovered, Focused, Pressed, Typing, Filled, Error, Disabled). Outer: 680×134px, Box: 680×60px, Radius 12px, Padding 16px 20px, Gap 12px.'
      }
    }
  },
  argTypes: {
    type: {
      control: 'select',
      options: ['Filled', 'Outlined'],
      description: 'Input field visual style'
    },
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
    },
    showIconBefore: {
      control: 'boolean',
      description: 'Boolean toggle to show or hide the leading Notepad icon'
    },
    showIconAfter: {
      control: 'boolean',
      description: 'Boolean toggle to show or hide the trailing View/Cancel icon'
    }
  }
};

export default meta;
type Story = StoryObj<typeof InputField>;

/* ── Default Figma Playground ────────────────────────────── */
export const Playground: Story = {
  args: {
    type: 'Filled',
    state: 'Default',
    label: 'Label',
    placeholder: 'Enter text',
    value: 'Suhani Shahu',
    errorValue: 'Suhani Shahu*',
    supportingText: 'Supporting Text',
    showSupportingText: true,
    showIconBefore: true,
    showIconAfter: true,
  },
  render: (args) => (
    <div style={{ padding: '32px', background: '#F8FAFC' }}>
      <InputField {...args} />
    </div>
  )
};

/* ── Filled Variants Matrix ──────────────────────────────── */
export const FilledStates: Story = {
  name: 'Filled Type — All States',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', padding: '32px', background: '#F8FAFC' }}>
      <InputField type="Filled" state="Default" label="Default State" placeholder="Enter text" />
      <InputField type="Filled" state="Hovered" label="Hovered State" placeholder="Enter text" />
      <InputField type="Filled" state="Focused" label="Focused State" placeholder="Enter text" />
      <InputField type="Filled" state="Pressed" label="Pressed State" placeholder="Enter text" />
      <InputField type="Filled" state="Typing" label="Typing State" value="Suhani Shahu" />
      <InputField type="Filled" state="Filled" label="Filled State" value="Suhani Shahu" />
      <InputField type="Filled" state="Error" label="Error State" errorValue="Suhani Shahu*" />
      <InputField type="Filled" state="Disabled" label="Disabled State" placeholder="Enter text" />
    </div>
  )
};

/* ── Outlined Variants Matrix ────────────────────────────── */
export const OutlinedStates: Story = {
  name: 'Outlined Type — All States',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', padding: '32px', background: '#F8FAFC' }}>
      <InputField type="Outlined" state="Default" label="Default State" placeholder="Enter text" />
      <InputField type="Outlined" state="Hovered" label="Hovered State" placeholder="Enter text" />
      <InputField type="Outlined" state="Focused" label="Focused State" placeholder="Enter text" />
      <InputField type="Outlined" state="Pressed" label="Pressed State" placeholder="Enter text" />
      <InputField type="Outlined" state="Typing" label="Typing State" value="Suhani Shahu" />
      <InputField type="Outlined" state="Filled" label="Filled State" value="Suhani Shahu" />
      <InputField type="Outlined" state="Error" label="Error State" errorValue="Suhani Shahu*" />
      <InputField type="Outlined" state="Disabled" label="Disabled State" placeholder="Enter text" />
    </div>
  )
};
