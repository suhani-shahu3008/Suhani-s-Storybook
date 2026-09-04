import React from 'react';
import './Table Header Row.css';

/* ============================================================
   Figma Node ID: 179:1512  —  Component Set: "Table Header Row"
   Variant: "Variant=Header" (id: 179:1470)
   Dimensions: 1488×40px
   Layout: HORIZONTAL, counterAxisAlignItems: CENTER
   Background fill: #F5F5F5 (rgba(245,245,245,1) / VariableID:1:365)
   Border radius: 12px (VariableID:1:579)
   Padding: T12 R36 B12 L36 (VariableID:1:613 / VariableID:1:620)

   7 column header cells — each FILL width, HUG height, HORIZONTAL layout:
     - "Vehicle ID"      (id: 179:1472) Lufga 12px w400 #171717
     - "Type"            (id: 179:1474) Lufga 12px w400 #171717
     - "Model"           (id: 179:1476) Lufga 12px w400 #171717
     - "Capacity"        (id: 179:1478) Lufga 12px w400 #171717
     - "Assigned Driver" (id: 179:1480) Lufga 12px w400 #171717
     - "Status"          (id: 179:1482) Lufga 12px w400 #171717
     - "Actions"         (id: 179:1484) Lufga 12px w400 #171717

   Zero additions — every property extracted A to Z from Figma
   ============================================================ */

export interface TableHeaderRowProps {
  /** Column label 1 — Figma default: "Vehicle ID" (Lufga 12px w400, #171717) */
  col1?: string;
  /** Column label 2 — Figma default: "Type" */
  col2?: string;
  /** Column label 3 — Figma default: "Model" */
  col3?: string;
  /** Column label 4 — Figma default: "Capacity" */
  col4?: string;
  /** Column label 5 — Figma default: "Assigned Driver" */
  col5?: string;
  /** Column label 6 — Figma default: "Status" */
  col6?: string;
  /** Column label 7 — Figma default: "Actions" */
  col7?: string;
  className?: string;
}

export const TableHeaderRow: React.FC<TableHeaderRowProps> = ({
  col1 = 'Vehicle ID',
  col2 = 'Type',
  col3 = 'Model',
  col4 = 'Capacity',
  col5 = 'Assigned Driver',
  col6 = 'Status',
  col7 = 'Actions',
  className = '',
}) => {
  return (
    <div className={`uedp-thr ${className}`}>
      {/* Vehicle ID Header — id: 179:1471 */}
      <div className="uedp-thr__cell">
        <span className="uedp-thr__label">{col1}</span>
      </div>

      {/* Type Header — id: 179:1473 */}
      <div className="uedp-thr__cell">
        <span className="uedp-thr__label">{col2}</span>
      </div>

      {/* Model Header — id: 179:1475 */}
      <div className="uedp-thr__cell">
        <span className="uedp-thr__label">{col3}</span>
      </div>

      {/* Capacity Header — id: 179:1477 */}
      <div className="uedp-thr__cell">
        <span className="uedp-thr__label">{col4}</span>
      </div>

      {/* Assigned Driver Header — id: 179:1479 */}
      <div className="uedp-thr__cell">
        <span className="uedp-thr__label">{col5}</span>
      </div>

      {/* Status Header — id: 179:1481 */}
      <div className="uedp-thr__cell">
        <span className="uedp-thr__label">{col6}</span>
      </div>

      {/* Actions Header — id: 179:1483 */}
      <div className="uedp-thr__cell">
        <span className="uedp-thr__label">{col7}</span>
      </div>
    </div>
  );
};
