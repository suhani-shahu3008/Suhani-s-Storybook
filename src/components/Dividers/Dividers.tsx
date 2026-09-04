import './Dividers.css';
import dividerExtraLarge from './assets/divider-extra-large.svg';
import dividerLarge from './assets/divider-large.svg';
import dividerMedium from './assets/divider-medium.svg';
import dividerSmall from './assets/divider-small.svg';

export type DividerSize = 'Small' | 'Medium' | 'Large' | 'Extra Large';

export interface DividersProps {
  size?: DividerSize;
  className?: string;
}

const dividerAssets: Record<DividerSize, string> = {
  'Extra Large': dividerExtraLarge,
  Large: dividerLarge,
  Medium: dividerMedium,
  Small: dividerSmall,
};

export function Dividers({ size = 'Small', className }: DividersProps) {
  const sizeClass = size.toLowerCase().replace(' ', '-');

  return (
    <div className={`uedp-dividers uedp-dividers--${sizeClass} ${className ?? ''}`}>
      <div className="uedp-dividers__stroke">
        <img alt="" className="uedp-dividers__asset" src={dividerAssets[size]} />
      </div>
    </div>
  );
}
