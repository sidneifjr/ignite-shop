import { styled } from '..'

export const HomeContainer = styled('main', {
  minHeight: 656,
  display: 'flex',
  justifyContent: 'center',
  width: '100%',
  marginLeft: 'auto',
  paddingRight: '1.25rem',
  paddingBottom: '1.25rem',
  paddingLeft: '1.25rem',
  flex: 1,
  maxWidth: '85%',
  flexWrap: 'wrap',
  gap: '1.5rem',
})

export const Product = styled('div', {
  flexBasis: 'calc(50% - 2rem)',
  border: 'solid 1px $green500',
  minHeight: '43.75rem',
  position: 'relative',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  cursor: 'pointer',
  overflow: 'hidden',

  img: {
    objectFit: 'cover',
  },

  a: {
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },

  footer: {
    position: 'absolute',
    bottom: '0.25rem',
    left: '0.25rem',
    right: '0.25rem',
    padding: '1.4rem 2rem',
    overflow: 'hidden',

    borderRadius: 6,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',

    background: 'rgba(0,0,0,0.6)',

    transform: 'translateY(110%)',
    opacity: 0,
    transition: 'all 0.2s ease-in-out',

    section: {
      display: 'flex',
      flexDirection: 'column',
      gap: '0.25rem',
    },

    strong: {
      fontSize: '$lg',
      lineHeight: '160%',
      fontWeight: 700,
      color: '$gray100',
    },

    span: {
      fontSize: '$xl',
      fontWeight: 'bold',
      color: '$green300',
    },

    button: {
      width: '3.5rem',
      height: '3.5rem',
      border: 'none',
      borderRadius: '0.375rem',
      padding: '0.75rem',
      background: '$green500',
      cursor: 'pointer',
    },
  },

  '&:hover': {
    footer: {
      transform: 'translateY(0%)',
      opacity: 1,
    },
  },
})
