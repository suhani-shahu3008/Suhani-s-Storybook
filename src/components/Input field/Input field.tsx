import React from 'react';
import { Iconography } from '../Iconography/Iconography';
import './Input field.css';

/* ============================================================
   Figma Node ID: 85:9820  —  Component Set: "Input field"
   16 Variants: Type (Filled, Outlined) × State (Default, Hovered, Focused, Pressed, Typing, Filled, Error, Disabled)
   Dimensions: 680×134px (or hug)
   Structure:
     - Label Text: Lufga 24px w400, color #171717 (#A3A3A3 when Disabled)
     - Input field with supporting text (gap: 12px, vertical):
         - Input Field Box (680×60px, r:12, pad: 16px 20px, gap: 12px, horizontal):
             - Left side:
                 - Icon before (Notepad 20×20px, boolean toggle)
                 - Text / Input (Lufga 16px w400):
                     * Default/Hovered/Focused/Pressed/Disabled: "Enter text" in #A3A3A3
                     * Typing: "Suhani Shahu" in #171717 + blinking cursor line in #1D4ED8
                     * Filled: "Suhani Shahu" in #171717
                     * Error: "Suhani Shahu*" in #DC2626 with underline
             - Icon after (20×20px, boolean toggle):
                 * Error: Cancel icon (#DC2626)
                 * Other states: View icon (#000000 / #A3A3A3 when disabled)
         - Supporting Text (Lufga 12px w400, boolean toggle):
             * Default/Active: #1D4ED8 (blue-700)
             * Error: #DC2626 (red-600)
             * Disabled: #737373 (neutral-500)
   Zero additions — every property extracted A to Z from Figma
   ============================================================ */

export type InputFieldType = 'Filled' | 'Outlined';
export type InputFieldState =
  | 'Default'
  | 'Hovered'
  | 'Focused'
  | 'Pressed'
  | 'Typing'
  | 'Filled'
  | 'Error'
  | 'Disabled';

export interface InputFieldProps {
  /** Variant Type: "Filled" | "Outlined" — Figma default: "Filled" */
  type?: InputFieldType;
  /** Variant State — Figma default: "Default" */
  state?: InputFieldState;
  /** Label text — Figma default: "Label" (Lufga 24px w400) */
  label?: string;
  /** Placeholder / default text — Figma: "Enter text" */
  placeholder?: string;
  /** Filled / Typing value — Figma: "Suhani Shahu" */
  value?: string;
  /** Error text value — Figma: "Suhani Shahu*" */
  errorValue?: string;
  /** Supporting text description — Figma: "Supporting Text" (Lufga 12px w400) */
  supportingText?: string;
  /** Boolean toggle to show/hide the supporting text — Figma: "Supporting Text 2" */
  showSupportingText?: boolean;
  /** Boolean toggle for leading Notepad icon — Figma: "Icon before" */
  showIconBefore?: boolean;
  /** Boolean toggle for trailing View/Cancel icon — Figma: "Icon after" */
  showIconAfter?: boolean;
  /** Controlled change handler */
  onChange?: (val: string) => void;
  className?: string;
}

/* ── 20×20px Notepad Icon (Figma Vector 11:262) ──────────── */
const NotepadIcon: React.FC<{ color: string }> = ({ color }) => (
  <div className="uedp-input-field__icon-container">
    <Iconography name="notepad" size={20} color={color} className="uedp-input-field__icon-svg" />
  </div>
);

/* ── 20×20px View / Eye Icon (Figma Vector 11:264) ───────── */
const ViewIcon: React.FC<{ color: string }> = ({ color }) => (
  <div className="uedp-input-field__icon-container">
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      className="uedp-input-field__icon-svg"
      style={{ color }}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3.28984 11.0983C3.21523 11.302 3.06415 11.4686 2.86869 11.5626C2.67322 11.6567 2.44879 11.6708 2.24307 11.602C2.03735 11.5332 1.86657 11.387 1.767 11.1942C1.66743 11.0015 1.64692 10.7776 1.70984 10.57C1.74036 10.4785 1.77484 10.3868 1.81317 10.2983C1.87984 10.14 1.97817 9.92167 2.11317 9.66333C2.38817 9.14667 2.8165 8.45833 3.44817 7.77C4.72317 6.37833 6.8115 5 9.99984 5C13.1882 5 15.2765 6.37833 16.5515 7.77C17.2315 8.51702 17.7834 9.37131 18.1848 10.2983L18.2615 10.4867C18.2665 10.5 18.2832 10.5867 18.2998 10.67L18.3332 10.8333C18.3332 10.8333 18.4732 11.3883 17.7632 11.6233C17.5541 11.6932 17.3258 11.6773 17.1284 11.5792C16.931 11.4811 16.7805 11.3088 16.7098 11.1V11.095L16.6998 11.0683L16.6482 10.9383C16.3208 10.1896 15.8732 9.49938 15.3232 8.895C14.3065 7.79 12.6448 6.66667 9.99984 6.66667C7.35484 6.66667 5.69317 7.78833 4.6765 8.89667C4.12662 9.50054 3.67906 10.1902 3.3515 10.9383L3.3015 11.0683L3.28984 11.0983ZM9.99984 8.33333C9.11578 8.33333 8.26794 8.68452 7.64282 9.30964C7.01769 9.93476 6.6665 10.7826 6.6665 11.6667C6.6665 12.5507 7.01769 13.3986 7.64282 14.0237C8.26794 14.6488 9.11578 15 9.99984 15C10.8839 15 11.7317 14.6488 12.3569 14.0237C12.982 13.3986 13.3332 12.5507 13.3332 11.6667C13.3332 10.7826 12.982 9.93476 12.3569 9.30964C11.7317 8.68452 10.8839 8.33333 9.99984 8.33333ZM8.33317 11.6667C8.33317 11.2246 8.50877 10.8007 8.82133 10.4882C9.13389 10.1756 9.55781 10 9.99984 10C10.4419 10 10.8658 10.1756 11.1783 10.4882C11.4909 10.8007 11.6665 11.2246 11.6665 11.6667C11.6665 12.1087 11.4909 12.5326 11.1783 12.8452C10.8658 13.1577 10.4419 13.3333 9.99984 13.3333C9.55781 13.3333 9.13389 13.1577 8.82133 12.8452C8.50877 12.5326 8.33317 12.1087 8.33317 11.6667Z"
        fill="currentColor"
      />
    </svg>
  </div>
);

/* ── 20×20px Cancel Icon (Figma Instance 85:9779) ────────── */
const CancelIcon: React.FC = () => (
  <div className="uedp-input-field__icon-container">
    <Iconography name="cancel" size={20} color="#DC2626" className="uedp-input-field__icon-svg" />
  </div>
);

export const InputField: React.FC<InputFieldProps> = ({
  type = 'Filled',
  state = 'Default',
  label = 'Label',
  placeholder = 'Enter text',
  value = 'Suhani Shahu',
  errorValue = 'Suhani Shahu*',
  supportingText = 'Supporting Text',
  showSupportingText = true,
  showIconBefore = true,
  showIconAfter = true,
  onChange,
  className = '',
}) => {
  const isTyping = state === 'Typing';
  const isFilled = state === 'Filled';
  const isError = state === 'Error';
  const isDisabled = state === 'Disabled';

  /* Icon colors based on Figma specs */
  const iconColor = isDisabled ? '#A3A3A3' : '#171717';

  return (
    <div
      className={`uedp-input-field uedp-input-field--type-${type.toLowerCase()} uedp-input-field--state-${state.toLowerCase()} ${className}`}
    >
      {/* Figma: Label Text (Lufga 24px w400) */}
      <label className="uedp-input-field__label">{label}</label>

      {/* Figma: Input field with supporting text (gap: 12px, vertical) */}
      <div className="uedp-input-field__frame">
        {/* Figma: Input Field Box (680×60px, r:12, pad: 16px 20px, gap: 12px) */}
        <div className="uedp-input-field__box">
          {/* Left side of input field frame */}
          <div className="uedp-input-field__left">
            {showIconBefore && <NotepadIcon color={iconColor} />}

            {/* Content per state */}
            {isTyping && (
              <div className="uedp-input-field__typing-wrap">
                <span className="uedp-input-field__text uedp-input-field__text--typing">{value}</span>
                <span className="uedp-input-field__cursor" />
              </div>
            )}

            {isFilled && (
              <span className="uedp-input-field__text uedp-input-field__text--filled">{value}</span>
            )}

            {isError && (() => {
              const hasStar = errorValue.endsWith('*');
              const baseText = hasStar ? errorValue.slice(0, -1) : errorValue;
              return (
                <span className="uedp-input-field__text uedp-input-field__text--error">
                  <span className="uedp-input-field__text-underline">{baseText}</span>
                  {hasStar && <span className="uedp-input-field__text-star">*</span>}
                </span>
              );
            })()}

            {!isTyping && !isFilled && !isError && (
              <input
                type="text"
                className="uedp-input-field__native-input"
                placeholder={placeholder}
                disabled={isDisabled}
                onChange={(e) => onChange?.(e.target.value)}
              />
            )}
          </div>

          {/* Right side trailing icon */}
          {showIconAfter && (
            <div className="uedp-input-field__right">
              {isError ? <CancelIcon /> : <ViewIcon color={iconColor} />}
            </div>
          )}
        </div>

        {/* Figma: Supporting Text (Lufga 12px w400) */}
        {showSupportingText && (
          <span className="uedp-input-field__supporting-text">{supportingText}</span>
        )}
      </div>
    </div>
  );
};
