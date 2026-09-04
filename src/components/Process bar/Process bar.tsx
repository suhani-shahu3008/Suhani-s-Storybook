import React from 'react';
import './Process bar.css';

export interface ProcessBarProps {
  /**
   * Process percentage matching Figma variant 'Process'
   */
  process?: '0%' | '10%' | '20%' | '30%' | '40%' | '50%' | '60%' | '70%' | '80%' | '90%' | '100%' | number;
  /**
   * Custom label for Header > Process text node (defaults to "Process")
   */
  label?: string;
  /**
   * Whether to display the percentage string in Header (defaults to true)
   */
  showPercentage?: boolean;
  className?: string;
}

/**
 * Process bar component generated directly from Figma Node ID 71:7902
 * Layer Hierarchy:
 * - Process bar (COMPONENT / COMPONENT_SET)
 *   - Header (FRAME)
 *     - Process (TEXT)
 *     - [Percentage] (TEXT)
 *   - Track (FRAME)
 *     - Active Track (FRAME)
 */
export const ProcessBar: React.FC<ProcessBarProps> = ({
  process = '60%',
  label = 'Process',
  showPercentage = true,
  className = ''
}) => {
  const percentNumber = typeof process === 'number' 
    ? Math.min(100, Math.max(0, process)) 
    : parseInt(process.replace('%', ''), 10) || 0;

  const percentString = typeof process === 'string' && process.includes('%') 
    ? process 
    : `${percentNumber}%`;

  return (
    <div className={`uedp-process-bar-71-7902 ${className}`}>
      {/* Header Layer (id: 71:7826) */}
      <div className="uedp-process-bar__header">
        {/* Left Text Layer: "Process" (id: 71:7827) */}
        <span className="uedp-process-bar__process-label">
          {label}
        </span>

        {/* Right Text Layer: e.g. "60%" (id: 71:7828) */}
        {showPercentage && (
          <span className="uedp-process-bar__percent-label">
            {percentString}
          </span>
        )}
      </div>

      {/* Track Layer (id: 71:7829) */}
      <div className="uedp-process-bar__track">
        {/* Active Track Layer (id: 71:7830) */}
        <div
          className="uedp-process-bar__active-track"
          style={{ width: `${percentNumber}%` }}
        />
      </div>
    </div>
  );
};
