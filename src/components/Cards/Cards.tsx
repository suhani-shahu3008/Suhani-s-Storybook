import React from 'react';
import { Iconography } from '../Iconography/Iconography';
import type { IconographyName } from '../Iconography/Iconography.defs';
import './Cards.css';

/* ============================================================
   Figma Node ID: 88:10691  —  Component Set: "Cards"
   4 Variants across Type (Card 1, Card 2, Card 3, Card 4)
   Dimensions: 367×145px, radius: 24px, padding: 12px 20px
   Drop shadow: 4px 4px 10.9px rgba(0,0,0,0.25)
   Structure:
     - Left side of card (gap: 28px, vertical):
         - Title: Lufga 20px w400, #171717
         - Data Frame (gap: 6px, vertical):
             * Metric Value: Lufga 20px w500, #171717
             * Change / Subtitle: Lufga 12px w400 (#22C55E or #F97316)
     - Right side — Card Icon Box (r:12):
         * Card 1: 51.3×51.3px, bg #EFF6FF, Box icon (#2563EB)
         * Card 2: 51.0×51.0px, bg #F0FDF4, Tick icon (#22C55E)
         * Card 3: 45.0×45.0px, bg #FFF7ED, Warning icon (#F97316)
         * Card 4: 45.0×45.0px, bg #EFF6FF, Truck icon (#1D4ED8)
   Zero additions — every property extracted A to Z from Figma
   ============================================================ */

export type CardType = 'Card 1' | 'Card 2' | 'Card 3' | 'Card 4';

export interface CardConfig {
  title: string;
  value: string;
  change: string;
  changeColor: string;
  iconBg: string;
  iconSize: number;
  iconGlyphSize: number;
  iconName: IconographyName;
  iconColor: string;
}

export interface CardsProps {
  /** Figma Variant: "Card 1" | "Card 2" | "Card 3" | "Card 4" */
  type?: CardType;
  /** Custom title override */
  title?: string;
  /** Custom value override */
  value?: string;
  /** Custom change text override */
  change?: string;
  /** Which Iconography icon to show — overrides the variant's default icon */
  iconName?: IconographyName;
  className?: string;
}

const CARD_CONFIGS: Record<CardType, CardConfig> = {
  /* 31.3×31.3px Box Icon (Figma Vector 11:246, Blue #2563EB) */
  'Card 1': {
    title: 'Active Shipments',
    value: '1247',
    change: '+12% from last month',
    changeColor: '#22C55E', /* green-500 */
    iconBg: '#EFF6FF',      /* blue-50 */
    iconSize: 51.3,
    iconGlyphSize: 32,
    iconName: 'box',
    iconColor: '#2563EB',
  },
  /* 32×32px Tick Icon (Figma Instance 96:11248, Green #22C55E) */
  'Card 2': {
    title: 'On-Time Delivery',
    value: '94%',
    change: '+2.1% from last month',
    changeColor: '#22C55E', /* green-500 */
    iconBg: '#F0FDF4',      /* green-50 */
    iconSize: 51.0,
    iconGlyphSize: 32,
    iconName: 'tick',
    iconColor: '#22C55E',
  },
  /* 25×25px Warning Icon (Figma Vector 78:8583, Orange #F97316) */
  'Card 3': {
    title: 'Delayed Routes',
    value: '73',
    change: '-5% from last month',
    changeColor: '#F97316', /* orange-500 */
    iconBg: '#FFF7ED',      /* orange-50 */
    iconSize: 45.0,
    iconGlyphSize: 25,
    iconName: 'warning',
    iconColor: '#F97316',
  },
  /* 25×25px Truck Icon (Figma Vector 11:566, Blue #1D4ED8) */
  'Card 4': {
    title: 'Fleet Utilization',
    value: '68%',
    change: '+3% from last month',
    changeColor: '#22C55E', /* green-500 */
    iconBg: '#EFF6FF',      /* blue-50 */
    iconSize: 45.0,
    iconGlyphSize: 25,
    iconName: 'truck',
    iconColor: '#1D4ED8',
  },
};

export const Cards: React.FC<CardsProps> = ({
  type = 'Card 1',
  title,
  value,
  change,
  iconName,
  className = '',
}) => {
  const config = CARD_CONFIGS[type];
  const displayTitle = title ?? config.title;
  const displayValue = value ?? config.value;
  const displayChange = change ?? config.change;

  return (
    <div className={`uedp-card uedp-card--${type.toLowerCase().replace(' ', '-')} ${className}`}>
      {/* Left side of card (gap: 28px, vertical) */}
      <div className="uedp-card__left">
        <span className="uedp-card__title">{displayTitle}</span>

        {/* Data Frame (gap: 6px, vertical) */}
        <div className="uedp-card__data">
          <span className="uedp-card__value">{displayValue}</span>
          <span
            className="uedp-card__change"
            style={{ color: config.changeColor }}
          >
            {displayChange}
          </span>
        </div>
      </div>

      {/* Right side — Card Icon Box (r:12) */}
      <div
        className="uedp-card__icon-box"
        style={{
          width: `${config.iconSize}px`,
          height: `${config.iconSize}px`,
          backgroundColor: config.iconBg,
        }}
      >
        <Iconography name={iconName ?? config.iconName} size={config.iconGlyphSize} color={config.iconColor} />
      </div>
    </div>
  );
};
