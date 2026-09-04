import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { BasePaletteTokens } from '../../styles/tokens-data';

const meta: Meta = {
  title: 'Tokens/Base Color Palette',
  parameters: {
    docs: {
      description: {
        component: 'Base Color Palette Tokens synchronized directly from Figma base-palette-tokens.json. All tokens map directly to CSS variables named --uedp-{family}-{shade}.'
      }
    }
  }
};

export default meta;

export const ColorSwatches: StoryObj = {
  render: () => {
    const [copiedVar, setCopiedVar] = useState<string | null>(null);
    const [search, setSearch] = useState('');

    const copyToClipboard = (varName: string) => {
      navigator.clipboard.writeText(`var(${varName})`);
      setCopiedVar(varName);
      setTimeout(() => setCopiedVar(null), 2000);
    };

    const families = Object.entries(BasePaletteTokens).filter(([fam]) =>
      fam.toLowerCase().includes(search.toLowerCase())
    );

    return (
      <div style={{ fontFamily: 'var(--uedp-font-family)', padding: '24px', maxWidth: '1200px' }}>
        <div style={{ marginBottom: '24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <h1 style={{ margin: 0, fontSize: '28px', fontWeight: 600, color: 'var(--uedp-slate-900)' }}>
              Base Color Palette
            </h1>
            <p style={{ margin: '6px 0 0', color: 'var(--uedp-slate-500)', fontSize: '14px' }}>
              Full palette containing {Object.keys(BasePaletteTokens).length} color families and over 320+ distinct shades.
            </p>
          </div>
          <input
            type="text"
            placeholder="Filter color family (e.g. slate, blue, emerald)..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            style={{
              padding: '10px 16px',
              borderRadius: 'var(--uedp-rounded-lg)',
              border: '1px solid var(--uedp-slate-300)',
              fontSize: '14px',
              width: '320px',
              outline: 'none',
              fontFamily: 'inherit'
            }}
          />
        </div>

        {copiedVar && (
          <div style={{
            position: 'fixed',
            bottom: '24px',
            right: '24px',
            background: 'var(--uedp-slate-900)',
            color: '#fff',
            padding: '12px 20px',
            borderRadius: 'var(--uedp-rounded-xl)',
            boxShadow: 'var(--uedp-shadow-modal)',
            fontSize: '14px',
            fontWeight: 500,
            zIndex: 9999
          }}>
            ✓ Copied <code>{copiedVar}</code> to clipboard
          </div>
        )}

        <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
          {families.map(([family, shades]) => (
            <div key={family} style={{
              background: '#FFFFFF',
              borderRadius: 'var(--uedp-rounded-2xl)',
              border: '1px solid var(--uedp-slate-200)',
              padding: '20px',
              boxShadow: 'var(--uedp-shadow-secondary)'
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                <h3 style={{ margin: 0, fontSize: '18px', fontWeight: 600, textTransform: 'capitalize', color: 'var(--uedp-slate-800)' }}>
                  {family}
                </h3>
                <span style={{ fontSize: '12px', color: 'var(--uedp-slate-400)' }}>
                  {Object.keys(shades).length} tokens
                </span>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(130px, 1fr))', gap: '12px' }}>
                {Object.entries(shades).map(([shade, data]: [string, any]) => {
                  const isLight = ['50', '100', '200', '300', 'white'].includes(shade);
                  return (
                    <div
                      key={shade}
                      onClick={() => copyToClipboard(data.varName)}
                      style={{
                        borderRadius: 'var(--uedp-rounded-xl)',
                        border: '1px solid var(--uedp-slate-200)',
                        overflow: 'hidden',
                        cursor: 'pointer',
                        transition: 'transform 0.15s ease, box-shadow 0.15s ease',
                        background: '#FFFFFF'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'translateY(-2px)';
                        e.currentTarget.style.boxShadow = 'var(--uedp-shadow-primary)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'none';
                        e.currentTarget.style.boxShadow = 'none';
                      }}
                    >
                      <div style={{
                        height: '64px',
                        backgroundColor: `var(${data.varName})`,
                        display: 'flex',
                        alignItems: 'flex-end',
                        padding: '6px 8px',
                        boxSizing: 'border-box'
                      }}>
                        <span style={{
                          fontSize: '11px',
                          fontWeight: 600,
                          color: isLight ? '#0F172A' : '#FFFFFF',
                          opacity: 0.85
                        }}>
                          {shade}
                        </span>
                      </div>
                      <div style={{ padding: '8px', fontSize: '11px' }}>
                        <div style={{ fontWeight: 600, color: 'var(--uedp-slate-800)', fontFamily: 'monospace' }}>
                          {data.hex}
                        </div>
                        <div style={{ color: 'var(--uedp-slate-500)', marginTop: '2px', fontSize: '10px', textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap' }}>
                          {data.varName}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
};
