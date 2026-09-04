import React from 'react';
import './Maps.css';
import compactMap from './assets/compact.png';
import standardMap from './assets/standard.png';
import wideMap from './assets/wide.png';

/* ============================================================
   Figma Node ID: 42:5063 — Component: "Maps"
   Size variants (componentId): Compact (42:5062, 686×272, r:20, no
   shadow) | Standard (42:5061, 791×948, r:32, shadow) | Wide
   (42:5060, 1531×531, r:28, shadow)
   Shadow (Standard/Wide): offset 4/4, blur 10.9, rgba(0,0,0,0.25) —
   same shadow token used elsewhere in this design system.
   Zero additions — every property extracted A to Z from Figma
   ============================================================ */

export type MapsSize = 'Compact' | 'Standard' | 'Wide';

export interface MapsProps {
  /** Figma: Size=Compact | Standard | Wide */
  size?: MapsSize;
  className?: string;
}

const MAP_IMAGE: Record<MapsSize, string> = {
  Compact: compactMap,
  Standard: standardMap,
  Wide: wideMap,
};

export const Maps: React.FC<MapsProps> = ({
  size = 'Standard',
  className = ''
}) => {
  return (
    <div
      className={`uedp-map-view uedp-map-view--${size.toLowerCase()} ${className}`}
      style={{ backgroundImage: `url(${MAP_IMAGE[size]})` }}
    />
  );
};
