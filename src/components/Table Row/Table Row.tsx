import React from 'react';
import { Iconography } from '../Iconography/Iconography';
import './Table Row.css';

/* ============================================================
   Figma Node ID: 179:1513  —  Component Set: "Table Row"
   Variant: "Variant=Row" (id: 179:1485)
   Dimensions: 1488×49px
   Layout: HORIZONTAL, counterAxisAlignItems: CENTER
   Background: transparent (no fill)
   Padding: T12 R36 B12 L36

   7 column cells — each FILL width, HUG height, HORIZONTAL layout:
   1. Vehicle ID Cell (id: 179:1486):
        TEXT "Vehicle ID" — Lufga 16px w400, color #1D4ED8 (blue, VariableID:1:503)
   2. Type Cell (id: 179:1488):
        TEXT "Type" — Lufga 16px w400, color #171717 (VariableID:1:373)
   3. Model Cell (id: 179:1490):
        TEXT "Model" — Lufga 16px w400, color #171717
   4. Capacity Cell (id: 179:1492):
        TEXT "Capacity" — Lufga 16px w400, color #171717
   5. Assigned Driver Cell (id: 179:1494):
        TEXT "Assigned Driver" — Lufga 16px w400, color #171717
   6. Status Cell (id: 179:1496):
        Status Tag INSTANCE (id: 179:1497) — 50×22px, r:9999, Type=Info (#1D4ED8)
   7. Actions Cell (id: 179:1498):
        Action Icons FRAME (id: 179:1499) — gap:36px, HORIZONTAL
          - View     (id: 179:1500): 25×25px, icon fill #A3A3A3
          - Edit 2   (id: 179:1501): 25×25px, icon stroke #A3A3A3
          - Delete   (id: 179:1502): 25×25px, icon fill #DC2626

   Status Tag variants (Component Set id: 66:7719):
     Type=Info     (66:7718): 50×22px, r:9999, fill #1D4ED8
     Type=Error    (66:7717): 50×22px, r:9999, fill #DC2626
     Type=Warning  (66:7716): 50×22px, r:9999, fill #F97316
     Type=Success  (66:7715): 50×22px, r:9999, fill #22C55E
     Type=Inactive (66:7714): 50×22px, r:9999, fill #E5E7EB

   Zero additions — every property extracted A to Z from Figma
   ============================================================ */

export type TableRowStatus = 'Info' | 'Error' | 'Warning' | 'Success' | 'Inactive';

export interface TableRowProps {
  /** Vehicle ID cell text — Figma: "Vehicle ID" (Lufga 16px w400, #1D4ED8) */
  vehicleId?: string;
  /** Type cell text — Figma: "Type" (Lufga 16px w400, #171717) */
  type?: string;
  /** Model cell text — Figma: "Model" (Lufga 16px w400, #171717) */
  model?: string;
  /** Capacity cell text — Figma: "Capacity" (Lufga 16px w400, #171717) */
  capacity?: string;
  /** Assigned Driver cell text — Figma: "Assigned Driver" (Lufga 16px w400, #171717) */
  assignedDriver?: string;
  /** Status Tag Type variant — Figma: "Info" | "Error" | "Warning" | "Success" | "Inactive" */
  status?: TableRowStatus;
  /** Click handler: View action icon (id: 179:1500) */
  onView?: () => void;
  /** Click handler: Edit action icon (id: 179:1501) */
  onEdit?: () => void;
  /** Click handler: Delete action icon (id: 179:1502) */
  onDelete?: () => void;
  className?: string;
}

/* ── Status Tag (Figma Component Set 66:7719 / Variant=Info default) ──
   50×22px, border-radius: 9999px
   Type=Info     fill: #1D4ED8 (VariableID:1:503)
   Type=Error    fill: #DC2626
   Type=Warning  fill: #F97316
   Type=Success  fill: #22C55E
   Type=Inactive fill: #E5E7EB */
const STATUS_TAG_FILLS: Record<TableRowStatus, string> = {
  Info:     '#1D4ED8', /* rgba(29,78,216,1)  / 66:7718 */
  Error:    '#DC2626', /* rgba(220,38,38,1)  / 66:7717 */
  Warning:  '#F97316', /* rgba(249,115,22,1) / 66:7716 */
  Success:  '#22C55E', /* rgba(34,197,94,1)  / 66:7715 */
  Inactive: '#E5E7EB', /* rgba(229,231,235,1)/ 66:7714 */
};

const StatusTag: React.FC<{ type: TableRowStatus }> = ({ type }) => (
  <div
    className="uedp-tr__status-tag"
    style={{ backgroundColor: STATUS_TAG_FILLS[type] }}
  />
);

/* ── View Icon (Figma 179:1500 / Component 11:600 / Vector 11:264)
   25×25px container, vector 16.67×10px, fill/stroke: #A3A3A3 (VariableID:1:368) */
const ViewIcon = () => <Iconography name="view-2" size={25} color="#A3A3A3" />;

/* ── Edit Icon (Figma 179:1501 / Component 16:665 / Vector 11:558-560)
   25×25px container, icon stroke: #A3A3A3 (VariableID:1:368), strokeWeight: 1.67px */
const EditIcon = () => <Iconography name="edit-2" size={25} color="#A3A3A3" />;

/* ── Delete Icon (Figma 179:1502 / Component 16:666 / Vector 11:333)
   25×25px container, vector 17.7×19.8px, fill: #DC2626 (rgba(220,38,38,1)) */
const DeleteIcon = () => <Iconography name="delete" size={25} color="#DC2626" />;

export const TableRow: React.FC<TableRowProps> = ({
  vehicleId      = 'Vehicle ID',
  type           = 'Type',
  model          = 'Model',
  capacity       = 'Capacity',
  assignedDriver = 'Assigned Driver',
  status         = 'Info',
  onView,
  onEdit,
  onDelete,
  className      = '',
}) => {
  return (
    <div className={`uedp-tr ${className}`}>
      {/* Vehicle ID Cell — id: 179:1486 */}
      <div className="uedp-tr__cell">
        <span className="uedp-tr__text uedp-tr__text--blue">{vehicleId}</span>
      </div>

      {/* Type Cell — id: 179:1488 */}
      <div className="uedp-tr__cell">
        <span className="uedp-tr__text">{type}</span>
      </div>

      {/* Model Cell — id: 179:1490 */}
      <div className="uedp-tr__cell">
        <span className="uedp-tr__text">{model}</span>
      </div>

      {/* Capacity Cell — id: 179:1492 */}
      <div className="uedp-tr__cell">
        <span className="uedp-tr__text">{capacity}</span>
      </div>

      {/* Assigned Driver Cell — id: 179:1494 */}
      <div className="uedp-tr__cell">
        <span className="uedp-tr__text">{assignedDriver}</span>
      </div>

      {/* Status Cell — id: 179:1496 */}
      <div className="uedp-tr__cell">
        <StatusTag type={status} />
      </div>

      {/* Actions Cell — id: 179:1498 */}
      <div className="uedp-tr__cell">
        {/* Action Icons Frame — id: 179:1499 — gap: 36px, HORIZONTAL */}
        <div className="uedp-tr__action-icons">
          {/* View — id: 179:1500 */}
          <button type="button" className="uedp-tr__action-btn" onClick={onView} aria-label="View">
            <ViewIcon />
          </button>
          {/* Edit — id: 179:1501 */}
          <button type="button" className="uedp-tr__action-btn" onClick={onEdit} aria-label="Edit">
            <EditIcon />
          </button>
          {/* Delete — id: 179:1502 */}
          <button type="button" className="uedp-tr__action-btn" onClick={onDelete} aria-label="Delete">
            <DeleteIcon />
          </button>
        </div>
      </div>
    </div>
  );
};
