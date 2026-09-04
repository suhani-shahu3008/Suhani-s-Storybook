import React from 'react';
import './Profile Avatar.css';
import { Avatars } from '../Avatars/Avatars';
import type { AvatarStatus } from '../Avatars/Avatars';

/* ============================================================
   Figma Node ID: 80:8888  —  Component Set: "Profile Avatar"
   Variants: State=Default | Hovered | Focused | Pressed
   Dimensions: 367×88px, radius: 24px, pad: 14/20, gap: 20px
   Avatar: 60×60px with status symbol and showStatus boolean
   Zero additions — every property extracted A to Z from Figma
   ============================================================ */

export type ProfileAvatarState = 'Default' | 'Hovered' | 'Focused' | 'Pressed';

export interface ProfileAvatarProps {
  /** Figma interaction state: Default | Hovered | Focused | Pressed */
  state?: ProfileAvatarState;
  /** Name text — Figma: "Suhani Shahu" (Lufga 20px w400, #171717) */
  name?: string;
  /** Role text — Figma: "Route Planner" (Lufga 12px w400, #A3A3A3) */
  role?: string;
  /** Initials displayed if no image */
  initials?: string;
  /** Avatar image URL */
  imageUrl?: string;
  /** Online status indicator dot: Online | Offline | Busy | InTransit */
  status?: AvatarStatus;
  /** Boolean toggle to display or hide the status symbol dot */
  showStatus?: boolean;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
  className?: string;
}

export const ProfileAvatar: React.FC<ProfileAvatarProps> = ({
  state = 'Default',
  name = 'Suhani Shahu',
  role = 'Route Planner',
  initials = 'SS',
  imageUrl,
  status = 'Online',
  showStatus = true,
  onClick,
  className = '',
}) => {
  const st = state.toLowerCase();

  return (
    <div
      className={`uedp-profile-avatar uedp-profile-avatar--${st} ${className}`}
      onClick={onClick}
      role={onClick ? 'button' : undefined}
      tabIndex={onClick ? 0 : undefined}
    >
      {/* 60×60px Avatar with status symbol */}
      <Avatars
        size="Small"
        initials={initials}
        imageUrl={imageUrl}
        status={status}
        showStatus={showStatus}
        name={name}
      />

      {/* Name and Role Frame (Figma: 133×46px, gap: 4px) */}
      <div className="uedp-profile-avatar__meta">
        <span className="uedp-profile-avatar__name">{name}</span>
        <span className="uedp-profile-avatar__role">{role}</span>
      </div>
    </div>
  );
};
