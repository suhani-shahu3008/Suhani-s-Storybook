import React from 'react';
import './Status Tag.css';

/* ============================================================
   Figma Node ID: 66:7719  —  Component Set: "Status Tag"
   5 Variants: Type = Info | Error | Warning | Success | Inactive

   LAYER STRUCTURE (all variants — COMPONENT node, no text children):
   - Type: COMPONENT (no inner children)
   - Size: 50×22px
   - Border Radius: 9999px (VariableID:1:582 — full pill/capsule)
   - Padding: none
   - Strokes: none
   - StrokeWeight: 1 (strokeAlign: INSIDE)
   - preserveRatio: true  targetAspectRatio: {x:50, y:22}
   - clipsContent: true

   FILL COLORS (solid, no opacity):
   Type=Info:     #1D4ED8  (r:0.114 g:0.306 b:0.847 — VariableID:1:503 blue-700)
   Type=Error:    #DC2626  (r:0.863 g:0.149 b:0.149 — VariableID:1:392 red-600)
   Type=Warning:  #F97316  (r:0.976 g:0.451 b:0.086 — VariableID:1:402 orange-500)
   Type=Success:  #22C55E  (r:0.133 g:0.773 b:0.369 — VariableID:1:446 green-500)
   Type=Inactive: #E4E7EB  (r:0.898 g:0.906 b:0.922 — VariableID:1:344)
   ============================================================ */

export type StatusTagType = 'Info' | 'Error' | 'Warning' | 'Success' | 'Inactive';

export interface StatusTagProps {
  /** Figma Variant: Type=Info | Error | Warning | Success | Inactive */
  typeVariant?: StatusTagType;
  className?: string;
}

export const StatusTag: React.FC<StatusTagProps> = ({
  typeVariant = 'Info',
  className = '',
}) => {
  return (
    <div
      className={`uedp-status-tag uedp-status-tag--type-${typeVariant.toLowerCase()} ${className}`}
    />
  );
};
