import React from 'react';
import './Header.css';
import { SearchBar } from '../Search bar/Search bar';
import { IconButton } from '../Icon Button/Icon Button';
import { ProfileAvatar } from '../Profile Avatar/Profile Avatar';
import type { AvatarStatus } from '../Avatars/Avatars';

/* ============================================================
   Figma Node ID: 82:9262  —  Component: "Header"
   Dimensions: 1648×88px, layout: HORIZONTAL, gap: 220px
   Left: Logo (71×80px) + Text ("Hello Suhani,", "24 Oct 2025 , 10:53 a.m")
   Right: Search bar (644×88px) + Icon Button (60×60px) + Profile Avatar (367×88px)
   Zero additions — every property extracted A to Z from Figma
   ============================================================ */

export interface HeaderProps {
  /** Figma Boolean Property: Icon Button#82:288 — default true */
  showIconButton?: boolean;
  /** Figma Boolean Property: Search bar#82:289 — default true */
  showSearchBar?: boolean;
  /** Figma Boolean Property: Profile Avatar#82:290 — default true */
  showProfileAvatar?: boolean;
  /** User greeting title — Figma: "Hello Suhani," (Lufga 24px w400, #171717) */
  greeting?: string;
  /** Date and time subtitle — Figma: "24 Oct 2025 , 10:53 a.m" (Lufga 16px w400, #A3A3A3) */
  dateTime?: string;
  /** Search placeholder text */
  searchPlaceholder?: string;
  /** Search value change callback */
  onSearchChange?: (val: string) => void;
  /** Notification icon button click handler */
  onNotificationClick?: () => void;
  /** User profile name — Figma: "Suhani Shahu" (Lufga 20px w400) */
  userName?: string;
  /** User profile role — Figma: "Route Planner" (Lufga 12px w400) */
  userRole?: string;
  /** User profile image URL */
  userImageUrl?: string;
  /** User profile initials */
  userInitials?: string;
  /** User profile online status */
  userStatus?: AvatarStatus;
  /** Boolean toggle to display or hide the status symbol dot */
  showUserStatus?: boolean;
  className?: string;
}

/* ── 71×80px Header Logo (Figma node 81:9179) ─────────────── */
export const HeaderLogo: React.FC<{ className?: string }> = ({ className = '' }) => (
  <svg
    width="71"
    height="81"
    viewBox="0 0 71 81"
    fill="none"
    className={`uedp-header__logo ${className}`}
    style={{ display: 'block', flexShrink: 0 }}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M7.74219 15.2487L34.8531 0L70.4361 19.7669L71.0009 59.8654L67.0472 63.254L45.0196 49.6996L25.8161 59.8654V50.2643L44.4548 39.5338L61.3991 48.57V25.4146L35.4179 10.1658L16.7791 20.8964L7.74219 15.2487Z" fill="#2563EB"/>
    <path d="M45.7496 18.4764V29.2465L26.5461 39.3728L9.03696 29.7718V55.0112L35.0182 69.3055L54.2218 58.5749L63.2587 64.2226L35.583 80.0361L0 59.7045V18.4764L4.51848 16.7821L25.9813 29.7718L45.7496 18.4764Z" fill="#2563EB"/>
  </svg>
);

export const Header: React.FC<HeaderProps> = ({
  showIconButton = true,
  showSearchBar = true,
  showProfileAvatar = true,
  greeting = 'Hello Suhani,',
  dateTime = '24 Oct 2025 , 10:53 a.m',
  searchPlaceholder = 'Search in Shipments...',
  onSearchChange,
  onNotificationClick,
  userName = 'Suhani Shahu',
  userRole = 'Route Planner',
  userImageUrl,
  userInitials = 'SS',
  userStatus = 'Online',
  showUserStatus = true,
  className = '',
}) => {
  return (
    <header className={`uedp-header ${className}`}>
      {/* LEFT SIDE: Logo + Greeting Text Frame (gap: 48px) */}
      <div className="uedp-header__left">
        <HeaderLogo />

        <div className="uedp-header__greeting-frame">
          <h1 className="uedp-header__greeting">{greeting}</h1>
          <p className="uedp-header__datetime">{dateTime}</p>
        </div>
      </div>

      {/* RIGHT SIDE: Search bar + Notification Icon Button + Profile Avatar (gap: 20px) */}
      <div className="uedp-header__right">
        {showSearchBar && (
          <SearchBar
            showCancel={false}
            placeholder={searchPlaceholder}
            onChange={onSearchChange}
          />
        )}

        {showIconButton && (
          <IconButton
            size="Large"
            state="Default"
            onClick={onNotificationClick}
            aria-label="Notifications"
          />
        )}

        {showProfileAvatar && (
          <ProfileAvatar
            name={userName}
            role={userRole}
            initials={userInitials}
            imageUrl={userImageUrl}
            status={userStatus}
            showStatus={showUserStatus}
            state="Default"
          />
        )}
      </div>
    </header>
  );
};
