import React from 'react';
import './Delay Reasons card.css';
import { Indicators } from '../Indicators/Indicators';

/* ============================================================
   Figma Node ID: 88:11239  —  Component: "Delay Reasons card"
   Canvas: "Charts & Graphs" (41:4762)

   Card: 400×399, fill #FFFFFF, cornerRadius 24,
   effect DROP_SHADOW #000000 25% offset(4,4) radius 10.9,
   layoutMode VERTICAL itemSpacing 10, padding 24 all sides.

   Header (88:10993) + sibling "Frame 1" (88:11076): title "Delay Reasons"
   (Lufga 20/400 #171717) on the left, all 4 legend Indicators grouped in a
   tight 2×2 grid on the right — NOT split above/below the donut. Figma's
   exact child coords: row 1 (y=1377, part of the Header frame) has
   "Traffic" (state=Error #DC2626) at x=227 then "Vehicle Issue"
   (state=Info #1D4ED8) at x=296.5; row 2 (y=1403, a separate sibling frame
   that visually overlaps the donut's top-right corner where the ring is
   transparent) has "Weather" (state=Warning #F97316) at x=227 then "Other"
   (state=Success #22C55E) at x=297.5 — i.e. the grid reads Traffic/Vehicle
   Issue on row 1, Weather/Other on row 2, both rows flush right next to
   the title, tightly packed (~26px row height, no gap).

   Pie Chart (88:11048) GROUP: 4 concentric ELLIPSE nodes, each
   carrying real Figma `arcData` (startingAngle/endingAngle/
   innerRadius=0.7142) — i.e. this IS a true donut chart, and the
   exact slice sweep angles ARE present in the export (unlike most
   charts in this file). Ellipse 1 (#1D4ED8, "Vehicle Issue") has a
   full 2π sweep acting as the base ring; Ellipse 2 (#DC2626,
   "Traffic"), Ellipse 4 (#22C55E, "Other") and Ellipse 3 (#F97316,
   "Weather") are drawn on top with partial sweeps, leaving the
   remainder of the base ring showing through as "Vehicle Issue".
   Converting each sweep to a percentage of 360°:
     Traffic       ≈ 37.5%   (2.3562 rad)
     Other         ≈ 25.7%   (1.6154 rad)
     Weather       ≈ 19.7%   (1.2381 rad)
     Vehicle Issue ≈ 17.1%   (remainder of the base ring)
   These proportions are exact (derived directly from Figma
   arcData); only the ring's starting rotation was not replicated
   pixel-for-pixel — colors, proportions and the donut (innerRadius
   ≈0.714) geometry are faithful to Figma.
   ============================================================ */

const SLICES = [
  { label: 'Traffic', pct: 37.5, color: 'var(--uedp-red-600)' },
  { label: 'Other', pct: 25.7, color: 'var(--uedp-green-500)' },
  { label: 'Weather', pct: 19.7, color: 'var(--uedp-orange-500)' },
  { label: 'Vehicle Issue', pct: 17.1, color: 'var(--uedp-blue-700)' }
];

const gradientStops = () => {
  let acc = 0;
  const stops = SLICES.map((s) => {
    const start = acc;
    acc += s.pct;
    return `${s.color} ${start}% ${acc}%`;
  });
  return `conic-gradient(${stops.join(', ')})`;
};

export const DelayReasonsCard: React.FC = () => {
  return (
    <div className="uedp-delay-reasons-card">
      <div className="uedp-delay-reasons-card__header">
        <h3 className="uedp-delay-reasons-card__title">Delay Reasons</h3>
        <div className="uedp-delay-reasons-card__legend">
          <Indicators size="Small" state="Error" text="Traffic" />
          <Indicators size="Small" state="Info" text="Vehicle Issue" />
          <Indicators size="Small" state="Warning" text="Weather" />
          <Indicators size="Small" state="Success" text="Other" />
        </div>
      </div>

      <div className="uedp-delay-reasons-card__pie-wrap">
        <div className="uedp-delay-reasons-card__pie" style={{ background: gradientStops() }} />
      </div>
    </div>
  );
};
