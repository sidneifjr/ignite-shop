import { styled } from '@/styles'

export const Button = styled('button', {
  width: '100%',
  maxHeight: '4.3125rem',
  fontSize: '$md',
  lineHeight: '160%',
  fontWeight: 'bold',
  color: '$white',
  textAlign: 'center',
  background: '$green500',
  border: 'none',
  paddingTop: '0.5rem',
  borderRadius: '0.5rem',
  marginTop: '3.56rem',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  cursor: 'pointer',
  backgroundColor: '$green500',
  padding: '1.25rem',

  '&:disabled': {
    opacity: 0.6,
    cursor: 'not-allowed',
  },

  '&:not(:disabled):hover': {
    backgroundColor: '$green300',
  },
})
