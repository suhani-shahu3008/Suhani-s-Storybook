import React from 'react';
import './Tags.css';

/* ============================================================
   Figma Node ID: 65:7696  —  Component Set: "Tags"
   5 Variants: Type = Info | Error | Warning | Success | Inactive

   DIMENSIONS (all variants identical):
   - Size: 38×24px (HUG in practice since text property drives width)
   - Border Radius: 9999px (full pill/capsule)
   - Padding: 10px all sides (L:10 R:10 T:10 B:10)
   - Layout: HORIZONTAL

   TEXT LABEL (child node "Tags" TEXT):
   - Font: Lufga Light / fontWeight: 300
   - Font Size: 8px
   - Line Height: 10.44px (INTRINSIC_%)
   - textAlignHorizontal: LEFT  textAlignVertical: CENTER
   - letterSpacing: 0
   - Default text: "Tags"  (TEXT property: "Text#65:173")

   COLOR TABLE:
   Type=Info:
     bg fill: #DBECFE  (r:0.859 g:0.918 b:0.996 — VariableID:1:497 blue-100-ish)
     text:    #1D4ED8  (VariableID:1:503 blue-700)
   Type=Error:
     bg fill: #FEE2E2  (r:0.996 g:0.886 b:0.886 — VariableID:1:387 red-100)
     text:    #DC2626  (VariableID:1:392 red-600)
   Type=Warning:
     bg fill: #FFEDD5  (r:1 g:0.929 b:0.835 — VariableID:1:398 orange-100)
     text:    #F97316  (r:0.976 g:0.451 b:0.086 — VariableID:1:402 orange-500)
   Type=Success:
     bg fill: #DCFCE7  (r:0.863 g:0.988 b:0.906 — VariableID:1:442 green-100)
     text:    #22C55E  (VariableID:1:446 green-500)
   Type=Inactive:
     bg fill: #F5F5F5  (r:0.961 g:0.961 b:0.961 — VariableID:1:365 neutral-100)
     text:    #171717  (r:0.090 g:0.090 b:0.090 — VariableID:1:373 neutral-900)
   ============================================================ */

export type TagType = 'Info' | 'Error' | 'Warning' | 'Success' | 'Inactive';

export interface TagsProps {
  /** Figma Variant: Type=Info | Error | Warning | Success | Inactive */
  typeVariant?: TagType;
  /** Figma TEXT property "Text#65:173" — default: "Tags" */
  text?: string;
  className?: string;
}

export const Tags: React.FC<TagsProps> = ({
  typeVariant = 'Info',
  text = 'Tags',
  className = '',
}) => {
  return (
    <div
      className={`uedp-tag uedp-tag--type-${typeVariant.toLowerCase()} ${className}`}
    >
      <span className="uedp-tag__text">{text}</span>
    </div>
  );
};
