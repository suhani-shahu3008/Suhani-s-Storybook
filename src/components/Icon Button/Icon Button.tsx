import React from 'react';
import { Iconography } from '../Iconography/Iconography';
import type { IconographyName } from '../Iconography/Iconography.defs';
import './Icon Button.css';

/* ============================================================
   Figma Node ID: 81:8976  —  Component Set: "Icon Button"
   10 variants  |  State × Size
   Zero additions — every value traced from Figma layers
   ============================================================ */

export type IconButtonState = 'Default' | 'Hovered' | 'Focused' | 'Pressed' | 'Disabled';
export type IconButtonSize  = 'Large' | 'Small';

export interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Figma: State=Default | Hovered | Focused | Pressed | Disabled */
  state?: IconButtonState;
  /** Figma: Size=Large (60×60px, icon 30px) | Size=Small (30×30px, icon 15px) */
  size?: IconButtonSize;
  /** Which Iconography icon to show (defaults to Figma's Notification icon) */
  iconName?: IconographyName;
  /** Optional custom icon element — overrides iconName when provided */
  icon?: React.ReactNode;
  /** Accessible label for screen readers */
  'aria-label'?: string;
}

/* ── Figma SVG Instance: "Notification" (node 16:645) ──────── */
export const NotificationIcon: React.FC<{ size?: number; fill?: string }> = ({
  size = 30,
  fill = 'currentColor',
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 30 30"
    fill="none"
    style={{ display: 'block', flexShrink: 0 }}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fillRule="evenodd" clipRule="evenodd" d="M13.1375 6.525C12.3612 6.735 11.6362 7.06375 11.1312 7.51875C9.75248 8.7625 9.19123 10.4475 9.19123 13.485C9.19123 15.65 7.95873 17.7 7.07123 19.0275C6.87873 19.3175 6.81873 19.5937 6.82998 19.76C6.83498 19.835 6.85248 19.87 6.85998 19.8825C6.86498 19.8913 6.87998 19.915 6.93998 19.9475C7.80498 20.41 9.10998 20.7475 10.6187 20.9612C12.071 21.1562 13.5347 21.2526 15 21.25C15.3315 21.25 15.6494 21.3817 15.8839 21.6161C16.1183 21.8505 16.25 22.1685 16.25 22.5C16.25 22.8315 16.1183 23.1495 15.8839 23.3839C15.6494 23.6183 15.3315 23.75 15 23.75C13.59 23.75 11.895 23.6688 10.2675 23.4375C8.66498 23.2087 7.01373 22.8213 5.76123 22.1525C4.83998 21.66 4.39498 20.8025 4.33623 19.9287C4.27873 19.105 4.55748 18.2913 4.99248 17.64C5.88873 16.2975 6.69123 14.8162 6.69123 13.485C6.69123 10.1588 7.30623 7.60125 9.45748 5.6625C10.3637 4.845 11.5025 4.37875 12.4812 4.1125C13.3019 3.8849 14.1484 3.76308 15 3.75C15.3315 3.75 15.6494 3.8817 15.8839 4.11612C16.1183 4.35054 16.25 4.66848 16.25 5C16.25 5.33152 16.1183 5.64946 15.8839 5.88388C15.6494 6.1183 15.3315 6.25 15 6.25C14.6175 6.25 13.905 6.315 13.1375 6.525Z" fill={fill}/>
    <path fillRule="evenodd" clipRule="evenodd" d="M16.8625 6.525C17.6387 6.735 18.3638 7.06375 18.8688 7.51875C20.2475 8.7625 20.8087 10.4475 20.8087 13.485C20.8087 15.65 22.0413 17.7 22.9288 19.0275C23.1213 19.3175 23.1812 19.5937 23.17 19.76C23.1706 19.8027 23.1603 19.8449 23.14 19.8825C23.135 19.8913 23.12 19.915 23.06 19.9475C22.195 20.41 20.89 20.7475 19.3813 20.9612C17.929 21.1562 16.4653 21.2526 15 21.25C14.6685 21.25 14.3505 21.3817 14.1161 21.6161C13.8817 21.8505 13.75 22.1685 13.75 22.5C13.75 22.8315 13.8817 23.1495 14.1161 23.3839C14.3505 23.6183 14.6685 23.75 15 23.75C16.41 23.75 18.1038 23.6688 19.7325 23.4375C21.335 23.2087 22.9863 22.8213 24.2388 22.1525C25.16 21.66 25.605 20.8025 25.6637 19.9287C25.7213 19.105 25.4425 18.2913 25.0075 17.64C24.1113 16.2975 23.3087 14.8162 23.3087 13.485C23.3087 10.1588 22.6938 7.60125 20.5425 5.6625C19.6363 4.845 18.4975 4.37875 17.5188 4.1125C16.698 3.8849 15.8516 3.76308 15 3.75C14.6685 3.75 14.3505 3.8817 14.1161 4.11612C13.8817 4.35054 13.75 4.66848 13.75 5C13.75 5.33152 13.8817 5.64946 14.1161 5.88388C14.3505 6.1183 14.6685 6.25 15 6.25C15.3825 6.25 16.095 6.315 16.8625 6.525Z" fill={fill}/>
    <path d="M18.3087 4.6C18.3087 5.46875 16.5637 4.6525 15.1837 4.6525C13.8037 4.6525 12.0587 5.46875 12.0587 4.59875C12.0587 3.73 13.3087 2.5 15.1837 2.5C17.0587 2.5 18.3087 3.73 18.3087 4.6Z" fill={fill}/>
    <path fillRule="evenodd" clipRule="evenodd" d="M12.5 22.5C12.5 23.163 12.7634 23.7989 13.2322 24.2678C13.7011 24.7366 14.337 25 15 25C15.663 25 16.2989 24.7366 16.7678 24.2678C17.2366 23.7989 17.5 23.163 17.5 22.5H20C20 23.8261 19.4732 25.0979 18.5355 26.0355C17.5979 26.9732 16.3261 27.5 15 27.5C13.6739 27.5 12.4021 26.9732 11.4645 26.0355C10.5268 25.0979 10 23.8261 10 22.5H12.5Z" fill={fill}/>
  </svg>
);

export const IconButton: React.FC<IconButtonProps> = ({
  state = 'Default',
  size = 'Large',
  iconName,
  icon,
  disabled,
  className = '',
  'aria-label': ariaLabel = 'Notification icon button',
  ...props
}) => {
  const isActuallyDisabled = disabled || state === 'Disabled';
  const st = state.toLowerCase();
  const sz = size.toLowerCase();

  const iconDimension = size === 'Large' ? 30 : 15;

  /* Figma icon color mapping */
  const iconColor = state === 'Disabled' ? '#A3A3A3' : '#171717';

  const classes = [
    'uedp-icon-btn',
    `uedp-icon-btn--${st}`,
    `uedp-icon-btn--${sz}`,
    className,
  ].filter(Boolean).join(' ');

  return (
    <button
      className={classes}
      disabled={isActuallyDisabled}
      aria-label={ariaLabel}
      type="button"
      {...props}
    >
      {icon
        ? icon
        : iconName
          ? <Iconography name={iconName} size={iconDimension} color={iconColor} />
          : <NotificationIcon size={iconDimension} fill={iconColor} />}
    </button>
  );
};
