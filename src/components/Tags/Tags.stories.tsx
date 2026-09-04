import type { Meta, StoryObj } from '@storybook/react';
import { Tags } from './Tags';

/* ============================================================
   Figma Node: 65:7696 — Tags Component Set
   5 Variants: Type = Info | Error | Warning | Success | Inactive
   ============================================================ */

const meta: Meta<typeof Tags> = {
  title: 'Data Display/Tags',
  component: Tags,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
**Figma Node: 65:7696** — Component Set: Tags

5 variants across **Type**: Info | Error | Warning | Success | Inactive

**Dimensions**: \`38×24px\`, \`border-radius: 9999px\` (pill), \`padding: 10px\` all sides

**Typography**: Lufga Light \`fontWeight:300\`, \`8px\`, \`lineHeight:10.44px\`
        `,
      },
    },
  },
  argTypes: {
    typeVariant: {
      control: { type: 'radio' },
      options: ['Info', 'Error', 'Warning', 'Success', 'Inactive'],
      description: 'Figma Variant: Type',
    },
    text: {
      control: { type: 'text' },
      description: 'Figma TEXT property "Text#65:173" — default: "Tags"',
    },
  },
  args: {
    typeVariant: 'Info',
    text: 'Tags',
  },
};

export default meta;
type Story = StoryObj<typeof Tags>;

/* ── Default Playground ─────────────────────────────────── */
export const Playground: Story = {
  args: {
    typeVariant: 'Info',
    text: 'Tags',
  },
};

/* ── All 5 Variants ─────────────────────────────────────── */
export const AllVariants: Story = {
  name: 'All Variants (5)',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'row', gap: '12px', alignItems: 'center', padding: '24px', flexWrap: 'wrap', fontFamily: 'Lufga, sans-serif' }}>
      {(['Info', 'Error', 'Warning', 'Success', 'Inactive'] as const).map((type) => (
        <div key={type} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px' }}>
          <Tags typeVariant={type} text="Tags" />
          <span style={{ fontSize: '11px', color: '#737373' }}>Type={type}</span>
        </div>
      ))}
    </div>
  ),
};

/* ── Info ───────────────────────────────────────────────── */
export const Info: Story = {
  args: { typeVariant: 'Info', text: 'Tags' },
};

/* ── Error ──────────────────────────────────────────────── */
export const Error: Story = {
  args: { typeVariant: 'Error', text: 'Tags' },
};

/* ── Warning ────────────────────────────────────────────── */
export const Warning: Story = {
  args: { typeVariant: 'Warning', text: 'Tags' },
};

/* ── Success ────────────────────────────────────────────── */
export const Success: Story = {
  args: { typeVariant: 'Success', text: 'Tags' },
};

/* ── Inactive ───────────────────────────────────────────── */
export const Inactive: Story = {
  args: { typeVariant: 'Inactive', text: 'Tags' },
};

/* ── With Custom Text ───────────────────────────────────── */
export const WithCustomText: Story = {
  name: 'With Custom Text',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', padding: '24px' }}>
      <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
        <Tags typeVariant="Info" text="Active" />
        <Tags typeVariant="Success" text="Delivered" />
        <Tags typeVariant="Warning" text="Delayed" />
        <Tags typeVariant="Error" text="Failed" />
        <Tags typeVariant="Inactive" text="Offline" />
      </div>
    </div>
  ),
};
