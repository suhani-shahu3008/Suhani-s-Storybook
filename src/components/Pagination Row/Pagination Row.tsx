import React from 'react';
import './Pagination Row.css';
import { Pagination } from '../Pagination/Pagination';
import type { PaginationState } from '../Pagination/Pagination';

/* ============================================================
   Figma Node ID: 202:181 — Component: "Pagination Row"
   Structure: Records Label (text) + Pagination (instance, State=Default)
   Layout: Horizontal, align-items center, justify-content space-between,
           padding 0, width fixed (1488 in Figma frame), height hug (60px)
   Records Label: Lufga, 400, 20px / 26.1px (100% intrinsic), color #171717 (neutral-900)
   Zero additions — every property extracted A to Z from Figma
   ============================================================ */

export interface PaginationRowProps {
  /** Figma Property: Records Label#202:6 — default "Showing 1 to 5 of 50 records" */
  recordsLabel?: string;
  /** Pagination instance — Page Number#202:0 */
  pageNumber?: string | number;
  /** Pagination instance — State (default: Default) */
  state?: PaginationState;
  onPrevClick?: () => void;
  onNextClick?: () => void;
  className?: string;
}

export const PaginationRow: React.FC<PaginationRowProps> = ({
  recordsLabel = 'Showing 1 to 5 of 50 records',
  pageNumber = 1,
  state = 'Default',
  onPrevClick,
  onNextClick,
  className = '',
}) => {
  return (
    <div className={`uedp-pagination-row ${className}`}>
      <span className="uedp-pagination-row__records-label">{recordsLabel}</span>
      <Pagination
        state={state}
        pageNumber={pageNumber}
        onPrevClick={onPrevClick}
        onNextClick={onNextClick}
      />
    </div>
  );
};
