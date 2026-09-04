import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

/* ============================================================
   Figma Node: 76:8070 / Component Set: 78:8819 & 77:8465
   Stepper Component — Pixel-perfect implementation
   Single consolidated file: component + styles + stories
   ============================================================ */

export type StepperState =
  | 'Completed'  /* Green  #22C55E — Tick icon, green loader line */
  | 'Reached'    /* Blue   #1D4ED8 — Clock icon, blue loader line (Figma: Pending) */
  | 'Error'      /* Red    #DC2626 — Warning icon, red loader line */
  | 'Default'    /* Gray   #E5E5E5 — Empty circle, gray loader line */
  | 'Disabled';  /* Muted  #D4D4D4 — Empty circle, muted, faded text */

export type StepperTrackType = 'Progress Track' | 'End Track';

export interface StepperStepData {
  /** Figma TEXT layer: "Location" — 12px Lufga Regular, #171717 (disabled: #D4D4D4) */
  location: string;
  /** Figma TEXT layer: "9:00 AM" — 8px Lufga Regular, #A3A3A3 (disabled: #D4D4D4) */
  time: string;
  state?: StepperState;
}

export interface StepperItemProps {
  state?: StepperState;
  type?: StepperTrackType;
  location?: string;
  time?: string;
}

/* ----------------------------------------------------------
   Styles — injected once into <head>, no external .css import
   All values traced directly from Figma layers & bound variables.
   ---------------------------------------------------------- */
const STEPPER_CSS = `
.uedp-stepper-timeline {
  display: flex;
  flex-direction: column;
  font-family: var(--uedp-font-family, 'Lufga', sans-serif);
  width: fit-content;
}

.uedp-stepper-item {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 12px;          /* var(VariableID:1:589) */
  padding: 0;         /* var(VariableID:1:607) */
  box-sizing: border-box;
}

.uedp-stepper-item--progress { min-height: 76px; }
.uedp-stepper-item--end      { min-height: 31px; }

.uedp-stepper-left {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 34px;
  flex-shrink: 0;
}

.uedp-stepper-circle {
  width: 31px;
  height: 31px;
  border-radius: 9999px;           /* --uedp-rounded-full */
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  box-sizing: border-box;
  transition: background 0.2s ease;
}

.uedp-stepper-circle--completed { background-color: #22C55E; }
.uedp-stepper-circle--reached   { background-color: #1D4ED8; }
.uedp-stepper-circle--error     { background-color: #DC2626; }
.uedp-stepper-circle--default   { background-color: #E5E5E5; }
.uedp-stepper-circle--disabled  { background-color: #D4D4D4; border: 1px solid #D4D4D4; }

.uedp-stepper-line {
  width: 2px;
  height: 48px;
  border-radius: 1px;
  margin-top: 2px;
}

.uedp-stepper-line--completed { background-color: #22C55E; }
.uedp-stepper-line--reached   { background-color: #1D4ED8; }
.uedp-stepper-line--error     { background-color: #DC2626; }
.uedp-stepper-line--default   { background-color: #E5E5E5; }
.uedp-stepper-line--disabled  { background-color: #D4D4D4; }

.uedp-stepper-content {
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding-top: 4px;
}

.uedp-stepper-location {
  font-family: var(--uedp-font-family, 'Lufga', sans-serif);
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
  color: #171717;      /* VariableID:1:373 */
  white-space: nowrap;
}

.uedp-stepper-location--disabled { color: #D4D4D4; }

.uedp-stepper-time {
  font-family: var(--uedp-font-family, 'Lufga', sans-serif);
  font-size: 8px;
  font-weight: 400;
  line-height: 10px;
  color: #A3A3A3;      /* VariableID:1:368 */
  white-space: nowrap;
}

.uedp-stepper-time--disabled { color: #D4D4D4; }
`;

let stylesInjected = false;
function injectStepperStyles() {
  if (stylesInjected || typeof document === 'undefined') return;
  if (document.getElementById('uedp-stepper-styles')) { stylesInjected = true; return; }
  const style = document.createElement('style');
  style.id = 'uedp-stepper-styles';
  style.textContent = STEPPER_CSS;
  document.head.appendChild(style);
  stylesInjected = true;
}

/* ---------- individual Stepper step ---------- */
export const StepperItem: React.FC<StepperItemProps> = ({
  state = 'Default',
  type = 'Progress Track',
  location = 'Location',
  time = '9:00 AM',
}) => {
  injectStepperStyles();
  const isEnd = type === 'End Track';
  const s = state.toLowerCase();

  const renderIndicatorContent = () => {
    switch (state) {
      /* Tick — "Group > Vector" from Figma, white stroke on green fill */
      case 'Completed':
        return (
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <polyline
              points="2.5,7 5.5,10 11.5,4"
              stroke="#fff"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        );
      /* Clock — two vectors forming clock face, white on blue fill */
      case 'Reached':
        return (
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <circle cx="7" cy="7" r="6" stroke="#fff" strokeWidth="1.6"/>
            <polyline points="7,4 7,7.5 9,9" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        );
      /* Warning 2 — circle with !, white on red fill */
      case 'Error':
        return (
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <circle cx="7" cy="7" r="6" stroke="#fff" strokeWidth="1.6"/>
            <line x1="7" y1="4.5" x2="7" y2="7.5" stroke="#fff" strokeWidth="1.8" strokeLinecap="round"/>
            <circle cx="7" cy="9.5" r="0.8" fill="#fff"/>
          </svg>
        );
      /* Default / Disabled — empty circle, Figma has no child icon */
      default:
        return null;
    }
  };

  return (
    <div className={`uedp-stepper-item uedp-stepper-item--${s} uedp-stepper-item--${isEnd ? 'end' : 'progress'}`}>

      {/* LEFT COLUMN — Indicator + Loader line */}
      <div className="uedp-stepper-left">

        {/* Stepper indicator — 31×31px, border-radius 9999px */}
        <div className={`uedp-stepper-circle uedp-stepper-circle--${s}`}>
          {renderIndicatorContent()}
        </div>

        {/* Loader — 2px wide vertical line, 48px tall, same color as indicator */}
        {!isEnd && <div className={`uedp-stepper-line uedp-stepper-line--${s}`} />}
      </div>

      {/* RIGHT COLUMN — Location and time frame */}
      <div className="uedp-stepper-content">
        {/* Figma TEXT "Location" — 12px Lufga 400, fill var(--neutral-900 / #171717), disabled: #D4D4D4 */}
        <span className={`uedp-stepper-location uedp-stepper-location--${s}`}>
          {location}
        </span>
        {/* Figma TEXT "9:00 AM" — 8px Lufga 400, fill var(--neutral-400 / #A3A3A3), disabled: #D4D4D4 */}
        <span className={`uedp-stepper-time uedp-stepper-time--${s}`}>
          {time}
        </span>
      </div>

    </div>
  );
};


/* ---------- composed Stepper timeline ---------- */
export interface StepperProps {
  /** Figma Progress variant ("Step 1"…"Step 7") — drives automatic state assignment */
  progress?: 'Step 1' | 'Step 2' | 'Step 3' | 'Step 4' | 'Step 5' | 'Step 6' | 'Step 7';
  /** Override individual steps with custom data + explicit states */
  steps?: StepperStepData[];
  className?: string;
}

export const Stepper: React.FC<StepperProps> = ({
  progress = 'Step 3',
  steps,
  className = '',
}) => {
  const activeStep = parseInt(progress.replace('Step ', ''), 10);

  const defaultSteps: StepperStepData[] = [
    { location: 'Order Picked Up', time: '08:00 AM' },
    { location: 'Warehouse Checked In', time: '09:15 AM' },
    { location: 'Sorting & Labelling', time: '10:30 AM' },
    { location: 'Out for Delivery', time: '01:00 PM' },
    { location: 'Delivered to Customer', time: '03:30 PM' },
  ];

  const resolvedSteps = steps ?? defaultSteps.map((step, i) => ({
    ...step,
    state: i + 1 < activeStep
      ? 'Completed'
      : i + 1 === activeStep
        ? 'Reached'
        : 'Default' as StepperState,
  }));

  return (
    <div className={`uedp-stepper-timeline ${className}`}>
      {resolvedSteps.map((step, i) => (
        <StepperItem
          key={i}
          state={step.state}
          type={i === resolvedSteps.length - 1 ? 'End Track' : 'Progress Track'}
          location={step.location}
          time={step.time}
        />
      ))}
    </div>
  );
};

/* ================================================================
   STORIES
   ================================================================ */

/* ================================================================
   Every step (1-5) is individually editable via its own State,
   Location and Time controls in the Controls panel.
   ================================================================ */
type EditableStepperArgs = {
  stepCount: 1 | 2 | 3 | 4 | 5;
  step1State: StepperState; step1Location: string; step1Time: string;
  step2State: StepperState; step2Location: string; step2Time: string;
  step3State: StepperState; step3Location: string; step3Time: string;
  step4State: StepperState; step4Location: string; step4Time: string;
  step5State: StepperState; step5Location: string; step5Time: string;
};

const stepStateArgType = {
  control: 'select',
  options: ['Completed', 'Reached', 'Error', 'Default', 'Disabled'],
} as const;

const meta: Meta<EditableStepperArgs> = {
  title: 'Feedback/Stepper',
  excludeStories: ['StepperItem', 'Stepper'],
  parameters: {
    docs: {
      description: {
        component: 'Pixel-perfect Stepper rebuilt from Figma Node 76:8070 / 78:8819. Indicator circle 31x31px, Loader line 2x48px, Location text 12px Lufga, Time text 8px Lufga. States: Completed (green), Reached (blue), Error (red), Default (gray), Disabled (muted). Every one of the 5 steps is individually editable below.'
      }
    }
  },
  argTypes: {
    stepCount: {
      control: 'select',
      options: [1, 2, 3, 4, 5],
      description: 'How many steps to show (max 5)'
    },
    step1State: { ...stepStateArgType, description: 'Step 1 status' },
    step1Location: { control: 'text', description: 'Step 1 location text' },
    step1Time: { control: 'text', description: 'Step 1 time text' },
    step2State: { ...stepStateArgType, description: 'Step 2 status' },
    step2Location: { control: 'text', description: 'Step 2 location text' },
    step2Time: { control: 'text', description: 'Step 2 time text' },
    step3State: { ...stepStateArgType, description: 'Step 3 status' },
    step3Location: { control: 'text', description: 'Step 3 location text' },
    step3Time: { control: 'text', description: 'Step 3 time text' },
    step4State: { ...stepStateArgType, description: 'Step 4 status' },
    step4Location: { control: 'text', description: 'Step 4 location text' },
    step4Time: { control: 'text', description: 'Step 4 time text' },
    step5State: { ...stepStateArgType, description: 'Step 5 status' },
    step5Location: { control: 'text', description: 'Step 5 location text' },
    step5Time: { control: 'text', description: 'Step 5 time text' },
  },
  args: {
    stepCount: 5,
    step1State: 'Completed', step1Location: 'Order Picked Up', step1Time: '08:00 AM',
    step2State: 'Completed', step2Location: 'Warehouse Checked In', step2Time: '09:15 AM',
    step3State: 'Reached', step3Location: 'Sorting & Labelling', step3Time: '10:30 AM',
    step4State: 'Default', step4Location: 'Out for Delivery', step4Time: '01:00 PM',
    step5State: 'Default', step5Location: 'Delivered to Customer', step5Time: '03:30 PM',
  },
  render: (args) => (
    <div style={{ padding: '24px', background: '#fff', borderRadius: '12px', border: '1px solid #E2E8F0', display: 'inline-block' }}>
      <Stepper
        steps={[
          { location: args.step1Location, time: args.step1Time, state: args.step1State },
          { location: args.step2Location, time: args.step2Time, state: args.step2State },
          { location: args.step3Location, time: args.step3Time, state: args.step3State },
          { location: args.step4Location, time: args.step4Time, state: args.step4State },
          { location: args.step5Location, time: args.step5Time, state: args.step5State },
        ].slice(0, args.stepCount)}
      />
    </div>
  )
};

export default meta;
type Story = StoryObj<EditableStepperArgs>;

export const Default: Story = {};
