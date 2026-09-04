import React from 'react';
import { Iconography } from '../Iconography/Iconography';
import './Table Header.css';

/* ============================================================
   Figma Node ID: 164:1299  —  Component: "Table Header"
   Dimensions: 1437×64px, layout: HORIZONTAL, space-between
   Left: Text Frame (925×64px, gap: 12px, vertical)
     - Title: "Vehicle List" (Lufga 24px w400, color #171717)
     - Subtitle: "Overview of all fleet vehicles and their operational data" (Lufga 16px w400, color #A3A3A3)
   Right: Buttons Frame (512×53px, gap: 16px, horizontal)
     - Button 1 (id: 164:1286): Secondary Small (160×53px, r:12) with Arrow down icon (Vector 16:625)
     - Button 2 (id: 164:1287): Secondary Small (160×53px, r:12) with Filter icon (Vector 11:283)
     - Button 3 (id: 164:1288): Primary Small (160×53px, r:12) with Plus icon (Vector 11:259)
   ============================================================ */

export interface TableHeaderProps {
  /** Table title text — Figma default: "Vehicle List" (Lufga 24px w400, #171717) */
  title?: string;
  /** Subtitle description — Figma: "Overview of all fleet vehicles and their operational data" (Lufga 16px w400, #A3A3A3) */
  subtitle?: string;
  /** Label for 1st button — Figma default: "Button" */
  button1Label?: string;
  /** Label for 2nd button — Figma default: "Button" */
  button2Label?: string;
  /** Label for 3rd button — Figma default: "Button" */
  button3Label?: string;
  /** Click handler for 1st button */
  onButton1Click?: () => void;
  /** Click handler for 2nd button */
  onButton2Click?: () => void;
  /** Click handler for 3rd button */
  onButton3Click?: () => void;
  className?: string;
}

/* ── Arrow Down Icon (Figma Node 164:1286 / Vector 16:625) ──
   bounds: 14.5×8.2px, fill: #000000, stroke: #000000, strokeWeight: 0.02px
   Container: 20×20px */
const ArrowDownIcon = () => <Iconography name="arrow-down" size={20} color="#000000" />;

/* ── Filter Funnel Icon (Figma Node 164:1287 / Vector 11:283) ──
   bounds: 15.4×14.6px inside 20×20px container
   fills: #FFFFFF (VariableID:1:330), strokes: #000000 (VariableID:1:329)
   strokeWeight: 1.25, strokeCap: ROUND */
const FilterIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" style={{ display: 'block', flexShrink: 0 }} xmlns="http://www.w3.org/2000/svg">
    <path d="M17.7087 10.0002H7.41283H17.7087ZM3.77866 10.0002H2.29199H3.77866ZM17.7087 15.5061H12.9187H17.7087ZM9.28449 15.5061H2.29199H9.28449ZM17.7087 4.4944H15.1212H17.7087ZM11.487 4.4944H2.29199H11.487ZM13.3037 6.31107C13.5422 6.31107 13.7785 6.26408 13.9989 6.17278C14.2193 6.08149 14.4195 5.94767 14.5882 5.77898C14.7569 5.61028 14.8907 5.41002 14.982 5.18961C15.0733 4.9692 15.1203 4.73297 15.1203 4.4944C15.1203 4.25583 15.0733 4.0196 14.982 3.79919C14.8907 3.57878 14.7569 3.37852 14.5882 3.20982C14.4195 3.04113 14.2193 2.90732 13.9989 2.81602C13.7785 2.72472 13.5422 2.67773 13.3037 2.67773C12.8218 2.67773 12.3598 2.86913 12.0191 3.20982C11.6784 3.55051 11.487 4.01259 11.487 4.4944C11.487 4.97621 11.6784 5.43829 12.0191 5.77898C12.3598 6.11967 12.8218 6.31107 13.3037 6.31107ZM5.59533 11.8169C6.07714 11.8169 6.53921 11.6255 6.8799 11.2848C7.22059 10.9441 7.41199 10.482 7.41199 10.0002C7.41199 9.51842 7.22059 9.05635 6.8799 8.71566C6.53921 8.37497 6.07714 8.18357 5.59533 8.18357C5.11352 8.18357 4.65144 8.37497 4.31075 8.71566C3.97006 9.05635 3.77866 9.51842 3.77866 10.0002C3.77866 10.482 3.97006 10.9441 4.31075 11.2848C4.65144 11.6255 5.11352 11.8169 5.59533 11.8169ZM11.1012 17.3236C11.5831 17.3236 12.0453 17.1321 12.386 16.7914C12.7268 16.4506 12.9187 15.988 12.9187 15.5061C12.9187 15.0241 12.7268 14.5624 12.386 14.2216C12.0453 13.8808 11.5831 13.6894 11.1012 13.6894C10.6193 13.6894 10.1573 13.8808 9.81658 14.2215C9.47589 14.5622 9.28449 15.0243 9.28449 15.5061C9.28449 15.9879 9.47589 16.45 9.81658 16.7906C10.1573 17.1313 10.6193 17.3236 11.1012 17.3236Z" fill="white"/>
    <path d="M17.7087 10.0002H7.41283M3.77866 10.0002H2.29199M3.77866 10.0002C3.77866 9.51842 3.97006 9.05635 4.31075 8.71566C4.65144 8.37497 5.11352 8.18357 5.59533 8.18357C6.07714 8.18357 6.53921 8.37497 6.8799 8.71566C7.22059 9.05635 7.41199 9.51842 7.41199 10.0002C7.41199 10.482 7.22059 10.9441 6.8799 11.2848C6.53921 11.6255 6.07714 11.8169 5.59533 11.8169C5.11352 11.8169 4.65144 11.6255 4.31075 11.2848C3.97006 10.9441 3.77866 10.482 3.77866 10.0002ZM17.7087 15.5061H12.9187M12.9187 15.5061C12.9187 15.988 12.7268 16.4506 12.386 16.7914C12.0453 17.1321 11.5831 17.3236 11.1012 17.3236C10.6193 17.3236 10.1573 17.1313 9.81658 16.7906C9.47589 16.45 9.28449 15.9879 9.28449 15.5061M12.9187 15.5061C12.9187 15.0241 12.7268 14.5624 12.386 14.2216C12.0453 13.8808 11.5831 13.6894 11.1012 13.6894C10.6193 13.6894 10.1573 13.8808 9.81658 14.2215C9.47589 14.5622 9.28449 15.0243 9.28449 15.5061M9.28449 15.5061H2.29199M17.7087 4.4944H15.1212M11.487 4.4944H2.29199M11.487 4.4944C11.487 4.01259 11.6784 3.55051 12.0191 3.20982C12.3598 2.86913 12.8218 2.67773 13.3037 2.67773C13.5422 2.67773 13.7785 2.72472 13.9989 2.81602C14.2193 2.90732 14.4195 3.04113 14.5882 3.20982C14.7569 3.37852 14.8907 3.57878 14.982 3.79919C15.0733 4.0196 15.1203 4.25583 15.1203 4.4944C15.1203 4.73297 15.0733 4.9692 14.982 5.18961C14.8907 5.41002 14.7569 5.61028 14.5882 5.77898C14.4195 5.94767 14.2193 6.08149 13.9989 6.17278C13.7785 6.26408 13.5422 6.31107 13.3037 6.31107C12.8218 6.31107 12.3598 6.11967 12.0191 5.77898C11.6784 5.43829 11.487 4.97621 11.487 4.4944Z" stroke="black" strokeWidth="1.25" strokeMiterlimit="10" strokeLinecap="round"/>
  </svg>
);

/* ── Plus Icon (Figma Node 164:1288 / Vector 11:259) ──────────
   bounds: 20×20px, fill: #FFFFFF (VariableID:1:330), no stroke */
const PlusIcon = () => <Iconography name="plus" size={20} color="#FFFFFF" />;

export const TableHeader: React.FC<TableHeaderProps> = ({
  title = 'Vehicle List',
  subtitle = 'Overview of all fleet vehicles and their operational data',
  button1Label = 'Button',
  button2Label = 'Button',
  button3Label = 'Button',
  onButton1Click,
  onButton2Click,
  onButton3Click,
  className = '',
}) => {
  return (
    <div className={`uedp-table-header ${className}`}>
      {/* LEFT FRAME — Text (925×64px, gap: 12px, vertical) */}
      <div className="uedp-table-header__text-frame">
        <h2 className="uedp-table-header__title">{title}</h2>
        <p className="uedp-table-header__subtitle">{subtitle}</p>
      </div>

      {/* RIGHT FRAME — Buttons (512×53px, gap: 16px, horizontal) */}
      <div className="uedp-table-header__buttons-frame">
        {/* Button 1 (164:1286): Secondary, Arrow Down */}
        <button
          type="button"
          className="uedp-table-header__btn uedp-table-header__btn--secondary"
          onClick={onButton1Click}
        >
          <span className="uedp-table-header__btn-label">{button1Label}</span>
          <ArrowDownIcon />
        </button>

        {/* Button 2 (164:1287): Secondary, Filter */}
        <button
          type="button"
          className="uedp-table-header__btn uedp-table-header__btn--secondary"
          onClick={onButton2Click}
        >
          <span className="uedp-table-header__btn-label">{button2Label}</span>
          <FilterIcon />
        </button>

        {/* Button 3 (164:1288): Primary, Plus */}
        <button
          type="button"
          className="uedp-table-header__btn uedp-table-header__btn--primary"
          onClick={onButton3Click}
        >
          <span className="uedp-table-header__btn-label">{button3Label}</span>
          <PlusIcon />
        </button>
      </div>
    </div>
  );
};
