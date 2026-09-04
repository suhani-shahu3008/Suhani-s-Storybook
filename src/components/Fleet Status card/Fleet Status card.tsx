import React from 'react';
import './Fleet Status card.css';
import { Indicators } from '../Indicators/Indicators';

/* ============================================================
   Figma Node ID: 88:11236  —  Component: "Fleet Status card"
   Canvas: "Charts & Graphs" (41:4762)

   Card: 330×354, fill #FFFFFF, cornerRadius 24,
   effect DROP_SHADOW #000000 25% offset(4,4) radius 10.9,
   layoutMode VERTICAL itemSpacing 10, padding 24 all sides.

   Header (88:10871): title "Fleet Status" (Lufga 20/400 #171717)
   + legend: Indicators "Available" (state=Inactive, #E5E7EB),
   "In Use" (state=Info, #1D4ED8).

   Pie Chart (88:10926) GROUP: 2 concentric ELLIPSE nodes, each
   carrying real Figma `arcData` (innerRadius ≈0.7142) — a true
   donut chart. Ellipse 1 (#1D4ED8, "In Use") has a full 2π sweep
   as the base ring; Ellipse 2 (#E5E7EB, "Available") is drawn on
   top with a partial sweep of ≈1.7261 rad. Converting to a
   percentage of 360°: Available ≈ 27.5%, In Use (remainder of the
   base ring) ≈ 72.5%. These proportions are exact (derived
   directly from Figma arcData); only the ring's starting rotation
   was not replicated. No percentage/metric text nodes exist in
   this Figma component, so no center label is rendered.
   ============================================================ */

const AVAILABLE_PCT = 27.5;

export const FleetStatusCard: React.FC = () => {
  return (
    <div className="uedp-fleet-status-card">
      <div className="uedp-fleet-status-card__header">
        <h3 className="uedp-fleet-status-card__title">Fleet Status</h3>
        <div className="uedp-fleet-status-card__legend">
          <Indicators size="Small" state="Inactive" text="Available" />
          <Indicators size="Small" state="Info" text="In Use" />
        </div>
      </div>

      <div className="uedp-fleet-status-card__pie-wrap">
        <div
          className="uedp-fleet-status-card__donut"
          style={{
            background: `conic-gradient(var(--uedp-gray-200) 0% ${AVAILABLE_PCT}%, var(--uedp-blue-700) ${AVAILABLE_PCT}% 100%)`
          }}
        />
      </div>
    </div>
  );
};
