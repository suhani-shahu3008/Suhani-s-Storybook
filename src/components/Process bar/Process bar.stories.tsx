import type { Meta, StoryObj } from '@storybook/react';
import { ProcessBar } from './Process bar';

const meta: Meta<typeof ProcessBar> = {
  title: 'Feedback/Process bar',
  component: ProcessBar,
  parameters: {
    docs: {
      description: {
        component: 'Process bar component extracted directly from Figma Node ID 71:7902. Contains Header frame with Process label and Percentage text, and Track frame with Active Track fill.'
      }
    }
  },
  argTypes: {
    process: {
      control: 'select',
      options: ['0%', '10%', '20%', '30%', '40%', '50%', '60%', '70%', '80%', '90%', '100%'],
      description: 'Figma component set variant: Process'
    },
    label: {
      control: 'text',
      description: 'Header > Process text node content'
    },
    showPercentage: {
      control: 'boolean',
      description: 'Whether to display the right percentage text'
    }
  }
};

export default meta;
type Story = StoryObj<typeof ProcessBar>;

export const Default: Story = {
  args: {
    process: '60%',
    label: 'Process',
    showPercentage: true
  }
};

export const ZeroPercent: Story = {
  args: {
    process: '0%',
    label: 'Process'
  }
};

export const FiftyPercent: Story = {
  args: {
    process: '50%',
    label: 'Process'
  }
};

export const HundredPercent: Story = {
  args: {
    process: '100%',
    label: 'Process'
  }
};

export const AllFigmaVariants: Story = {
  render: () => {
    const variants: ('0%' | '10%' | '20%' | '30%' | '40%' | '50%' | '60%' | '70%' | '80%' | '90%' | '100%')[] = [
      '0%', '10%', '20%', '30%', '40%', '50%', '60%', '70%', '80%', '90%', '100%'
    ];

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', maxWidth: '640px', padding: '24px', background: '#FFFFFF', borderRadius: '16px', border: '1px solid #E2E8F0' }}>
        <h3 style={{ margin: '0 0 8px 0', fontFamily: 'var(--uedp-font-family)', fontSize: '18px', fontWeight: 600, color: 'var(--uedp-slate-900)' }}>
          Figma Node ID: 71:7902 (All 11 Variants)
        </h3>
        {variants.map(v => (
          <ProcessBar key={v} process={v} label="Process" />
        ))}
      </div>
    );
  }
};
