import './Indicators.css';

export type IndicatorSize = 'Small' | 'Large';
export type IndicatorState = 'Info' | 'Error' | 'Warning' | 'Success' | 'Inactive';

export interface IndicatorsProps {
  size?: IndicatorSize;
  state?: IndicatorState;
  text?: string;
  pulse?: boolean;
  className?: string;
}

export function Indicators({
  size = 'Small',
  state = 'Info',
  text = 'Indicator',
  pulse = false,
  className,
}: IndicatorsProps) {
  return (
    <div className={`uedp-indicators uedp-indicators--${size.toLowerCase()} ${className ?? ''}`}>
      <div
        className={`uedp-indicators__dot uedp-indicators__dot--${state.toLowerCase()}${pulse ? ' uedp-indicators__dot--pulse' : ''}`}
      />
      <div className="uedp-indicators__label">
        <p>{text}</p>
      </div>
    </div>
  );
}
