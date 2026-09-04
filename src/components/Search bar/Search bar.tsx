import React, { useState, useRef } from 'react';
import { Iconography } from '../Iconography/Iconography';
import './Search bar.css';

/* ============================================================
   Figma Node ID: 42:5064  —  Canvas: "Search bar"
   Component Sets: 44:5165 (With Cancel) & 44:5271 (Without Cancel)
   States: Default | Hovered | Focused | Pressed | Disabled | Typing | Filled | Error
   Zero additions — all properties extracted A to Z from Figma
   ============================================================ */

export type SearchBarState =
  | 'Default'
  | 'Hovered'
  | 'Focused'
  | 'Pressed'
  | 'Disabled'
  | 'Typing'
  | 'Filled'
  | 'Error';

export interface SearchBarProps {
  /** Figma State variant */
  state?: SearchBarState;
  /** Figma Component Set: 44:5165 (true = with Cancel icon) vs 44:5271 (false) */
  showCancel?: boolean;
  /** Input placeholder text — Figma default: "Search in Shipments..." */
  placeholder?: string;
  /** Current text value */
  value?: string;
  /** Change handler */
  onChange?: (val: string) => void;
  /** Cancel / Clear button click handler */
  onCancel?: () => void;
  /** Error message or custom placeholder for Error state */
  errorText?: string;
  className?: string;
}

/* ── 36×36px Search Icon (Matches Figma Instance "Search") ── */
export const SearchIcon: React.FC<{ size?: number; color?: string }> = ({
  size = 36,
  color = '#171717',
}) => <Iconography name="search" size={size} color={color} />;

/* ── 36×36px Cancel Icon (Matches Figma Instance "Cancel" node 44:5246) ── */
export const CancelIcon: React.FC<{ size?: number; color?: string }> = ({
  size = 36,
  color = '#171717',
}) => (
  <span style={{ display: 'block', flexShrink: 0, cursor: 'pointer' }}>
    <Iconography name="cancel" size={size} color={color} />
  </span>
);

export const SearchBar: React.FC<SearchBarProps> = ({
  state = 'Default',
  showCancel = true,
  placeholder = 'Search in Shipments...',
  value,
  onChange,
  onCancel,
  errorText = 'Delivery Route*',
  className = '',
}) => {
  const [internalVal, setInternalVal] = useState(
    state === 'Filled' || state === 'Typing' ? 'Delivery Route' : ''
  );

  const inputRef = useRef<HTMLInputElement>(null);
  const isControlled = value !== undefined;
  const currentVal = isControlled ? value : internalVal;

  const isDisabled = state === 'Disabled';
  const isError = state === 'Error';
  const isTyping = state === 'Typing';

  /* Icon color determined by state in Figma */
  const iconColor = isDisabled ? '#A3A3A3' : '#171717';
  const cancelIconColor = isError ? '#DC2626' : isDisabled ? '#A3A3A3' : '#171717';

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!isControlled) {
      setInternalVal(e.target.value);
    }
    onChange?.(e.target.value);
  };

  const handleClear = () => {
    if (!isControlled) {
      setInternalVal('');
    }
    onCancel?.();
    onChange?.('');
    inputRef.current?.focus();
  };

  const st = state.toLowerCase();

  const containerClasses = [
    'uedp-search-bar',
    `uedp-search-bar--${st}`,
    className,
  ].filter(Boolean).join(' ');

  return (
    <div className={containerClasses}>
      {/* Search Field (Inner Frame) */}
      <div className="uedp-search-bar__field">
        {/* Search Icon */}
        <SearchIcon size={36} color={iconColor} />

        {/* Input or Error display */}
        {isError ? (
          <span className="uedp-search-bar__error-text">{errorText}</span>
        ) : isTyping ? (
          <div className="uedp-search-bar__typing-wrapper">
            <span className="uedp-search-bar__typing-text">{currentVal || 'Delivery Route'}</span>
            <span className="uedp-search-bar__cursor" />
          </div>
        ) : (
          <div className="uedp-search-bar__input-container">
            <input
              ref={inputRef}
              type="text"
              className="uedp-search-bar__input"
              placeholder={placeholder}
              value={currentVal}
              disabled={isDisabled}
              onChange={handleInputChange}
            />
          </div>
        )}
      </div>

      {/* Cancel Icon Button (Figma node 44:5165 or Error state) */}
      {(showCancel || isError) && (
        <button
          type="button"
          className="uedp-search-bar__cancel-btn"
          disabled={isDisabled}
          onClick={handleClear}
          aria-label="Clear search"
        >
          <CancelIcon size={36} color={cancelIconColor} />
        </button>
      )}
    </div>
  );
};
