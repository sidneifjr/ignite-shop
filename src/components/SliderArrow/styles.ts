import { styled } from '@/styles'

export const ArrowWrapper = styled('div', {
  height: '100vh',
  width: '4.5rem',
  position: 'absolute',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  cursor: 'pointer',
  transition:
    'width cubic-bezier(0.33, 1, 0.68, 1) 0.25s, opacity cubic-bezier(0.33, 1, 0.68, 1) 0.25s',

  '&:hover': {
    width: '8.5rem',
  },

  '&.disabled': {
    opacity: 0.4,
  },

  variants: {
    position: {
      left: {
        background:
          'linear-gradient(-90deg, rgba(18, 18, 20, 0.00) 0%, rgba(18, 18, 20, 0.75) 100%)',
        left: 0,
      },

      right: {
        background:
          'linear-gradient(90deg, rgba(18, 18, 20, 0.00) 0%, rgba(18, 18, 20, 0.75) 100%)',
        right: 0,
      },
    },
  },
})
