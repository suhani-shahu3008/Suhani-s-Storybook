import React from 'react';
import './Delivery trends card.css';
import { Indicators } from '../Indicators/Indicators';

/* ============================================================
   Figma Node ID: 88:11240  —  Component: "Delivery trends card"
   Canvas: "Charts & Graphs" (41:4762)

   Card: 402×354, fill #FFFFFF, cornerRadius 24,
   effect DROP_SHADOW #000000 25% offset(4,4) radius 10.9,
   layoutMode VERTICAL itemSpacing 10, padding 24 all sides.

   Header (88:10868): title "Delivery Trends" (Lufga 20/400 #171717)
   + legend "Indicators" instances: On-Time (state=Success, #22C55E)
   and Total Deliveries (state=Info, #1D4ED8).

   Graph (88:10869) GROUP: dual line chart, axis gridlines #E5E7EB,
   axis rules #171717, y-axis ticks 0/1500/3000/4500/6000,
   x-axis months Jan–Jun. Two series traced from Vector 142/143
   (fill/stroke) with per-month Ellipse markers:
     Total Deliveries (#1D4ED8): plain fill markers
     On-Time (#22C55E): fill + stroke markers
   NOTE: the raw JSON export only carries bounding boxes for the
   VECTOR line paths and ELLIPSE markers (no data labels / no
   fillGeometry path data), so exact series values are not present
   in Figma. Values below are back-computed from each marker's pixel
   position against the 0–6000 axis scale (documented known
   limitation of this Figma export — approximate, not literal data).
   ============================================================ */

const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];
const TOTAL_DELIVERIES = [2350, 2700, 3000, 3400, 3900, 4450];
const ON_TIME = [1975, 2150, 2500, 2900, 3300, 3800];
const Y_TICKS = [6000, 4500, 3000, 1500, 0];

const CHART_W = 300;
const CHART_H = 190;

const xFor = (i: number) => 10 + (i * (CHART_W - 20)) / (MONTHS.length - 1);
const yFor = (v: number) => CHART_H - (v / 6000) * CHART_H;

const toPoints = (values: number[]) => values.map((v, i) => `${xFor(i)},${yFor(v)}`).join(' ');

export const DeliveryTrendsCard: React.FC = () => {
  return (
    <div className="uedp-delivery-trends-card">
      <div className="uedp-delivery-trends-card__header">
        <h3 className="uedp-delivery-trends-card__title">Delivery Trends</h3>
        <div className="uedp-delivery-trends-card__legend">
          <Indicators size="Small" state="Success" text="On-Time" />
          <Indicators size="Small" state="Info" text="Total Deliveries" />
        </div>
      </div>

      <div className="uedp-delivery-trends-card__chart">
        <div className="uedp-delivery-trends-card__yaxis">
          {Y_TICKS.map((t) => (
            <span key={t}>{t}</span>
          ))}
        </div>

        <div className="uedp-delivery-trends-card__plot">
          <svg
            className="uedp-delivery-trends-card__svg"
            viewBox={`0 0 ${CHART_W} ${CHART_H}`}
            preserveAspectRatio="none"
          >
            {Y_TICKS.map((t) => (
              <line
                key={t}
                x1={0}
                x2={CHART_W}
                y1={yFor(t)}
                y2={yFor(t)}
                stroke="var(--uedp-gray-200)"
                strokeWidth={1}
              />
            ))}
            <polyline points={toPoints(TOTAL_DELIVERIES)} fill="none" stroke="var(--uedp-blue-700)" strokeWidth={1.5} />
            <polyline points={toPoints(ON_TIME)} fill="none" stroke="var(--uedp-green-500)" strokeWidth={1.5} />
            {TOTAL_DELIVERIES.map((v, i) => (
              <circle key={`td-${i}`} cx={xFor(i)} cy={yFor(v)} r={3} fill="var(--uedp-blue-700)" />
            ))}
            {ON_TIME.map((v, i) => (
              <circle
                key={`ot-${i}`}
                cx={xFor(i)}
                cy={yFor(v)}
                r={3}
                fill="var(--uedp-green-500)"
                stroke="var(--uedp-green-500)"
                strokeWidth={1}
              />
            ))}
            <line x1={0} x2={CHART_W} y1={CHART_H} y2={CHART_H} stroke="var(--uedp-neutral-900)" strokeWidth={1} />
          </svg>
          <div className="uedp-delivery-trends-card__xaxis">
            {MONTHS.map((m) => (
              <span key={m}>{m}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
