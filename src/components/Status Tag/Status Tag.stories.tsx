import type { Meta, StoryObj } from '@storybook/react';
import { StatusTag } from './Status Tag';

/* ============================================================
   Figma Node: 66:7719 — Status Tag Component Set
   5 Variants: Type = Info | Error | Warning | Success | Inactive
   Pure shape component — 50×22px pill, no text children
   ============================================================ */

const meta: Meta<typeof StatusTag> = {
  title: 'Data Display/Status Tag',
  component: StatusTag,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
**Figma Node: 66:7719** — Component Set: Status Tag

5 variants across **Type**: Info | Error | Warning | Success | Inactive

Pure shape component — no text children. Used as a status indicator pill in Table Rows.

**Dimensions**: \`50×22px\`, \`border-radius: 9999px\` (VariableID:1:582), no padding, no strokes.
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
  },
  args: {
    typeVariant: 'Info',
  },
};

export default meta;
type Story = StoryObj<typeof StatusTag>;

/* ── Default Playground ─────────────────────────────────── */
export const Playground: Story = {
  args: {
    typeVariant: 'Info',
  },
};

/* ── All 5 Variants ─────────────────────────────────────── */
export const AllVariants: Story = {
  name: 'All Variants (5)',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'row', gap: '12px', alignItems: 'center', padding: '24px', flexWrap: 'wrap', fontFamily: 'Lufga, sans-serif' }}>
      {(['Info', 'Error', 'Warning', 'Success', 'Inactive'] as const).map((type) => (
        <div key={type} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px' }}>
          <StatusTag typeVariant={type} />
          <span style={{ fontSize: '11px', color: '#737373' }}>Type={type}</span>
        </div>
      ))}
    </div>
  ),
};

/* ── Info ───────────────────────────────────────────────── */
export const Info: Story = {
  args: { typeVariant: 'Info' },
};

/* ── Error ──────────────────────────────────────────────── */
export const Error: Story = {
  args: { typeVariant: 'Error' },
};

/* ── Warning ────────────────────────────────────────────── */
export const Warning: Story = {
  args: { typeVariant: 'Warning' },
};

/* ── Success ────────────────────────────────────────────── */
export const Success: Story = {
  args: { typeVariant: 'Success' },
};

/* ── Inactive ───────────────────────────────────────────── */
export const Inactive: Story = {
  args: { typeVariant: 'Inactive' },
};
