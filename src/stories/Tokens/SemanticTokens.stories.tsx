import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { SemanticPalette2Tokens } from '../../styles/tokens-data';

const meta: Meta = {
  title: 'Tokens/Semantic Palette',
  parameters: {
    docs: {
      description: {
        component: 'Semantic Palette — 50 contextual color tokens for Text, Surface, Border, Icon, Feedback and Interaction states, each with a Light and Dark mode value, synced directly from the Figma "Semantic Palette 2" variable collection.'
      }
    }
  }
};

export default meta;

export const AllSemanticTokens: StoryObj = {
  render: () => {
    const [copied, setCopied] = useState<string | null>(null);
    const [mode, setMode] = useState<'light' | 'dark'>('light');

    const copyVar = (v: string) => {
      navigator.clipboard.writeText(`var(${v})`);
      setCopied(v);
      setTimeout(() => setCopied(null), 2000);
    };

    return (
      <div style={{ fontFamily: 'var(--uedp-font-family)', padding: '24px', maxWidth: '1100px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '8px' }}>
          <div>
            <h1 style={{ fontSize: '28px', fontWeight: 600, color: 'var(--uedp-slate-900)', margin: '0 0 8px 0' }}>
              Semantic Palette
            </h1>
            <p style={{ color: 'var(--uedp-slate-500)', fontSize: '14px', marginBottom: 0 }}>
              50 meaningful aliases mapped to foundational colors — Text, Surface, Border, Icon, Feedback and Interaction.
            </p>
          </div>
          <div style={{ display: 'flex', gap: '8px' }}>
            {(['light', 'dark'] as const).map((m) => (
              <button
                key={m}
                onClick={() => setMode(m)}
                style={{
                  padding: '8px 16px',
                  borderRadius: 'var(--uedp-rounded-lg)',
                  border: mode === m ? '1px solid var(--uedp-blue-700)' : '1px solid var(--uedp-slate-200)',
                  background: mode === m ? 'var(--uedp-blue-700)' : '#FFFFFF',
                  color: mode === m ? '#FFFFFF' : 'var(--uedp-slate-700)',
                  fontSize: '13px',
                  fontWeight: 600,
                  textTransform: 'capitalize',
                  cursor: 'pointer'
                }}
              >
                {m} Mode
              </button>
            ))}
          </div>
        </div>

        {copied && (
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
            ✓ Copied <code>{copied}</code>
          </div>
        )}

        <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', marginTop: '24px' }}>
          {Object.entries(SemanticPalette2Tokens).map(([category, tokens]) => (
            <div key={category} style={{
              background: '#FFFFFF',
              borderRadius: 'var(--uedp-rounded-2xl)',
              border: '1px solid var(--uedp-slate-200)',
              padding: '20px',
              boxShadow: 'var(--uedp-shadow-secondary)'
            }}>
              <h3 style={{ margin: '0 0 16px 0', fontSize: '18px', fontWeight: 600, textTransform: 'capitalize', color: 'var(--uedp-slate-800)' }}>
                {category}
              </h3>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '16px' }}>
                {Object.entries(tokens as Record<string, any>).map(([name, data]: [string, any]) => {
                  const varName = mode === 'light' ? data.varName : data.varNameDark;
                  const hex = mode === 'light' ? data.light : data.dark;
                  return (
                    <div
                      key={name}
                      onClick={() => copyVar(varName)}
                      style={{
                        padding: '16px',
                        border: '1px solid var(--uedp-slate-200)',
                        borderRadius: 'var(--uedp-rounded-xl)',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '16px',
                        transition: 'transform 0.15s ease, box-shadow 0.15s ease'
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
                        width: '48px',
                        height: '48px',
                        borderRadius: 'var(--uedp-rounded-lg)',
                        backgroundColor: hex,
                        border: '1px solid rgba(0,0,0,0.1)',
                        flexShrink: 0
                      }} />
                      <div>
                        <div style={{ fontWeight: 600, fontSize: '14px', color: 'var(--uedp-slate-900)' }}>
                          {data.figmaName}
                        </div>
                        <div style={{ fontSize: '12px', color: 'var(--uedp-slate-500)', marginTop: '2px', fontFamily: 'monospace' }}>
                          {varName}
                        </div>
                        <div style={{ fontSize: '11px', color: 'var(--uedp-slate-400)', marginTop: '4px' }}>
                          {hex}
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
