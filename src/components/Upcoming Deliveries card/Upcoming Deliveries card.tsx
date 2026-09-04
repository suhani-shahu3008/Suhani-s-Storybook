import React from 'react';
import './Upcoming Deliveries card.css';
import { Iconography } from '../Iconography/Iconography';
import { StatusTag } from '../Status Tag/Status Tag';
import type { StatusTagType } from '../Status Tag/Status Tag';

/* ============================================================
   Figma Node ID: 88:11238  —  Component: "Upcoming Deliveries card"
   Canvas: "Charts & Graphs" (41:4762)

   Card: 582×399, fill #FFFFFF, cornerRadius 24,
   effect DROP_SHADOW #000000 25% offset(4,4) radius 10.9,
   layoutMode VERTICAL itemSpacing 10, padding 24 all sides.

   Header (88:11144): title "Upcoming Deliveries" (Lufga 20/400
   #171717) + "View More" link (Lufga 12/400 #1D4ED8).

   4 repeated "Upcoming Deliveries" row frames (88:11183, 88:11199,
   88:11211, 88:11223): bg #F5F5F5, cornerRadius 12, padding 10 12,
   itemSpacing 12. Each row: "Card Icon" 51.25×51.25 bg #1D4ED8
   radius 12 containing the "Box" instance (Iconography "box",
   white); code (12/400 #171717) + company (8/400 #A3A3A3); city
   (8/400 #404040) + "ETA: HH:MM p.m." (8/400 #404040); Status Tag
   instance (color only, no text label per Figma — Status Tag has
   no text children).

   Row data + Status Tag colors, read verbatim from Figma:
     SHP-1001 / ABC Corp    / Mumbai   / ETA: 14:30 p.m. / #22C55E (Success)
     SHP-1002 / XYZ Ltd     / Delhi    / ETA: 15:45 p.m. / #22C55E (Success)
     SHP-1003 / Tech Solutions / Banglore / ETA: 16:00 p.m. / #F97316 (Warning)
     SHP-1004 / Global Trade   / Chennai  / ETA: 17:20 p.m. / #EF4444 (Error)
   ("Banglore" is the exact spelling used in the Figma text layer.)
   ============================================================ */

interface DeliveryRow {
  code: string;
  company: string;
  city: string;
  eta: string;
  status: StatusTagType;
}

const ROWS: DeliveryRow[] = [
  { code: 'SHP-1001', company: 'ABC Corp', city: 'Mumbai', eta: 'ETA: 14:30 p.m.', status: 'Success' },
  { code: 'SHP-1002', company: 'XYZ Ltd', city: 'Delhi', eta: 'ETA: 15:45 p.m.', status: 'Success' },
  { code: 'SHP-1003', company: 'Tech Solutions', city: 'Banglore', eta: 'ETA: 16:00 p.m.', status: 'Warning' },
  { code: 'SHP-1004', company: 'Global Trade', city: 'Chennai', eta: 'ETA: 17:20 p.m.', status: 'Error' }
];

export const UpcomingDeliveriesCard: React.FC = () => {
  return (
    <div className="uedp-upcoming-deliveries-card">
      <div className="uedp-upcoming-deliveries-card__header">
        <h3 className="uedp-upcoming-deliveries-card__title">Upcoming Deliveries</h3>
        <span className="uedp-upcoming-deliveries-card__view-more">View More</span>
      </div>

      <div className="uedp-upcoming-deliveries-card__list">
        {ROWS.map((row) => (
          <div key={row.code} className="uedp-delivery-item">
            <div className="uedp-delivery-item__left">
              <div className="uedp-delivery-item__icon">
                <Iconography name="box" size={20} color="var(--uedp-base-white)" />
              </div>
              <div className="uedp-delivery-item__info">
                <div className="uedp-delivery-item__code">{row.code}</div>
                <div className="uedp-delivery-item__company">{row.company}</div>
              </div>
            </div>
            <div className="uedp-delivery-item__right">
              <span className="uedp-delivery-item__city">{row.city}</span>
              <span className="uedp-delivery-item__eta">{row.eta}</span>
              <StatusTag typeVariant={row.status} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
