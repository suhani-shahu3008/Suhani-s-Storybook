import React from 'react';
import './Radio buttons.css';

/* ============================================================
   Figma Node ID: 46:5914 / 46:6245  —  Component Set: "Radio buttons"
   10 Variants: State (Enabled, Hovered, Focused, Pressed, Disabled) × Selected (False, True)
   Dimensions: Outer: 48×48px, State layer: 40×40px (r:100), Icon: 24×24px (vector: 20×20px)
   Colors:
     - Unselected (Selected=False):
         * Enabled: #737373
         * Hovered: #404040, state layer #F5F5F5
         * Focused: #404040, state layer #E5E5E5
         * Pressed: #171717, state layer #EFF6FF
         * Disabled: #A3A3A3
     - Selected (Selected=True):
         * Enabled: #1D4ED8
         * Hovered: #1D4ED8, state layer #EFF6FF
         * Focused: #1D4ED8, state layer #DBEAFE
         * Pressed: #1D4ED8, state layer #DBEAFE
         * Disabled: #A3A3A3
   Zero additions — every property extracted A to Z from Figma
   ============================================================ */

export type RadioButtonState = 'Enabled' | 'Hovered' | 'Focused' | 'Pressed' | 'Disabled';

export interface RadioButtonsProps {
  /** Figma Variant: Selected=True | Selected=False */
  selected?: boolean;
  /** Figma Variant: State=Enabled | Hovered | Focused | Pressed | Disabled */
  state?: RadioButtonState;
  /** Optional accessible label or change handler */
  label?: string;
  name?: string;
  value?: string;
  onChange?: (selected: boolean) => void;
  className?: string;
}

export const RadioButtons: React.FC<RadioButtonsProps> = ({
  selected = false,
  state = 'Enabled',
  label,
  name,
  value,
  onChange,
  className = '',
}) => {
  const isDisabled = state === 'Disabled';
  const isSelected = selected;

  const handleClick = () => {
    if (!isDisabled) {
      onChange?.(!selected);
    }
  };

  return (
    <label
      className={`uedp-radio-wrapper ${label ? 'uedp-radio-wrapper--with-label' : ''} ${className}`}
    >
      <div
        className={`uedp-radio uedp-radio--state-${state.toLowerCase()} uedp-radio--${isSelected ? 'selected' : 'unselected'}`}
        onClick={handleClick}
        role="radio"
        aria-checked={isSelected}
        aria-disabled={isDisabled}
        tabIndex={isDisabled ? -1 : 0}
      >
        {/* Hidden native radio for accessibility & forms */}
        <input
          type="radio"
          name={name}
          value={value}
          checked={isSelected}
          disabled={isDisabled}
          onChange={(e) => onChange?.(e.target.checked)}
          className="uedp-radio__native-input"
        />

        {/* State Layer (40×40px, r:100, pad: 8px) */}
        <div className="uedp-radio__state-layer">
          {/* Vector Icon (20×20px inside 24×24px icon frame) */}
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            className="uedp-radio__svg"
          >
            {/* Outer circle (20×20px, stroke: 2px) */}
            <circle
              cx="10"
              cy="10"
              r="9"
              className="uedp-radio__circle"
              strokeWidth="2"
            />
            {/* Inner dot when Selected=True (10×10px, fill) */}
            {isSelected && (
              <circle
                cx="10"
                cy="10"
                r="5"
                className="uedp-radio__dot"
              />
            )}
          </svg>
        </div>
      </div>

      {label && <span className="uedp-radio__label-text">{label}</span>}
    </label>
  );
};
