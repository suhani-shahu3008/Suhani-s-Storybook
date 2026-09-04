import React from 'react';
import { ICONOGRAPHY_DEFS } from './Iconography.defs';
import type { IconographyName } from './Iconography.defs';

/* ============================================================
   Iconography — icon library sourced from the Figma iconography
   sheet. Each icon keeps its own cropped viewBox (paths are used
   exactly as authored, only "black" swapped for currentColor so
   the `color` prop can drive it).
   ============================================================ */

export interface IconographyProps {
  name: IconographyName;
  size?: number;
  color?: string;
  className?: string;
}

export const Iconography: React.FC<IconographyProps> = ({
  name,
  size = 24,
  color = 'currentColor',
  className = '',
}) => {
  const def = ICONOGRAPHY_DEFS[name];
  if (!def) return null;

  return (
    <svg
      width={size}
      height={size}
      viewBox={def.viewBox}
      fill="none"
      className={`uedp-iconography ${className}`}
      style={{ color, display: 'block', flexShrink: 0 }}
      xmlns="http://www.w3.org/2000/svg"
      dangerouslySetInnerHTML={{ __html: def.html }}
    />
  );
};

export const ICONOGRAPHY_NAMES = Object.keys(ICONOGRAPHY_DEFS) as IconographyName[];
