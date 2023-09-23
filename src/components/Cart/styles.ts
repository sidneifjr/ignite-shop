import { styled } from '@stitches/react';

export const CartWrapper = styled('aside', {
  width: '100%',
  maxWidth: '30rem',
  height: '100%',
  background: '$black700',
  boxShadow: '-4px 0px 30px 0px $black700',
  padding: '1.5rem',
  position: 'fixed',
  top: 0,
  right: 0,
  display: 'flex',
  flexDirection: 'column',
  zIndex: 9,
  transform: 'translate3d(0,0,0)',

  '&[data-visible="false"]': {
    transform: 'translate3d(100%, 0, 0)',
  },

  '&[data-visible="true"]': {
    transform: 'translate3d(0%, 0, 0)',
    transition: 'transform cubic-bezier(.57,.21,.69, 1.25) 0.25s',
  },
});

export const CloseCartBtn = styled('button', {
  width: '1.5rem',
  height: '1.5rem',
  background: 'transparent',
  border: 'none',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  alignSelf: 'flex-end',
  cursor: 'pointer',
});

export const CartImageWrapper = styled('div', {
  width: '6.37138rem',
  height: '5.8125rem',
  borderRadius: '0.5rem',
  background: 'linear-gradient(180deg, #1EA483 0%, #7465D4 100%)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

export const CartTitle = styled('strong', {
  fontSize: '1.25rem',
  lineHeight: '160%',
  fontWeight: 700,
  color: '$gray100',
  paddingTop: '1.5rem',
});

export const CartList = styled('ul', {
  minHeight: '33rem',
  maxHeight: '33rem',
  marginTop: '2.03rem',
  display: 'flex',
  flexDirection: 'column',
  gap: '1.5rem',
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
});

export const CartListItem = styled('li', {
  display: 'flex',
  gap: '1.25rem',
});

export const CartListItemContent = styled('div', {
  display: 'flex',
  flexDirection: 'column',

  span: {
    fontSize: '1.125rem',
    lineHeight: '160%',
    fontWeight: 400,
    color: '$gray300',
  },

  strong: {
    fontSize: '1.125rem',
    lineHeight: '160%',
    fontWeight: 700,
    color: '$gray300',
  },

  a: {
    fontSize: '1.125rem',
    lineHeight: '160%',
    fontWeight: 700,
    color: '$green500',
    paddingTop: '0.5rem',
    display: 'block',
  },
});

export const CartInfo = styled('ul', {
  display: 'flex',
  flexDirection: 'column',
  gap: '0.44rem',

  li: {
    fontSize: '1rem',
    lineHeight: '160%',
    fontWeight: 400,
    color: '$gray100',
    paddingTop: '0.5rem',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',

    strong: {
      fontSize: '1.125rem',
      lineHeight: '160%',
      fontWeight: 700,
      color: '$gray100',
    },
  },
});

export const CartSubmitBtn = styled('button', {
  width: '100%',
  maxHeight: '4.3125rem',
  fontSize: '1.125rem',
  lineHeight: '160%',
  fontWeight: 700,
  color: '$white',
  textAlign: 'center',
  background: '$green500',
  border: 'none',
  paddingTop: '0.5rem',
  borderRadius: '0.5rem',
  padding: '1.5rem 2rem',
  marginTop: '3.56rem',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  cursor: 'pointer',
});
