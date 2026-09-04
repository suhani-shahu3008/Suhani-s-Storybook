import React from 'react';
import './Text field.css';

/* ============================================================
   Figma Node ID: 85:10177  —  Component Set: "Text field"
   8 States: Default | Hovered | Focused | Pressed | Typing | Filled | Error | Disabled
   Dimensions: 1430×247px (or hug)
   Structure:
     - Label Text: Lufga 24px w400, color #171717 (#A3A3A3 when Disabled)
     - Text field with supporting text (gap: 12px, vertical):
         - Text Field Box (1430×160px, r:12, pad: 20px 20px, horizontal top-aligned):
             * Default/Hovered/Focused/Pressed/Disabled: "Enter text" in #A3A3A3
             * Typing: "Suhani Shahu" in #171717 + blinking cursor line in #1D4ED8
             * Filled: "Suhani Shahu" in #171717
             * Error: "Suhani Shahu*" in #DC2626 with underline
         - Supporting Text (Lufga 12px w400, boolean toggle):
             * Default/Active/Typing/Filled/Error: #1D4ED8 (blue-700)
             * Disabled: #A3A3A3 (neutral-400)
   Zero additions — every property extracted A to Z from Figma
   ============================================================ */

export type TextFieldState =
  | 'Default'
  | 'Hovered'
  | 'Focused'
  | 'Pressed'
  | 'Typing'
  | 'Filled'
  | 'Error'
  | 'Disabled';

export interface TextFieldProps {
  /** Interactive state — Figma default: "Default" */
  state?: TextFieldState;
  /** Label text — Figma default: "Label" (Lufga 24px w400) */
  label?: string;
  /** Placeholder / default text — Figma: "Enter text" */
  placeholder?: string;
  /** Filled / Typing value — Figma default: "Suhani Shahu" */
  value?: string;
  /** Error text value — Figma default: "Suhani Shahu*" */
  errorValue?: string;
  /** Supporting text description — Figma default: "Supporting Text" (Lufga 12px w400) */
  supportingText?: string;
  /** Boolean toggle to show/hide the supporting text — Figma: "Supporting Text 2" */
  showSupportingText?: boolean;
  /** Controlled change handler */
  onChange?: (val: string) => void;
  className?: string;
}

export const TextField: React.FC<TextFieldProps> = ({
  state = 'Default',
  label = 'Label',
  placeholder = 'Enter text',
  value = 'Suhani Shahu',
  errorValue = 'Suhani Shahu*',
  supportingText = 'Supporting Text',
  showSupportingText = true,
  onChange,
  className = '',
}) => {
  const isTyping = state === 'Typing';
  const isFilled = state === 'Filled';
  const isError = state === 'Error';
  const isDisabled = state === 'Disabled';

  return (
    <div className={`uedp-text-field uedp-text-field--state-${state.toLowerCase()} ${className}`}>
      {/* Figma: Label Text (Lufga 24px w400) */}
      <label className="uedp-text-field__label">{label}</label>

      {/* Figma: Text field with supporting text (gap: 12px, vertical) */}
      <div className="uedp-text-field__frame">
        {/* Figma: Text Field Box (1430×160px, r:12, pad: 20px 20px) */}
        <div className="uedp-text-field__box">
          {isTyping && (
            <div className="uedp-text-field__typing-wrap">
              <span className="uedp-text-field__text uedp-text-field__text--typing">{value}</span>
              <span className="uedp-text-field__cursor" />
            </div>
          )}

          {isFilled && (
            <span className="uedp-text-field__text uedp-text-field__text--filled">{value}</span>
          )}

          {isError && (
            <span className="uedp-text-field__text uedp-text-field__text--error">{errorValue}</span>
          )}

          {!isTyping && !isFilled && !isError && (
            <textarea
              className="uedp-text-field__textarea"
              placeholder={placeholder}
              disabled={isDisabled}
              onChange={(e) => onChange?.(e.target.value)}
            />
          )}
        </div>

        {/* Figma: Supporting Text (Lufga 12px w400) */}
        {showSupportingText && (
          <span className="uedp-text-field__supporting-text">{supportingText}</span>
        )}
      </div>
    </div>
  );
};
