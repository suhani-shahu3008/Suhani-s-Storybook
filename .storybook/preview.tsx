import type { Preview } from '@storybook/react-vite';
import '../src/styles/figma-tokens.css';

const preview: Preview = {
  parameters: {
    options: {
      storySort: {
        order: [
          'Data Display',
          'Inputs',
          'Navigation',
          ['Header', 'Navigation Bar', 'Tab bars', 'Pagination', 'Pagination Row', '*'],
          'Feedback',
          'Visualizations',
          'Charts & Graphs',
          'Layout',
          'Iconography',
          'Tokens',
        ],
      },
    },
    controls: {
      expanded: true,
      matchers: {
        color: /(background|color|fill|stroke)$/i,
        date: /Date$/i,
      },
    },
    docs: {
      toc: true,
    },
    backgrounds: {
      default: 'light',
      values: [
        { name: 'light', value: '#F8FAFC' },
        { name: 'white', value: '#FFFFFF' },
        { name: 'dark', value: '#0F172A' },
      ],
    },
    a11y: {
      test: 'todo',
    },
  },
};

export default preview;
