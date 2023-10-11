import { globalCss } from '.'

export const globalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
  },

  body: {
    backgroundColor: '$gray900',
    color: '$gray100',
    '-webkit-font-smoothing': 'antialiased',
    // overflow: 'hidden',

    overflowY: 'scroll',

    /* width */
    '&::-webkit-scrollbar': {
      width: '5px',
    },

    /* Track */
    '&::-webkit-scrollbar-track': {
      background: '#transparent',
    },

    /* Handle */
    '&::-webkit-scrollbar-thumb': {
      background: '$white',
      borderRadius: '0.5rem',
    },

    /* Handle on hover */
    '&::-webkit-scrollbar-thumb:hover': {
      background: '#888',
    },
  },

  'body, input, textarea, button': {
    fontFamily: 'Roboto, sans-serif',
    fontWeight: 400,
  },
})
