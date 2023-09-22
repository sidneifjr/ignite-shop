import { styled } from '..';

export const Container = styled('div', {
  minHeight: '100vh',
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  alignItems: 'flex-start',
});

export const Header = styled('header', {
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
    cursor: 'pointer',
  },
});
