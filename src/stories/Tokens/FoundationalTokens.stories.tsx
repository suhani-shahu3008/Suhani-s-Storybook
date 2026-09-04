import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { FoundationalTokens } from '../../styles/tokens-data';

const meta: Meta = {
  title: 'Tokens/Foundational Tokens',
  parameters: {
    docs: {
      description: {
        component: 'Foundational Design Tokens extracted directly from Figma foundational-tokens.json. Includes exact scales for Border Radii, Gaps & Spacing, Padding, Opacity, and Max-Widths.'
      }
    }
  }
};

export default meta;

export const AllFoundationalTokens: StoryObj = {
  render: () => {
    const [copied, setCopied] = useState<string | null>(null);

    const copyVar = (v: string) => {
      navigator.clipboard.writeText(`var(${v})`);
      setCopied(v);
      setTimeout(() => setCopied(null), 2000);
    };

    return (
      <div style={{ fontFamily: 'var(--uedp-font-family)', padding: '24px', maxWidth: '1100px' }}>
        <h1 style={{ fontSize: '28px', fontWeight: 600, color: 'var(--uedp-slate-900)', margin: '0 0 8px 0' }}>
          Foundational Design Tokens
        </h1>
        <p style={{ color: 'var(--uedp-slate-500)', fontSize: '14px', marginBottom: '32px' }}>
          Strict geometry, spacing, padding, and layout scale tokens synchronized with Figma variable aliases.
        </p>

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

        <section style={{ marginBottom: '40px' }}>
          <h2 style={{ fontSize: '20px', fontWeight: 600, color: 'var(--uedp-slate-800)', borderBottom: '1px solid var(--uedp-slate-200)', paddingBottom: '8px' }}>
            Border Radius
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '16px', marginTop: '16px' }}>
            {Object.entries(FoundationalTokens.borderRadius).map(([key, data]: [string, any]) => (
              <div
                key={key}
                onClick={() => copyVar(data.varName)}
                style={{
                  padding: '16px',
                  background: '#FFFFFF',
                  border: '1px solid var(--uedp-slate-200)',
                  borderRadius: 'var(--uedp-rounded-xl)',
                  cursor: 'pointer',
                  boxShadow: 'var(--uedp-shadow-secondary)'
                }}
              >
                <div style={{
                  width: '64px',
                  height: '64px',
                  background: 'var(--uedp-blue-500)',
                  borderRadius: `var(${data.varName})`,
                  margin: '0 auto 12px auto'
                }} />
                <div style={{ fontWeight: 600, fontSize: '14px', color: 'var(--uedp-slate-800)', textAlign: 'center' }}>
                  {key} ({data.value})
                </div>
                <div style={{ fontSize: '12px', color: 'var(--uedp-slate-500)', textAlign: 'center', marginTop: '4px' }}>
                  {data.varName}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section style={{ marginBottom: '40px' }}>
          <h2 style={{ fontSize: '20px', fontWeight: 600, color: 'var(--uedp-slate-800)', borderBottom: '1px solid var(--uedp-slate-200)', paddingBottom: '8px' }}>
            Gap / Spacing Scale
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '12px', marginTop: '16px' }}>
            {Object.entries(FoundationalTokens.gap).map(([key, data]: [string, any]) => (
              <div
                key={key}
                onClick={() => copyVar(data.varName)}
                style={{
                  padding: '12px 16px',
                  background: '#FFFFFF',
                  border: '1px solid var(--uedp-slate-200)',
                  borderRadius: 'var(--uedp-rounded-lg)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  cursor: 'pointer'
                }}
              >
                <div>
                  <div style={{ fontWeight: 600, fontSize: '13px', color: 'var(--uedp-slate-800)' }}>
                    {key}
                  </div>
                  <div style={{ fontSize: '11px', color: 'var(--uedp-slate-500)' }}>
                    {data.varName}
                  </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <div style={{
                    width: data.value,
                    height: '16px',
                    background: 'var(--uedp-emerald-500)',
                    borderRadius: '2px',
                    minWidth: '2px'
                  }} />
                  <span style={{ fontSize: '12px', fontWeight: 600, color: 'var(--uedp-slate-700)', minWidth: '40px', textAlign: 'right' }}>
                    {data.value}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section style={{ marginBottom: '40px' }}>
          <h2 style={{ fontSize: '20px', fontWeight: 600, color: 'var(--uedp-slate-800)', borderBottom: '1px solid var(--uedp-slate-200)', paddingBottom: '8px' }}>
            Padding Scale
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '12px', marginTop: '16px' }}>
            {Object.entries(FoundationalTokens.padding).map(([key, data]: [string, any]) => (
              <div
                key={key}
                onClick={() => copyVar(data.varName)}
                style={{
                  padding: '12px 16px',
                  background: '#FFFFFF',
                  border: '1px solid var(--uedp-slate-200)',
                  borderRadius: 'var(--uedp-rounded-lg)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  cursor: 'pointer'
                }}
              >
                <div>
                  <div style={{ fontWeight: 600, fontSize: '13px', color: 'var(--uedp-slate-800)' }}>
                    {key}
                  </div>
                  <div style={{ fontSize: '11px', color: 'var(--uedp-slate-500)' }}>
                    {data.varName} / {data.varNamePadding}
                  </div>
                </div>
                <span style={{ fontSize: '12px', fontWeight: 600, color: 'var(--uedp-slate-700)' }}>
                  {data.value}
                </span>
              </div>
            ))}
          </div>
        </section>

        <section style={{ marginBottom: '40px' }}>
          <h2 style={{ fontSize: '20px', fontWeight: 600, color: 'var(--uedp-slate-800)', borderBottom: '1px solid var(--uedp-slate-200)', paddingBottom: '8px' }}>
            Opacity Scale
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))', gap: '12px', marginTop: '16px' }}>
            {Object.entries(FoundationalTokens.opacity).map(([key, data]: [string, any]) => (
              <div
                key={key}
                onClick={() => copyVar(data.varName)}
                style={{
                  padding: '14px',
                  background: '#FFFFFF',
                  border: '1px solid var(--uedp-slate-200)',
                  borderRadius: 'var(--uedp-rounded-lg)',
                  cursor: 'pointer',
                  textAlign: 'center'
                }}
              >
                <div style={{
                  width: '48px',
                  height: '48px',
                  background: 'var(--uedp-indigo-600)',
                  opacity: `var(${data.varName})`,
                  borderRadius: 'var(--uedp-rounded-md)',
                  margin: '0 auto 8px auto'
                }} />
                <div style={{ fontWeight: 600, fontSize: '13px', color: 'var(--uedp-slate-800)' }}>
                  {key} ({data.raw}%)
                </div>
                <div style={{ fontSize: '11px', color: 'var(--uedp-slate-500)' }}>
                  {data.varName}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 style={{ fontSize: '20px', fontWeight: 600, color: 'var(--uedp-slate-800)', borderBottom: '1px solid var(--uedp-slate-200)', paddingBottom: '8px' }}>
            Max-Width Breakpoints
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginTop: '16px' }}>
            {Object.entries(FoundationalTokens.maxWidth).map(([key, data]: [string, any]) => (
              <div
                key={key}
                onClick={() => copyVar(data.varName)}
                style={{
                  padding: '12px 16px',
                  background: '#FFFFFF',
                  border: '1px solid var(--uedp-slate-200)',
                  borderRadius: 'var(--uedp-rounded-md)',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  cursor: 'pointer'
                }}
              >
                <span style={{ fontWeight: 600, fontSize: '13px', color: 'var(--uedp-slate-800)' }}>
                  {key}
                </span>
                <span style={{ fontFamily: 'monospace', fontSize: '12px', color: 'var(--uedp-slate-600)' }}>
                  {data.value} ({data.varName})
                </span>
              </div>
            ))}
          </div>
        </section>
      </div>
    );
  }
};
