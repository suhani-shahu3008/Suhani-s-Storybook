import React from 'react';
import { Iconography } from '../Iconography/Iconography';
import type { IconographyName } from '../Iconography/Iconography.defs';
import './Button.css';

/* ============================================================
   Figma Node ID: 10:166  —  Component Set: "Button"
   38 variants  |  Type × State × Shape × Feedback × Size
   Zero additions — every value traced from Figma layers
   ============================================================ */

/* ── Figma Variant axes ─────────────────────────────────── */
export type ButtonType     = 'Primary' | 'Secondary';
export type ButtonState    = 'Active' | 'Hovered' | 'Focused' | 'Pressed' | 'Disabled';
export type ButtonShape    = 'Capsule' | 'Rectangle';
export type ButtonFeedback = 'Default' | 'Error' | 'Warning' | 'Success' | 'Info';
export type ButtonSize     = 'Large' | 'Small';

export interface ButtonProps {
  /** Figma: Type=Primary | Type=Secondary */
  typeVariant?: ButtonType;
  /** Figma: State=Active | Hovered | Focused | Pressed | Disabled */
  state?: ButtonState;
  /** Figma: Shape=Capsule (radius 9999) | Shape=Rectangle (radius 12) */
  shape?: ButtonShape;
  /** Figma: Feedback=Default | Error | Warning | Success | Info  (Primary only) */
  feedback?: ButtonFeedback;
  /** Figma: Size=Large (20px/w500, pad 14/24) | Size=Small (16px/w400, pad 16/24) */
  size?: ButtonSize;
  /** Figma TEXT layer content — default "Button" */
  label?: string;
  /** Show icon instance (20×20px) */
  showIcon?: boolean;
  /** Which Iconography icon to show (defaults to Figma's "dashboard") */
  iconName?: IconographyName;
  /** Custom icon element — overrides iconName when provided */
  icon?: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  className?: string;
}

/* Figma SVG Icon INSTANCE — Vector fill inherits from parent */
const ButtonIcon: React.FC<{ name: IconographyName; fill: string }> = ({ name, fill }) => (
  <Iconography name={name} size={20} color={fill} />
);

export const Button: React.FC<ButtonProps> = ({
  typeVariant = 'Primary',
  state       = 'Active',
  shape       = 'Capsule',
  feedback    = 'Default',
  size        = 'Large',
  label       = 'Button',
  showIcon    = false,
  iconName    = 'dashboard',
  icon,
  onClick,
  className   = '',
}) => {
  const t = typeVariant;
  const st = state;
  const sh = shape.toLowerCase();
  const fb = feedback.toLowerCase();
  const sz = size.toLowerCase();

  const cls = [
    'uedp-btn',
    `uedp-btn--${t.toLowerCase()}`,
    `uedp-btn--${st.toLowerCase()}`,
    `uedp-btn--${sh}`,
    `uedp-btn--${sz}`,
    t === 'Primary' ? `uedp-btn--fb-${fb}` : '',
    className,
  ].filter(Boolean).join(' ');

  /* ── Figma icon fill rules (from Figma Vector child fills) ── */
  const iconFill = (() => {
    if (t === 'Primary') {
      if (st === 'Disabled') return 'rgb(148,163,184)';  /* slate-300 */
      return 'rgb(255,255,255)';
    }
    /* Secondary */
    if (st === 'Disabled') return 'rgb(163,163,163)';    /* neutral-400 */
    return 'rgb(23,23,23)';                               /* neutral-900 */
  })();

  return (
    <button
      className={cls}
      disabled={st === 'Disabled'}
      onClick={onClick}
      type="button"
    >
      {/* Figma TEXT layer "Button" — always left child in layout */}
      <span className="uedp-btn__label">{label}</span>

      {/* Figma INSTANCE Icon — right child, 20×20px */}
      {(icon || showIcon) && (icon || <ButtonIcon name={iconName} fill={iconFill} />)}
    </button>
  );
};
