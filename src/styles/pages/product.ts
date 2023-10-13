import { styled } from '..'

export const ProductContainer = styled('main', {
  maxWidth: '100rem',
  margin: '0 auto',
  display: 'flex',
  gap: '4rem',
})

export const ImageContainer = styled('div', {
  minWidth: 676,
  height: '656px',
  border: 'solid 1px $green500',
  padding: '0.25rem',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  img: {
    objectFit: 'cover',
  },
})

export const ProductDetails = styled('div', {
  display: 'flex',
  flexDirection: 'column',

  h1: {
    fontSize: '$2xl',
    color: '$gray300',
  },

  span: {
    marginTop: '1rem',
    display: 'block',
    fontSize: '$2xl',
    color: '$green300',
  },

  p: {
    marginTop: '2.5rem',
    fontSize: '$md',
    lineHeight: 1.6,
    color: '$gray300',
  },

  button: {
    marginTop: 'auto',
  },
})
