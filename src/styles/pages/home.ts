import { styled } from '..'

export const HomeContainer = styled('main', {
  display: 'flex',
  width: '100%',
  marginLeft: 'auto',
  minHeight: 656,
  maxHeight: '70vh',
  flex: 1,
})

export const Product = styled('div', {
  background: 'linear-gradient(180deg, #7465d4 0%, #1ea483 100%)',
  borderRadius: 8,
  cursor: 'pointer',
  position: 'relative',

  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

  img: {
    objectFit: 'cover',
  },

  a: {
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
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
