import { createStitches } from '@stitches/react'
import { gray, blue, red, green, pink, teal, orange } from '@radix-ui/colors'

export const { styled, css } = createStitches({
  theme: {
    colors: {
      ...gray,
      ...blue,
      ...red,
      ...green,
      ...pink,
      ...teal,
      ...orange,
    },
    space: {
      1: '4px',
      2: '8px',
      3: '12px',
      4: '16px',
      5: '20px',
      6: '24px',
      7: '28px',
      8: '32px',
      9: '36x',
      10: '40px',
    },
    fontSizes: {
      1: '12px',
      2: '14px',
      3: '16px',
      4: '18px',
      5: '20px',
      6: '24px',
      7: '28px',
      8: '32px',
      9: '40px',

      // semantics tokens
      sm: '$2',
      base: '$3',
      lg: '$4',
    },
    fonts: {
      untitled: 'Untitled Sans, apple-system, sans-serif',
      mono: 'Söhne Mono, menlo, monospace',
    },
    fontWeights: {
      regular: '400',
      semibold: '600',
      bold: '700',
    },
    lineHeights: {},
    letterSpacings: {},
    sizes: {},
    borderWidths: {},
    borderStyles: {},
    radii: {
      none: '0',
      base: '4px',
      lg: '8px',
      xl: '12px',
      '2xl': '16px',
    },
    shadows: {},
    zIndices: {},
    transitions: {
      fast: 'all 0.1s ease-out',
    },

    media: {
      sm: '(min-width: 640px)',
      lg: '(min-width: 768px)',
      xl: '(min-width: 1024px)',
    },
  },
})
