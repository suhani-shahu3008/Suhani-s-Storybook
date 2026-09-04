import React from 'react';
import './Avatars.css';

/* ============================================================
   Figma: Avatars Component
   Size properties: Big (120px) | Small (60px)
   Status properties: Online | Offline | Busy | InTransit
   ============================================================ */

export type AvatarSize = 'Big' | 'Small';
export type AvatarStatus = 'Online' | 'Offline' | 'Busy' | 'InTransit';

export interface AvatarsProps {
  /** Size of avatar: Big (120px) | Small (60px) */
  size?: AvatarSize;
  /** Boolean toggle to display or hide the status indicator dot */
  showStatus?: boolean;
  /** Online status indicator: Online | Offline | Busy | InTransit */
  status?: AvatarStatus;
  /** Display initials when no image is provided */
  initials?: string;
  /** User name for accessibility/tooltip */
  name?: string;
  /** Image URL for avatar picture */
  imageUrl?: string;
  className?: string;
}

export const Avatars: React.FC<AvatarsProps> = ({
  size = 'Big',
  showStatus = true,
  status = 'Online',
  initials = 'SS',
  name = 'Suhani Shahu',
  imageUrl,
  className = '',
}) => {
  const sz = size.toLowerCase();
  const st = status ? status.toLowerCase() : '';

  return (
    <div
      className={`uedp-avatar uedp-avatar--${sz} ${className}`}
      title={name}
      aria-label={name}
    >
      {imageUrl ? (
        <img src={imageUrl} alt={name} className="uedp-avatar__img" />
      ) : (
        <div className="uedp-avatar__initials">{initials}</div>
      )}
      {showStatus && status && (
        <span
          className={`uedp-avatar__status uedp-avatar__status--${st}`}
          aria-label={`Status: ${status}`}
        />
      )}
    </div>
  );
};

/* Backwards compatibility aliases */
export const Avatar = Avatars;
export const BigAvatars = Avatars;
