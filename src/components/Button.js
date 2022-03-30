import { styled } from 'stitches.config.js'

export const Button = styled('button', {
  display: 'inline-block',
  boxSizing: 'box-sizing',
  border: '1px solid transparent',
  position: 'relative',
  borderRadius: '$base',
  fontWeight: '$semibold',
  textAlign: 'center',
  cursor: 'pointer',
  userSelect: 'none',
  transition: '$fast',

  '&:disabled': {
    cursor: 'not-allowed',
  },

  variants: {
    size: {
      sm: { fontSize: '$sm', padding: '$1 $4' },
      base: { fontSize: '$base', padding: '$2 $6' },
      lg: { fontSize: '$lg', padding: '$3 $8' },
    },
    color: {
      green: {
        $$colorLight: '$colors$green1',
        $$colorDark: '$colors$green9',
        $$colorHover: '$colors$green10',
        $$colorActive: '$colors$green11',
      },
      blue: {
        $$colorLight: '$colors$blue1',
        $$colorDark: '$colors$blue9',
        $$colorHover: '$colors$blue10',
        $$colorActive: '$colors$blue11',
      },
      orange: {
        $$colorLight: '$colors$orange1',
        $$colorDark: '$colors$orange9',
        $$colorHover: '$colors$orange10',
        $$colorActive: '$colors$orange11',
      },
      pro: {
        $$colorLight: '$colors$teal1',
        $$colorDark: '$colors$teal9',
        $$colorHover: '$colors$teal10',
        $$colorActive: '$colors$teal11',
      },
      red: {
        $$colorLight: '$colors$red1',
        $$colorDark: '$colors$red9',
        $$colorHover: '$colors$red10',
        $$colorActive: '$colors$red11',
      },
      pink: {
        $$colorLight: '$colors$pink1',
        $$colorDark: '$colors$pink9',
        $$colorHover: '$colors$pink10',
        $$colorActive: '$colors$pink11',
      },
      gray: {
        $$colorLight: '$colors$gray1',
        $$colorDark: '$colors$gray9',
        $$colorHover: '$colors$gray11',
        $$colorActive: '$colors$gray12',
      },
    },

    ghost: {
      true: {
        backgroundColor: 'transparent',
        borderColor: '$$colorDark',
        color: '$$colorDark',
        '&:hover': {
          color: '$$colorLight',
          backgroundColor: '$$colorHover',
          borderColor: '$$colorHover',
        },
        '&:active': {
          color: '$$colorLight',
          backgroundColor: '$$colorActive',
          borderColor: '$$colorActive',
        },
        '&:disabled': {
          color: '$gray8',
          backgroundColor: 'transparent',
          borderColor: '$gray8',
        },
      },
      false: {
        color: '$$colorLight',
        backgroundColor: '$$colorDark',
        '&:hover': { backgroundColor: '$$colorHover' },
        '&:active': { backgroundColor: '$$colorActive' },
        '&:disabled': {
          color: '$gray3',
          backgroundColor: '$gray8',
        },
      },
    },
  },

  defaultVariants: {
    size: 'base',
    color: 'green',
    ghost: false,
  },
})

export default Button
