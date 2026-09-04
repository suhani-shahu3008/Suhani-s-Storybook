import './Tab bars.css';

export type TabBarState = 'Default' | 'Active' | 'Hovered' | 'Focused' | 'Pressed' | 'Disabled';
export type SelectedTab = 1 | 2 | 3 | 4 | 5;

export interface TabBarsProps {
  prop1stText?: string;
  prop2ndText?: string;
  prop3rdText?: string;
  prop4thText?: string;
  prop5thText?: string;
  state?: TabBarState;
  selectedTab?: SelectedTab;
  className?: string;
}

export function TabBars({
  prop1stText = 'Tabs',
  prop2ndText = 'Tabs',
  prop3rdText = 'Tabs',
  prop4thText = 'Tabs',
  prop5thText = 'Tabs',
  state = 'Default',
  selectedTab = 1,
  className,
}: TabBarsProps) {
  const tabLabels = [prop1stText, prop2ndText, prop3rdText, prop4thText, prop5thText];
  const hasSelectedTab = state !== 'Default';

  return (
    <div className={`uedp-tab-bars uedp-tab-bars--${state.toLowerCase()} ${className ?? ''}`}>
      {tabLabels.map((label, index) => {
        const isSelected = hasSelectedTab && index + 1 === selectedTab;
        const tabLabel = <div className="uedp-tab-bars__label"><p>{label}</p></div>;

        return (
          <div className="uedp-tab-bars__tab" key={index}>
            {isSelected ? <div className="uedp-tab-bars__selected-tab">{tabLabel}</div> : tabLabel}
          </div>
        );
      })}
    </div>
  );
}
