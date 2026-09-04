import React from 'react';
import { Iconography } from '../Iconography/Iconography';
import './Pagination.css';

/* ============================================================
   Figma Node ID: 202:180 — Component Set: "Pagination"
   5 Variants: State (Default, Hovered, Focused, Pressed, Disabled)
   Structure: Prev (circle 60×60, r:9999) + Page Number (text) + Next (circle 60×60, r:9999)
   Layout: Horizontal, align-items center, gap 24px, padding 0, hug contents
   Colors:
     - Default:  Circle #1D4ED8 (blue-700), Icon #FFFFFF, Text #171717 (neutral-900)
     - Hovered:  Circle #1E40AF (blue-800), Icon #FFFFFF, Text #171717
     - Focused:  Circle #1E40AF (blue-800) + 2px border #1E293B (slate-800), Icon #FFFFFF, Text #171717
     - Pressed:  Circle #1E3A8A (blue-900), Icon #FFFFFF, Text #171717
     - Disabled: Circle #CBD5E1 (slate-300), Icon #94A3B8 (slate-400), Text #94A3B8
   Circle effect: drop-shadow 4px 4px 10.9px rgba(0,0,0,0.15) (Default/Hovered/Focused/Pressed only)
   Text: Lufga, 400, 20px / 26.1px (100% intrinsic)
   Zero additions — every property extracted A to Z from Figma
   ============================================================ */

export type PaginationState = 'Default' | 'Hovered' | 'Focused' | 'Pressed' | 'Disabled';

export interface PaginationProps {
  /** Figma Variant: State=Default | Hovered | Focused | Pressed | Disabled */
  state?: PaginationState;
  /** Figma Property: Page Number#202:0 — default "1" */
  pageNumber?: string | number;
  onPrevClick?: () => void;
  onNextClick?: () => void;
  className?: string;
}

export const Pagination: React.FC<PaginationProps> = ({
  state = 'Default',
  pageNumber = 1,
  onPrevClick,
  onNextClick,
  className = '',
}) => {
  const isDisabled = state === 'Disabled';
  const stateClass = `uedp-pagination--state-${state.toLowerCase()}`;
  const iconColor = isDisabled ? '#94A3B8' : '#FFFFFF';

  return (
    <nav
      className={`uedp-pagination ${stateClass} ${className}`}
      aria-label="Pagination"
      aria-disabled={isDisabled}
    >
      <button
        type="button"
        className="uedp-pagination__btn uedp-pagination__btn--prev"
        disabled={isDisabled}
        onClick={onPrevClick}
        aria-label="Previous Page"
      >
        <Iconography name="left-arrow" size={22} color={iconColor} className="uedp-pagination__icon" />
      </button>

      <span className="uedp-pagination__page-number">{pageNumber}</span>

      <button
        type="button"
        className="uedp-pagination__btn uedp-pagination__btn--next"
        disabled={isDisabled}
        onClick={onNextClick}
        aria-label="Next Page"
      >
        <Iconography name="right-arrow" size={22} color={iconColor} className="uedp-pagination__icon" />
      </button>
    </nav>
  );
};
