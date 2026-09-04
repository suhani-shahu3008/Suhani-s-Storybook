import type { Meta, StoryObj } from '@storybook/react';
import { Checkboxes } from './Checkboxes';

/* ============================================================
   Figma Node: 57:7420 — Checkboxes Component Set
   20 Variants: Type(Primary,Error) × Checked(True,False) × State(Enabled,Hovered,Focused,Pressed,Disabled)
   ============================================================ */

const meta: Meta<typeof Checkboxes> = {
  title: 'Inputs/Checkboxes',
  component: Checkboxes,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
**Figma Node: 57:7420** — Component Set: Checkboxes

20 variants across:
- **Type**: Primary | Error
- **Checked**: True | False
- **State**: Enabled | Hovered | Focused | Pressed | Disabled

Layer structure per variant:
\`Outer 48×48px → state-layer 40×40px (r:100) → container 18×18px (r:2, stroke 2px) → check_small 24×24px (icon 12×9.4px)\`
        `,
      },
    },
  },
  argTypes: {
    typeVariant: {
      control: { type: 'radio' },
      options: ['Primary', 'Error'],
      description: 'Figma Variant: Type',
    },
    checked: {
      control: { type: 'boolean' },
      description: 'Figma Variant: Checked=True | False',
    },
    state: {
      control: { type: 'radio' },
      options: ['Enabled', 'Hovered', 'Focused', 'Pressed', 'Disabled'],
      description: 'Figma Variant: State',
    },
    label: {
      control: { type: 'text' },
      description: 'Optional accessible label',
    },
  },
  args: {
    typeVariant: 'Primary',
    checked: true,
    state: 'Enabled',
  },
};

export default meta;
type Story = StoryObj<typeof Checkboxes>;

/* ── Default playground ─────────────────────────────── */
export const Playground: Story = {
  args: {
    typeVariant: 'Primary',
    checked: true,
    state: 'Enabled',
    label: 'Checkbox label',
  },
};

/* ── All 20 Variants Matrix ─────────────────────────── */
export const AllVariantsMatrix: Story = {
  name: 'All Variants Matrix (20)',
  render: () => {
    const types = ['Primary', 'Error'] as const;
    const checkedStates = [true, false] as const;
    const states = ['Enabled', 'Hovered', 'Focused', 'Pressed', 'Disabled'] as const;

    return (
      <div style={{ fontFamily: 'Lufga, sans-serif', padding: '24px' }}>
        {types.map((type) =>
          checkedStates.map((chk) => (
            <div key={`${type}-${chk}`} style={{ marginBottom: '32px' }}>
              <h3 style={{ fontSize: '14px', fontWeight: 500, color: '#171717', marginBottom: '12px', marginTop: 0 }}>
                Type={type} / Checked={chk ? 'True' : 'False'}
              </h3>
              <div style={{ display: 'flex', flexDirection: 'row', gap: '8px', alignItems: 'center', flexWrap: 'wrap' }}>
                {states.map((st) => (
                  <div key={st} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px' }}>
                    <Checkboxes
                      typeVariant={type}
                      checked={chk}
                      state={st}
                    />
                    <span style={{ fontSize: '11px', color: '#737373' }}>{st}</span>
                  </div>
                ))}
              </div>
            </div>
          ))
        )}
      </div>
    );
  },
};

/* ── Primary / Checked=True — all states ────────────── */
export const PrimaryCheckedTrue: Story = {
  name: 'Primary / Checked=True — All States',
  render: () => {
    const states = ['Enabled', 'Hovered', 'Focused', 'Pressed', 'Disabled'] as const;
    return (
      <div style={{ display: 'flex', gap: '16px', alignItems: 'center', padding: '24px', flexWrap: 'wrap' }}>
        {states.map((st) => (
          <div key={st} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px' }}>
            <Checkboxes typeVariant="Primary" checked={true} state={st} />
            <span style={{ fontSize: '11px', color: '#737373', fontFamily: 'Lufga, sans-serif' }}>{st}</span>
          </div>
        ))}
      </div>
    );
  },
};

/* ── Primary / Checked=False — all states ───────────── */
export const PrimaryCheckedFalse: Story = {
  name: 'Primary / Checked=False — All States',
  render: () => {
    const states = ['Enabled', 'Hovered', 'Focused', 'Pressed', 'Disabled'] as const;
    return (
      <div style={{ display: 'flex', gap: '16px', alignItems: 'center', padding: '24px', flexWrap: 'wrap' }}>
        {states.map((st) => (
          <div key={st} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px' }}>
            <Checkboxes typeVariant="Primary" checked={false} state={st} />
            <span style={{ fontSize: '11px', color: '#737373', fontFamily: 'Lufga, sans-serif' }}>{st}</span>
          </div>
        ))}
      </div>
    );
  },
};

/* ── Error / Checked=True — all states ─────────────── */
export const ErrorCheckedTrue: Story = {
  name: 'Error / Checked=True — All States',
  render: () => {
    const states = ['Enabled', 'Hovered', 'Focused', 'Pressed', 'Disabled'] as const;
    return (
      <div style={{ display: 'flex', gap: '16px', alignItems: 'center', padding: '24px', flexWrap: 'wrap' }}>
        {states.map((st) => (
          <div key={st} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px' }}>
            <Checkboxes typeVariant="Error" checked={true} state={st} />
            <span style={{ fontSize: '11px', color: '#737373', fontFamily: 'Lufga, sans-serif' }}>{st}</span>
          </div>
        ))}
      </div>
    );
  },
};

/* ── Error / Checked=False — all states ─────────────── */
export const ErrorCheckedFalse: Story = {
  name: 'Error / Checked=False — All States',
  render: () => {
    const states = ['Enabled', 'Hovered', 'Focused', 'Pressed', 'Disabled'] as const;
    return (
      <div style={{ display: 'flex', gap: '16px', alignItems: 'center', padding: '24px', flexWrap: 'wrap' }}>
        {states.map((st) => (
          <div key={st} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px' }}>
            <Checkboxes typeVariant="Error" checked={false} state={st} />
            <span style={{ fontSize: '11px', color: '#737373', fontFamily: 'Lufga, sans-serif' }}>{st}</span>
          </div>
        ))}
      </div>
    );
  },
};

/* ── With label ─────────────────────────────────────── */
export const WithLabel: Story = {
  name: 'With Label',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', padding: '24px' }}>
      <Checkboxes typeVariant="Primary" checked={true} state="Enabled" label="Remember me" />
      <Checkboxes typeVariant="Primary" checked={false} state="Enabled" label="I agree to terms" />
      <Checkboxes typeVariant="Error" checked={false} state="Enabled" label="Required field (error)" />
      <Checkboxes typeVariant="Primary" checked={false} state="Disabled" label="Disabled option" />
    </div>
  ),
};
