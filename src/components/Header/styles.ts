import { styled } from '@/styles';

export const HeaderWrapper = styled('header', {
  width: '100%',
  maxWidth: 1440,
  padding: '2rem 0',
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
      lineHeight: '160%',
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
    },
  },
});