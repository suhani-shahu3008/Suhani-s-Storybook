import React from 'react';
import './Checkboxes.css';

/* ============================================================
   Figma Node ID: 57:7420  —  Component Set: "Checkboxes"
   20 Variants: Type (Primary, Error) × Checked (True, False) × State (Enabled, Hovered, Focused, Pressed, Disabled)

   LAYER STRUCTURE (per variant):
   ─ Outer touch target: 48×48px, layout: VERTICAL, padding: 4 4 4 4
     └─ state-layer FRAME: 40×40px, r:100 (circular), no border
        ├─ container RECTANGLE: 18×18px, r:2, strokeWeight:2
        └─ check_small INSTANCE (if Checked=True or Disabled Checked): 24×24px (absolute)
           └─ icon VECTOR: 12×9.4px, fill: #FFFFFF (VariableID:1:330)

   COLOR TABLE (container RECTANGLE):
   ─ Primary / Checked=True
     * Enabled:  fill #1D4ED8 (VariableID:1:503)
     * Hovered:  fill #1D4ED8  + halo rgba(29,78,216,0.08)
     * Focused:  fill #1D4ED8  + halo rgba(29,78,216,0.10)
     * Pressed:  fill #1D4ED8  + halo rgba(29,78,216,0.10)
     * Disabled: fill #A3A3A3 (VariableID:1:368)  (= grey-400)

   ─ Primary / Checked=False
     * Enabled:  stroke #404040 (VariableID:1:372)
     * Hovered:  stroke #404040  + halo rgba(29,78,216,0.08)
     * Focused:  stroke #404040  + halo rgba(29,78,216,0.10)
     * Pressed:  stroke #404040  + halo rgba(29,78,216,0.10)
     * Disabled: stroke #A3A3A3 (VariableID:1:368)

   ─ Error / Checked=True
     * Enabled:  fill #DC2626 (VariableID:1:392)
     * Hovered:  fill #DC2626  + halo rgba(220,38,38,0.08)
     * Focused:  fill #DC2626  + halo rgba(220,38,38,0.10)
     * Pressed:  fill #DC2626  + halo rgba(220,38,38,0.10)
     * Disabled: fill #A3A3A3

   ─ Error / Checked=False
     * Enabled:  stroke #DC2626 (VariableID:1:392)
     * Hovered:  stroke #DC2626  + halo rgba(220,38,38,0.08)
     * Focused:  stroke #DC2626  + halo rgba(220,38,38,0.10)
     * Pressed:  stroke #DC2626  + halo rgba(220,38,38,0.10)
     * Disabled: stroke #A3A3A3

   Ripple VECTOR (Pressed only): 50×35px, fill rgba(brand,0.80)
   ============================================================ */

export type CheckboxType = 'Primary' | 'Error';
export type CheckboxState = 'Enabled' | 'Hovered' | 'Focused' | 'Pressed' | 'Disabled';

export interface CheckboxesProps {
  /** Figma Variant: Type=Primary | Type=Error */
  typeVariant?: CheckboxType;
  /** Figma Variant: Checked=True | Checked=False */
  checked?: boolean;
  /** Figma Variant: State */
  state?: CheckboxState;
  /** Optional accessible label */
  label?: string;
  name?: string;
  onChange?: (checked: boolean) => void;
  className?: string;
}

/** Check SVG — matches Figma "check_small" INSTANCE / icon VECTOR (12×9.4px) */
const CheckIcon: React.FC = () => (
  <svg
    className="uedp-checkbox__check-icon"
    width="12"
    height="10"
    viewBox="0 0 12 10"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Path approximates the checkmark VECTOR in Figma (12×9.4px bounding box) */}
    <path
      d="M1 5L4.5 8.5L11 1.5"
      stroke="#FFFFFF"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const Checkboxes: React.FC<CheckboxesProps> = ({
  typeVariant = 'Primary',
  checked = true,
  state = 'Enabled',
  label,
  name,
  onChange,
  className = '',
}) => {
  const isDisabled = state === 'Disabled';

  const handleClick = () => {
    if (!isDisabled) {
      onChange?.(!checked);
    }
  };

  const type = typeVariant.toLowerCase();   // 'primary' | 'error'
  const st = state.toLowerCase();           // 'enabled' | 'hovered' | 'focused' | 'pressed' | 'disabled'
  const chk = checked ? 'checked' : 'unchecked';

  return (
    <label
      className={`uedp-checkbox-wrapper ${label ? 'uedp-checkbox-wrapper--with-label' : ''} ${className}`}
    >
      {/* Outer touch target: 48×48px, padding: 4 4 4 4 */}
      <div
        className={`uedp-checkbox uedp-checkbox--type-${type} uedp-checkbox--${chk} uedp-checkbox--state-${st}`}
        onClick={handleClick}
        role="checkbox"
        aria-checked={checked}
        aria-disabled={isDisabled}
        tabIndex={isDisabled ? -1 : 0}
        onKeyDown={(e) => {
          if (!isDisabled && (e.key === ' ' || e.key === 'Enter')) {
            e.preventDefault();
            onChange?.(!checked);
          }
        }}
      >
        {/* Hidden native input for a11y & forms */}
        <input
          type="checkbox"
          name={name}
          checked={checked}
          disabled={isDisabled}
          onChange={(e) => onChange?.(e.target.checked)}
          className="uedp-checkbox__native-input"
          tabIndex={-1}
        />

        {/* state-layer: 40×40px, r:100, clipsContent:true — carries halo + ripple */}
        <div className="uedp-checkbox__state-layer">
          {/* container: 18×18px, r:2, strokeWeight:2 — the visible box */}
          <div className="uedp-checkbox__container">
            {/* check_small icon — only rendered when Checked=True */}
            {checked && (
              <div className="uedp-checkbox__check-wrapper">
                <CheckIcon />
              </div>
            )}
          </div>

          {/* Ripple VECTOR — Figma: 50×35px, position:ABSOLUTE, fill opacity:0.80 — Pressed state only */}
          {state === 'Pressed' && (
            <div className="uedp-checkbox__ripple" />
          )}
        </div>
      </div>

      {label && (
        <span className="uedp-checkbox__label-text">{label}</span>
      )}
    </label>
  );
};
