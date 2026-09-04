import type { Meta, StoryObj } from '@storybook/react';
import { Iconography, ICONOGRAPHY_NAMES } from './Iconography';

const meta: Meta<typeof Iconography> = {
  title: 'Iconography/Iconography',
  component: Iconography,
  parameters: {
    docs: {
      description: {
        component: 'Icon library sourced from the Figma iconography sheet, named per the Uedp-5 Design System icon export. 51 icons, selectable via the `name` property.',
      },
    },
  },
  argTypes: {
    name: { control: 'select', options: ICONOGRAPHY_NAMES },
    size: { control: 'number' },
    color: { control: 'color' },
  },
};

export default meta;
type Story = StoryObj<typeof Iconography>;

export const Playground: Story = {
  args: {
    name: 'notification',
    size: 24,
    color: '#171717',
  },
};

export const AllIcons: Story = {
  name: 'All Icons',
  render: () => (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(8, 1fr)',
        gap: '24px',
        padding: '32px',
        background: '#FFFFFF',
      }}
    >
      {ICONOGRAPHY_NAMES.map((name) => (
        <div
          key={name}
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '8px',
            fontFamily: 'var(--uedp-font-family)',
          }}
        >
          <Iconography name={name} size={28} color="#171717" />
          <span style={{ fontSize: '11px', color: '#64748B', textAlign: 'center' }}>{name}</span>
        </div>
      ))}
    </div>
  ),
};
