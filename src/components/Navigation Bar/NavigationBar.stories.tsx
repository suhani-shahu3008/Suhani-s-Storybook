import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Iconography, ICONOGRAPHY_NAMES } from '../Iconography/Iconography';
import type { IconographyName } from '../Iconography/Iconography.defs';

/* ============================================================
   Figma Node IDs:
     36:3500 — Component Set: "Navigation bar Menu"
                15 Variants: State × Type (Collapsed, Expanded)
                × Menu Type (Menu, Sub Menu — Expanded only)
     41:4732 — "Side Navigation Bar - Collapsed"          (Frame × No. of Icons 1-6)
     41:4745 — "Side Navigation Bar - Expanded"            (Frame × No. of Icons 1-6)
     41:4756 — "Side Navigation Bar - Expanded (Sub menu)" (Frame × No. of Sub-menus 1-5)

   Single-file component: one NavigationBar carries every property from
   all 4 Figma node sets above — State/Type/MenuType/Icon/Text (single
   item) plus Frame/Count (stacked "side navigation bar" groups).
   Zero additions — every property extracted A to Z from Figma
   ============================================================ */

// ==========================================================================
// TYPES
// ==========================================================================

export type NavigationBarState = 'Default' | 'Hover' | 'Focus' | 'Pressed' | 'Disabled';
export type NavigationBarType = 'Collapsed' | 'Expanded';
export type NavigationBarMenuType = 'Menu' | 'Sub Menu';
export type NavigationBarIcon = IconographyName;
export type NavigationBarCount = 1 | 2 | 3 | 4 | 5 | 6;

export interface NavigationBarProps {
  /** STATE: Default | Hover | Focus | Pressed | Disabled */
  state?: NavigationBarState;
  /** TYPE: Collapsed (60×60px, icon only) | Expanded (icon + text) */
  type?: NavigationBarType;
  /** MENU TYPE (Expanded only): Menu | Sub Menu */
  menuType?: NavigationBarMenuType;
  /** ICON: Existing Iconography icon */
  icon?: NavigationBarIcon;
  /** TEXT: Editable navigation label */
  text?: string;
  /** FRAME (Side Navigation Bar only): True (white card + shadow) | False (plain stack) */
  frame?: boolean;
  /** COUNT (Side Navigation Bar only): 1-6 stacked items. For Menu Type=Sub Menu
   *  this is the number of sub-menu rows nested under the parent item. */
  count?: NavigationBarCount;
  /** ACTIVE ITEM (Side Navigation Bar only): 1-based index of the stacked item
   *  that shows `state`. All other items in the stack stay Default. */
  activeIndex?: number;
  /** Click handler (single item only) */
  onClick?: () => void;
  className?: string;
}

// ==========================================================================
// STYLES
// All values extracted directly from Figma layers & bound variables.
// ==========================================================================

const NAV_BAR_CSS = `
.uedp-nav-bar {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  border: none;
  background-color: transparent;
  cursor: pointer;
  outline: none;
  transition: background-color 0.15s ease, color 0.15s ease;
  font-family: 'Lufga', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  font-weight: 400;
  font-size: 20px;
  line-height: 26.1px;
  color: #171717; /* VariableID:1:373 (neutral-900) */
  user-select: none;
  position: relative;
}

.uedp-nav-bar:disabled {
  cursor: not-allowed;
}

/* TYPE: COLLAPSED (60×60px, icon only) */

.uedp-nav-bar--collapsed {
  width: 60px;
  height: 60px;
  padding: 0;
  border-radius: 0; /* Figma: Default/Disabled have no corner radius bound */
  gap: 0;
}

.uedp-nav-bar__icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;
  flex-shrink: 0;
}

.uedp-nav-bar--collapsed.uedp-nav-bar--default {
  color: #171717;
  background-color: transparent;
}

.uedp-nav-bar--collapsed.uedp-nav-bar--hover {
  color: #3B82F6; /* VariableID:1:501 (blue-500) */
  background-color: #F5F5F5; /* VariableID:1:365 (neutral-100) */
  border-radius: 9999px; /* VariableID:1:582 */
}

.uedp-nav-bar--collapsed.uedp-nav-bar--focus {
  color: #3B82F6;
  background-color: #F1F5F9; /* VariableID:1:332 */
  border-radius: 9999px;
}

.uedp-nav-bar--collapsed.uedp-nav-bar--pressed {
  color: #1D4ED8; /* VariableID:1:503 (blue-700) */
  background-color: #F1F5F9;
  border-radius: 9999px;
}

.uedp-nav-bar--collapsed.uedp-nav-bar--disabled {
  color: #A3A3A3; /* VariableID:1:368 (neutral-400) */
  background-color: transparent;
}

/* TYPE: EXPANDED — Menu Type=Menu (icon + text, 203×60px)
   Figma: itemSpacing 6, paddingLeft 0, paddingRight 8, radius 9999 (always) */

.uedp-nav-bar--expanded {
  width: 203px;
  height: 60px;
  padding: 0 8px 0 0;
  border-radius: 9999px; /* VariableID:1:582 — always rounded, even at Default */
  gap: 6px;
  justify-content: flex-start;
}

.uedp-nav-bar--expanded .uedp-nav-bar__text {
  flex: 1;
  font-size: 20px;
  font-weight: 400;
  line-height: 26.1px;
  text-align: left;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.uedp-nav-bar--expanded.uedp-nav-bar--default:not(.uedp-nav-bar--sub-menu) {
  color: #171717;
  background-color: transparent;
}

.uedp-nav-bar--expanded.uedp-nav-bar--hover:not(.uedp-nav-bar--sub-menu) {
  color: #3B82F6;
  background-color: #F5F5F5;
}

.uedp-nav-bar--expanded.uedp-nav-bar--focus:not(.uedp-nav-bar--sub-menu) {
  color: #3B82F6;
  background-color: #F1F5F9;
}

.uedp-nav-bar--expanded.uedp-nav-bar--pressed:not(.uedp-nav-bar--sub-menu) {
  color: #1D4ED8;
  background-color: #F1F5F9;
}

.uedp-nav-bar--expanded.uedp-nav-bar--disabled:not(.uedp-nav-bar--sub-menu) {
  color: #A3A3A3;
  background-color: transparent;
}

/* TYPE: EXPANDED — Menu Type=Sub Menu (154×56px)
   Figma: absolutely-positioned — connector line (27×41) at top-left,
   pill (icon 30×30 + text) inset left:33px, top:26px, height:30px,
   pill padding 4px, gap 2px, radius 9999.
   Icon/text color is ALWAYS #171717 (only the pill fill changes per
   state); Disabled dims icon/text to #A3A3A3 but the connector line
   stays #171717 regardless of state (per Figma). */

.uedp-nav-bar--sub-menu {
  width: 154px;
  height: 56px;
  padding: 0;
  border-radius: 0;
  justify-content: flex-start;
  align-items: flex-start;
  color: #171717;
}

.uedp-nav-bar__connector {
  position: absolute;
  top: 0;
  left: 0;
  stroke: #171717; /* VariableID:1:373 — constant across all states */
  flex-shrink: 0;
}

.uedp-nav-bar__sub-menu-pill {
  position: absolute;
  left: 33px;
  top: 26px;
  height: 30px;
  display: inline-flex;
  align-items: center;
  gap: 2px;
  padding: 0 4px;
  border-radius: 9999px;
  box-sizing: border-box;
}

.uedp-nav-bar__sub-menu-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  flex-shrink: 0;
}

.uedp-nav-bar__sub-menu-text {
  font-family: 'Lufga', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  font-size: 12px;
  font-weight: 400;
  line-height: 15.66px;
  padding: 5px 8px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.uedp-nav-bar--sub-menu.uedp-nav-bar--default .uedp-nav-bar__sub-menu-pill {
  background-color: transparent;
}

.uedp-nav-bar--sub-menu.uedp-nav-bar--hover .uedp-nav-bar__sub-menu-pill {
  background-color: #F5F5F5;
}

.uedp-nav-bar--sub-menu.uedp-nav-bar--focus .uedp-nav-bar__sub-menu-pill {
  background-color: #F1F5F9;
}

.uedp-nav-bar--sub-menu.uedp-nav-bar--pressed .uedp-nav-bar__sub-menu-pill {
  background-color: transparent;
}

.uedp-nav-bar--sub-menu.uedp-nav-bar--disabled .uedp-nav-bar__sub-menu-pill {
  background-color: transparent;
}

.uedp-nav-bar--sub-menu.uedp-nav-bar--disabled .uedp-nav-bar__sub-menu-icon,
.uedp-nav-bar--sub-menu.uedp-nav-bar--disabled .uedp-nav-bar__sub-menu-text {
  color: #A3A3A3;
}

/* ==========================================================================
   SIDE NAVIGATION BAR — stacked groups (Frame × Count)
   41:4732 Collapsed / 41:4745 Expanded / 41:4756 Expanded (Sub menu)
   ========================================================================== */

.uedp-side-nav {
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  background-color: transparent;
}

/* Collapsed card: Figma 41:4732 Frame=True — white pill (radius 9999),
   inset ~29px sides / 32px top-bottom, gap 40px between items,
   shadow 4px 4px 10.9px rgba(0,0,0,0.25) */
.uedp-side-nav--collapsed {
  gap: 40px;
}

.uedp-side-nav--collapsed.uedp-side-nav--framed {
  background-color: #FFFFFF; /* VariableID:1:330 */
  border-radius: 9999px; /* VariableID:1:582 */
  padding: 32px 29px;
  box-shadow: 4px 4px 10.9px rgba(0, 0, 0, 0.25);
}

/* Expanded card: Figma 41:4745 Frame=True — white rounded rect (radius 60),
   padding 40px sides / 32px top-bottom, gap 40px between items,
   same shadow */
.uedp-side-nav--expanded {
  gap: 40px;
  align-items: flex-start;
}

.uedp-side-nav--expanded.uedp-side-nav--framed {
  background-color: #FFFFFF;
  border-radius: 60px; /* VariableID:36:3591 */
  padding: 32px 40px;
  box-shadow: 4px 4px 10.9px rgba(0, 0, 0, 0.25);
}

/* Single item: fully rounded (pill), same as the Collapsed card */
.uedp-side-nav--expanded.uedp-side-nav--framed.uedp-side-nav--single {
  border-radius: 9999px;
}

/* Expanded (Sub menu) card: Figma 41:4756 — same card treatment as Expanded,
   containing a parent item + its stacked sub-menu items (overlapped -26px
   so each item's connector line joins into one continuous trunk) + one
   trailing sibling Menu item, gap 40px between the two groups */
.uedp-side-nav--sub-menu-group {
  gap: 40px;
  align-items: flex-start;
}

.uedp-side-nav--sub-menu-group.uedp-side-nav--framed {
  background-color: #FFFFFF;
  border-radius: 60px;
  padding: 32px 40px;
  box-shadow: 4px 4px 10.9px rgba(0, 0, 0, 0.25);
}

.uedp-side-nav__sub-menu-stack {
  display: flex;
  flex-direction: column;
}

.uedp-side-nav__sub-menu-stack > *:not(:first-child) {
  margin-top: -26px;
}
`;

let stylesInjected = false;
const injectNavBarStyles = () => {
  if (stylesInjected || typeof document === 'undefined') return;
  if (document.getElementById('uedp-nav-bar-styles')) {
    stylesInjected = true;
    return;
  }
  const styleEl = document.createElement('style');
  styleEl.id = 'uedp-nav-bar-styles';
  styleEl.textContent = NAV_BAR_CSS;
  document.head.appendChild(styleEl);
  stylesInjected = true;
};

// ==========================================================================
// COMPONENT
// ==========================================================================

/** Renders one Navigation bar Menu item (Figma 36:3500) — used standalone
 *  and as the repeated unit inside stacked Side Navigation Bar groups. */
const NavBarItem: React.FC<{
  state: NavigationBarState;
  type: NavigationBarType;
  menuType: NavigationBarMenuType;
  icon: NavigationBarIcon;
  text: string;
  onClick?: () => void;
  className?: string;
}> = ({ state, type, menuType, icon, text, onClick, className = '' }) => {
  const isDisabled = state === 'Disabled';
  const isSubMenu = type === 'Expanded' && menuType === 'Sub Menu';

  return (
    <button
      className={[
        'uedp-nav-bar',
        `uedp-nav-bar--${type.toLowerCase()}`,
        `uedp-nav-bar--${state.toLowerCase()}`,
        isSubMenu ? 'uedp-nav-bar--sub-menu' : '',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
      disabled={isDisabled}
      onClick={onClick}
      title={text}
    >
      {isSubMenu ? (
        /* Sub Menu: connector line + pill (icon 30×30 + text), 154×56px */
        <>
          <svg className="uedp-nav-bar__connector" width="32" height="41" viewBox="0 0 32 41" fill="none">
            {/* Starts at x=30 (below the parent item's 60px-wide icon center) and sweeps
                down-left to rejoin the original corner curve feeding into the pill row. */}
            <path d="M30 0C30 15 2 12 2 27C2 32.5228 6.47715 37 12 37H27" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <div className="uedp-nav-bar__sub-menu-pill">
            <div className="uedp-nav-bar__sub-menu-icon">
              <Iconography name={icon} size={12.5} />
            </div>
            <div className="uedp-nav-bar__sub-menu-text">{text}</div>
          </div>
        </>
      ) : (
        /* Collapsed: icon only (60×60px) | Expanded Menu: icon + text */
        <>
          <div className="uedp-nav-bar__icon">
            <Iconography name={icon} size={20} />
          </div>

          {type === 'Expanded' && <div className="uedp-nav-bar__text">{text}</div>}
        </>
      )}
    </button>
  );
};

export const NavigationBar: React.FC<NavigationBarProps> = ({
  state = 'Default',
  type = 'Collapsed',
  menuType = 'Menu',
  icon = 'dashboard',
  text = 'Dashboard',
  frame = false,
  count,
  activeIndex,
  onClick,
  className = '',
}) => {
  injectNavBarStyles();

  const isStack = frame || (count !== undefined && count > 1);

  // Single item (Figma 36:3500) — default behavior when no Frame/Count is set.
  if (!isStack) {
    return <NavBarItem state={state} type={type} menuType={menuType} icon={icon} text={text} onClick={onClick} className={className} />;
  }

  const n = count ?? 1;
  /** 1-based index gets `state`; every other stacked item stays Default. */
  const stateFor = (position: number): NavigationBarState => (activeIndex === position ? state : 'Default');

  // Side Navigation Bar - Expanded (Sub menu) — Figma 41:4756
  if (type === 'Expanded' && menuType === 'Sub Menu') {
    return (
      <div className={['uedp-side-nav', 'uedp-side-nav--sub-menu-group', frame ? 'uedp-side-nav--framed' : '', className].filter(Boolean).join(' ')}>
        <div>
          <NavBarItem state={stateFor(0)} type="Expanded" menuType="Menu" icon={icon} text={text} />
          <div className="uedp-side-nav__sub-menu-stack">
            {Array.from({ length: n }).map((_, i) => (
              <NavBarItem key={i} state={stateFor(i + 1)} type="Expanded" menuType="Sub Menu" icon={icon} text={text} />
            ))}
          </div>
        </div>
        <NavBarItem state={stateFor(n + 1)} type="Expanded" menuType="Menu" icon={icon} text={text} />
      </div>
    );
  }

  // Side Navigation Bar - Collapsed (41:4732) | Expanded (41:4745)
  const stackTypeClass = type === 'Collapsed' ? 'uedp-side-nav--collapsed' : 'uedp-side-nav--expanded';
  return (
    <div
      className={[
        'uedp-side-nav',
        stackTypeClass,
        frame ? 'uedp-side-nav--framed' : '',
        n === 1 ? 'uedp-side-nav--single' : '',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
    >
      {Array.from({ length: n }).map((_, i) => (
        <NavBarItem key={i} state={stateFor(i + 1)} type={type} menuType="Menu" icon={icon} text={text} />
      ))}
    </div>
  );
};

// ==========================================================================
// STORIES
// ==========================================================================

const meta: Meta<typeof NavigationBar> = {
  title: 'Navigation/Navigation Bar',
  component: NavigationBar,
  args: {
    state: 'Default',
    type: 'Collapsed',
    menuType: 'Menu',
    icon: 'dashboard',
    text: 'Dashboard',
    frame: false,
    count: 1,
  },
  argTypes: {
    state: {
      control: 'radio',
      options: ['Default', 'Hover', 'Focus', 'Pressed', 'Disabled'],
      description: 'STATE: Default | Hover | Focus | Pressed | Disabled'
    },
    type: {
      control: 'radio',
      options: ['Collapsed', 'Expanded'],
      description: 'TYPE: Collapsed (60×60px) | Expanded (203×60px)'
    },
    menuType: {
      control: 'radio',
      options: ['Menu', 'Sub Menu'],
      description: 'MENU TYPE (only for Expanded): Menu | Sub Menu'
    },
    icon: {
      control: 'select',
      options: ICONOGRAPHY_NAMES,
      description: 'ICON: Existing Iconography icons'
    },
    text: {
      control: 'text',
      description: 'TEXT: Editable navigation label'
    },
    frame: {
      control: 'boolean',
      description: 'FRAME (Side Navigation Bar): True (white card + shadow) | False (plain stack)'
    },
    count: {
      control: 'select',
      options: [1, 2, 3, 4, 5, 6],
      description: 'COUNT (Side Navigation Bar): 1-6 stacked items (Sub Menu: number of sub-menu rows)'
    },
    activeIndex: {
      control: 'select',
      options: [undefined, 1, 2, 3, 4, 5, 6, 7],
      description: 'ACTIVE ITEM (Side Navigation Bar): 1-based index of the stacked item that shows State — every other item stays Default'
    },
  }
};

export default meta;
type Story = StoryObj<typeof NavigationBar>;

/* ── SUB MENU (Expanded only) ───────────────────────────── */

export const AllStatesSubMenu: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', padding: '20px' }}>
      {(['Default', 'Hover', 'Focus', 'Pressed', 'Disabled'] as NavigationBarState[]).map((s) => (
        <div key={s}>
          <p style={{ margin: '0 0 8px 0', fontSize: '11px', color: '#666' }}>{s}</p>
          <NavigationBar type="Expanded" menuType="Sub Menu" state={s} icon="dashboard" text="Dashboard" />
        </div>
      ))}
    </div>
  )
};

/* ── ALL STATES COMPARISON ──────────────────────────────── */

export const AllStatesCollapsed: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', padding: '20px' }}>
      {(['Default', 'Hover', 'Focus', 'Pressed', 'Disabled'] as NavigationBarState[]).map((s) => (
        <div key={s}>
          <p style={{ margin: '0 0 8px 0', fontSize: '11px', color: '#666' }}>{s}</p>
          <NavigationBar type="Collapsed" state={s} icon="dashboard" />
        </div>
      ))}
    </div>
  )
};

export const AllStatesExpanded: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', padding: '20px' }}>
      {(['Default', 'Hover', 'Focus', 'Pressed', 'Disabled'] as NavigationBarState[]).map((s) => (
        <div key={s}>
          <p style={{ margin: '0 0 8px 0', fontSize: '11px', color: '#666' }}>{s}</p>
          <NavigationBar type="Expanded" state={s} icon="dashboard" text="Dashboard" />
        </div>
      ))}
    </div>
  )
};

/* ── TYPE COMPARISON (Collapsed vs Expanded) ────────────── */

export const TypeComparison: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '24px', flexDirection: 'column', padding: '20px' }}>
      <div>
        <p style={{ margin: '0 0 12px 0', fontSize: '12px', fontWeight: '600' }}>Collapsed (60×60px)</p>
        <NavigationBar type="Collapsed" state="Default" icon="dashboard" text="Dashboard" />
      </div>
      <div>
        <p style={{ margin: '0 0 12px 0', fontSize: '12px', fontWeight: '600' }}>Expanded (203×60px)</p>
        <NavigationBar type="Expanded" state="Default" icon="dashboard" text="Dashboard" />
      </div>
    </div>
  )
};

/* ── SIDE NAVIGATION BAR — Collapsed (41:4732) ──────────── */

export const SideNavCollapsed: Story = {
  name: 'Side Nav — Collapsed',
  render: (args) => <NavigationBar {...args} />,
  args: { type: 'Collapsed', frame: true, count: 4, state: 'Focus', activeIndex: 2 },
};

export const SideNavCollapsedAllCounts: Story = {
  name: 'Side Nav — Collapsed — All Counts',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', padding: '20px' }}>
      <div>
        <p style={{ margin: '0 0 12px 0', fontSize: '12px', fontWeight: 600, color: '#666' }}>Frame = False</p>
        <div style={{ display: 'flex', gap: '24px', alignItems: 'flex-start' }}>
          {([1, 2, 3, 4, 5, 6] as NavigationBarCount[]).map((n) => (
            <NavigationBar key={n} type="Collapsed" frame={false} count={n} />
          ))}
        </div>
      </div>
      <div>
        <p style={{ margin: '0 0 12px 0', fontSize: '12px', fontWeight: 600, color: '#666' }}>Frame = True</p>
        <div style={{ display: 'flex', gap: '24px', alignItems: 'flex-start' }}>
          {([1, 2, 3, 4, 5, 6] as NavigationBarCount[]).map((n) => (
            <NavigationBar key={n} type="Collapsed" frame count={n} />
          ))}
        </div>
      </div>
    </div>
  ),
};

/* ── SIDE NAVIGATION BAR — Expanded (41:4745) ───────────── */

export const SideNavExpanded: Story = {
  name: 'Side Nav — Expanded',
  render: (args) => <NavigationBar {...args} />,
  args: { type: 'Expanded', menuType: 'Menu', frame: true, count: 4, state: 'Focus', activeIndex: 2 },
};

export const SideNavExpandedAllCounts: Story = {
  name: 'Side Nav — Expanded — All Counts',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', padding: '20px' }}>
      <div>
        <p style={{ margin: '0 0 12px 0', fontSize: '12px', fontWeight: 600, color: '#666' }}>Frame = False</p>
        <div style={{ display: 'flex', gap: '24px', alignItems: 'flex-start' }}>
          {([1, 2, 3, 4, 5, 6] as NavigationBarCount[]).map((n) => (
            <NavigationBar key={n} type="Expanded" menuType="Menu" frame={false} count={n} />
          ))}
        </div>
      </div>
      <div>
        <p style={{ margin: '0 0 12px 0', fontSize: '12px', fontWeight: 600, color: '#666' }}>Frame = True</p>
        <div style={{ display: 'flex', gap: '24px', alignItems: 'flex-start' }}>
          {([1, 2, 3, 4, 5, 6] as NavigationBarCount[]).map((n) => (
            <NavigationBar key={n} type="Expanded" menuType="Menu" frame count={n} />
          ))}
        </div>
      </div>
    </div>
  ),
};

/* ── SIDE NAVIGATION BAR — Expanded (Sub menu) (41:4756) ── */

export const SideNavSubMenu: Story = {
  name: 'Side Nav — Sub Menu',
  render: (args) => <NavigationBar {...args} />,
  args: { type: 'Expanded', menuType: 'Sub Menu', frame: true, count: 3, state: 'Focus', activeIndex: 2 },
};

export const SideNavSubMenuAllCounts: Story = {
  name: 'Side Nav — Sub Menu — All Counts',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', padding: '20px' }}>
      <div>
        <p style={{ margin: '0 0 12px 0', fontSize: '12px', fontWeight: 600, color: '#666' }}>Frame = False</p>
        <div style={{ display: 'flex', gap: '24px', alignItems: 'flex-start' }}>
          {([1, 2, 3, 4, 5] as NavigationBarCount[]).map((n) => (
            <NavigationBar key={n} type="Expanded" menuType="Sub Menu" frame={false} count={n} />
          ))}
        </div>
      </div>
      <div>
        <p style={{ margin: '0 0 12px 0', fontSize: '12px', fontWeight: 600, color: '#666' }}>Frame = True</p>
        <div style={{ display: 'flex', gap: '24px', alignItems: 'flex-start' }}>
          {([1, 2, 3, 4, 5] as NavigationBarCount[]).map((n) => (
            <NavigationBar key={n} type="Expanded" menuType="Sub Menu" frame count={n} />
          ))}
        </div>
      </div>
    </div>
  ),
};
