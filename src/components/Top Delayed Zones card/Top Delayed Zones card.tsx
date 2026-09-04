import React from 'react';
import './Top Delayed Zones card.css';

/* ============================================================
   Figma Node ID: 88:11237  —  Component: "Top Delayed Zones card"
   Canvas: "Charts & Graphs" (41:4762)

   Card: 502×399, fill #FFFFFF, cornerRadius 24,
   effect DROP_SHADOW #000000 25% offset(4,4) radius 10.9,
   layoutMode VERTICAL itemSpacing 10, padding 24 all sides.

   Header (88:11121): title "Top Delayed Zones" only, no legend/CTA.

   Bar Graph (88:11142) GROUP: single-series vertical bar chart,
   bars fill #F97316, rectangleCornerRadii ~9.8px top corners only.
   Axis rules #171717, gridlines #E5E7EB, y-axis ticks 0/4/8/12/16,
   x-axis labels "Zone A".."Zone E".
   Bar pixel heights were converted to the 0–16 axis scale
   (≈15.09px per unit, derived from the Figma gridline spacing):
     Zone A ≈ 12, Zone B ≈ 8, Zone C ≈ 16, Zone D ≈ 6, Zone E ≈ 10
   No numeric data labels exist on these bars in the export, so the
   values are back-computed from bar geometry, not literal Figma data.
   ============================================================ */

const ZONES = [
  { name: 'Zone A', value: 12 },
  { name: 'Zone B', value: 8 },
  { name: 'Zone C', value: 16 },
  { name: 'Zone D', value: 6 },
  { name: 'Zone E', value: 10 }
];

const Y_TICKS = [16, 12, 8, 4, 0];
const MAX = 16;

export const TopDelayedZonesCard: React.FC = () => {
  return (
    <div className="uedp-delayed-zones-card">
      <div className="uedp-delayed-zones-card__header">
        <h3 className="uedp-delayed-zones-card__title">Top Delayed Zones</h3>
      </div>

      <div className="uedp-delayed-zones-card__chart">
        <div className="uedp-delayed-zones-card__yaxis">
          {Y_TICKS.map((t) => (
            <span key={t}>{t}</span>
          ))}
        </div>

        <div className="uedp-delayed-zones-card__plot">
          <div className="uedp-delayed-zones-card__bars">
            {ZONES.map((z) => (
              <div key={z.name} className="uedp-delayed-zones-card__bar-col">
                <div
                  className="uedp-delayed-zones-card__bar"
                  style={{ height: `${(z.value / MAX) * 100}%` }}
                />
              </div>
            ))}
          </div>
          <div className="uedp-delayed-zones-card__xaxis">
            {ZONES.map((z) => (
              <span key={z.name}>{z.name}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
