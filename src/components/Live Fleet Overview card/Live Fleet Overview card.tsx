import React from 'react';
import './Live Fleet Overview card.css';
import { Maps } from '../Maps/Maps';
import { IconButton } from '../Icon Button/Icon Button';
import { Iconography } from '../Iconography/Iconography';

/* ============================================================
   Figma Node ID: 88:11235  —  Component: "Live Fleet Overview card"
   Canvas: "Charts & Graphs" (41:4762)

   Card: 755×354, fill #FFFFFF, cornerRadius 24,
   effect DROP_SHADOW #000000 25% offset(4,4) radius 10.9,
   layoutMode VERTICAL itemSpacing 16, padding 24 all sides.

   Header (88:10931): title "Live Fleet Overview" only
   (Lufga 20/400 #171717), no legend/CTA.

   Body: "Maps" INSTANCE (88:10954, componentId 42:5062 = Size:Compact)
   filling the remaining width — reused verbatim via <Maps size="Compact" />.
   Two decorative vectors sit over the map in Figma (Vector 144,
   88:10948: a route line stroke #1D4ED8, exact path supplied by the
   user, positioned at its real Figma offset (10.5, 169) within the
   686×272 map area — and Vector, 88:10949: a pin fill #DC2626, real
   bbox offset (2.5, 229) 15×21, exact path not available so kept as
   a teardrop approximation at the correct position/size) — rendered
   as a small inline SVG overlay since the Maps component itself is
   just the flat map image (no per-card decoration baked in). Two
   "Icon Button" instances/frames
   (88:10957 componentId 81:9058 = Plus, 88:10972 = Subtract) sit at
   the top-right, stacked above the map (z-index) as zoom controls —
   reused via the existing <IconButton size="Small"> with the
   matching Iconography glyphs ("plus" / "subtract").
   ============================================================ */

export const LiveFleetOverviewCard: React.FC = () => {
  return (
    <div className="uedp-live-fleet-card">
      <div className="uedp-live-fleet-card__header">
        <h3 className="uedp-live-fleet-card__title">Live Fleet Overview</h3>
      </div>

      <div className="uedp-live-fleet-card__map-wrap">
        <Maps size="Compact" />
        <svg className="uedp-live-fleet-card__route" viewBox="0 0 686 272" preserveAspectRatio="none" fill="none">
          {/* Vector 144 (88:10948) — exact Figma path, offset (10.5, 169) shifted up 18px to sit on the visible road */}
          <g transform="translate(10.5, 151)">
            <path
              d="M0.0265503 81.4456L217.453 69.8741L378.547 64.34L548.041 53.2716L634.518 45.222L646.377 38.6816L650.825 26.1039L656.26 17.5511L668.12 4.4704L676.027 0.445557"
              stroke="#1D4ED8"
            />
          </g>
          {/* Vector (88:10949) — pin, offset (2.5, 229) shifted up 18px to match */}
          <path d="M10 211C6.13 211 3 214.13 3 218C3 223.25 10 232 10 232C10 232 17 223.25 17 218C17 214.13 13.87 211 10 211Z" fill="#DC2626" />
        </svg>
        <div className="uedp-live-fleet-card__controls">
          <IconButton size="Small" aria-label="Zoom in" icon={<Iconography name="plus" size={15} />} />
          <IconButton size="Small" aria-label="Zoom out" icon={<Iconography name="subtract" size={15} />} />
        </div>
      </div>
    </div>
  );
};
