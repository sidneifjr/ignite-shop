import { styled } from '@/styles'

export const SuccessContainer = styled('main', {
  height: 656,
  width: '100%',
  maxWidth: 590,
  margin: '4rem auto 0',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',

  h1: {
    fontSize: '$2xl',
    lineHeight: '140%',
    color: '$gray100',
    marginTop: '1.5rem',
  },

  p: {
    maxWidth: '36.875rem',
    fontSize: '$xl',
    lineHeight: '140%',
    color: '$gray300',
    textAlign: 'center',
    marginTop: '2rem',
  },

  a: {
    display: 'block',
    marginTop: '5rem',
    fontSize: '$lg',
    color: '$green500',
    textDecoration: 'none',
    fontWeight: 'bold',

    '&:hover': {
      color: '$green300',
    },
  },
})

export const ImageContainer = styled('div', {
  width: '100%',
  maxWidth: '8.75rem',
  height: '8.75rem',
  border: 'solid 1px $green500',
  borderRadius: '50%',

  padding: '4.04rem 4.91rem',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  img: {
    objectFit: 'cover',
  },
})

export const ImageHolder = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  div: {
    marginLeft: '-2.94594rem',
  },
})
