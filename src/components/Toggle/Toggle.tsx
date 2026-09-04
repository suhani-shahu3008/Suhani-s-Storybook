import React from 'react';
import './Toggle.css';

/* ============================================================
   Figma Node ID: 56:6962  —  Component Set: "Toggle"
   10 Variants: Type (Primary, Success) × State (Enabled, Hovered, Focused, Pressed, Disabled)
   Dimensions: Track: 52×32px (r:100), Thumb: 24×24px (Pressed: 28×28px, r:24)
   Padding: T2 R4 B2 L4 (Pressed: T2 R2 B2 L2)
   Colors:
     - Primary:
         * Enabled: Track #1D4ED8 (blue-700), Thumb #FFFFFF (24px)
         * Hovered: Track #1D4ED8, Thumb #DBEAFE (blue-100, 24px), Halo rgba(29,78,216,0.12)
         * Focused: Track #1D4ED8, Thumb #DBEAFE (24px), Halo rgba(29,78,216,0.15)
         * Pressed: Track #1D4ED8, Thumb #DBEAFE (28px), Halo rgba(29,78,216,0.2)
         * Disabled: Track #E5E5E5, Thumb #FAFAFA (24px)
     - Success:
         * Enabled: Track #22C55E (green-500), Thumb #FFFFFF (24px)
         * Hovered: Track #22C55E, Thumb #DCFCE7 (green-100, 24px), Halo rgba(34,197,94,0.12)
         * Focused: Track #22C55E, Thumb #DCFCE7 (24px), Halo rgba(34,197,94,0.15)
         * Pressed: Track #22C55E, Thumb #DCFCE7 (28px), Halo rgba(34,197,94,0.2)
         * Disabled: Track #E5E5E5, Thumb #FAFAFA (24px)
   Zero additions — every property extracted A to Z from Figma
   ============================================================ */

export type ToggleType = 'Primary' | 'Success';
export type ToggleState = 'Enabled' | 'Hovered' | 'Focused' | 'Pressed' | 'Disabled';

export interface ToggleProps {
  /** Figma Variant: Type=Primary | Type=Success */
  typeVariant?: ToggleType;
  /** Figma Variant: State=Enabled | Hovered | Focused | Pressed | Disabled */
  state?: ToggleState;
  /** Checked / Active status — default: true (Figma defaults to active) */
  checked?: boolean;
  /** Optional accessible label text */
  label?: string;
  name?: string;
  onChange?: (checked: boolean) => void;
  className?: string;
}

export const Toggle: React.FC<ToggleProps> = ({
  typeVariant = 'Primary',
  state = 'Enabled',
  checked = true,
  label,
  name,
  onChange,
  className = '',
}) => {
  const isDisabled = state === 'Disabled';
  const isChecked = checked;

  const handleClick = () => {
    if (!isDisabled) {
      onChange?.(!checked);
    }
  };

  return (
    <label
      className={`uedp-toggle-wrapper ${label ? 'uedp-toggle-wrapper--with-label' : ''} ${className}`}
    >
      <div
        className={`uedp-toggle uedp-toggle--type-${typeVariant.toLowerCase()} uedp-toggle--state-${state.toLowerCase()} ${isChecked ? 'uedp-toggle--checked' : 'uedp-toggle--unchecked'}`}
        onClick={handleClick}
        role="switch"
        aria-checked={isChecked}
        aria-disabled={isDisabled}
        tabIndex={isDisabled ? -1 : 0}
      >
        {/* Hidden native checkbox for accessibility & forms */}
        <input
          type="checkbox"
          name={name}
          checked={isChecked}
          disabled={isDisabled}
          onChange={(e) => onChange?.(e.target.checked)}
          className="uedp-toggle__native-input"
        />

        {/* Track (52×32px, r:100) */}
        <div className="uedp-toggle__track">
          {/* Thumb Container with State Layer Halo */}
          <div className="uedp-toggle__thumb-container">
            <div className="uedp-toggle__halo" />
            <div className="uedp-toggle__thumb" />
          </div>
        </div>
      </div>

      {label && <span className="uedp-toggle__label-text">{label}</span>}
    </label>
  );
};
