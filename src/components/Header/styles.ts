import { fadeIn } from '@/keyframes'
import { styled } from '@/styles'

export const HeaderElement = styled('header', {
  width: '100%',
  background: '$gray900',
  position: 'sticky',
  top: 0,
  zIndex: 9,
})

export const HeaderWrapper = styled('div', {
  maxWidth: 'calc(100% - 12rem)',
  padding: '3rem 2rem',
  marginRight: 'auto',
  marginLeft: 'auto',
  display: 'flex',
  justifyContent: 'space-between',

  button: {
    width: '3rem',
    height: '3rem',
    border: 'none',
    borderRadius: '0.375rem',
    padding: '0.75rem',
    background: '$gray800',
    position: 'relative',
    cursor: 'pointer',

    span: {
      width: '1.5rem',
      height: '1.5rem',
      fontSize: '0.875rem',
      fontWeight: 700,
      textAlign: 'center',
      color: '$white',
      background: '$green500',
      borderRadius: '62.5rem',
      position: 'absolute',
      top: -10,
      right: -10,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      opacity: 0,
      transition: 'opacity ease-in-out 0.2s',
      animation: `${fadeIn} 200ms`,
      animationFillMode: 'forwards',
    },
  },
})
