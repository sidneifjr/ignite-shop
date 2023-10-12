import { styled } from '@stitches/react'

import { fadeIn } from '@/keyframes'

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
    transition: 'transform cubic-bezier(0.33, 1, 0.68, 1) 0.25s',
  },
})

export const CloseCartBtn = styled('button', {
  width: '1.5rem',
  height: '1.5rem',
  background: 'transparent',
  border: 'none',
  position: 'absolute',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  alignSelf: 'flex-end',
  cursor: 'pointer',
})

export const CartImageWrapper = styled('div', {
  width: '6.37138rem',
  height: '5.8125rem',
  borderRadius: '0.5rem',
  background: 'linear-gradient(180deg, #1EA483 0%, #7465D4 100%)',
  position: 'relative',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

  '.badge': {
    width: '1.5rem',
    height: '1.5rem',
    fontSize: '0.875rem',
    fontWeight: 700,
    textAlign: 'center',
    color: '$white',
    background: '$green500',
    borderRadius: '62.5rem',
    position: 'absolute',
    bottom: -10,
    right: -10,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    opacity: 0,
    transition: 'opacity ease-in-out 0.2s',
    animation: `${fadeIn} 200ms`,
    animationFillMode: 'forwards',
  },
})

export const CartTitle = styled('strong', {
  fontSize: '1.25rem',
  lineHeight: '160%',
  fontWeight: 700,
  color: '$gray100',
})

export const CartList = styled('ul', {
  marginTop: '2.03rem',
  display: 'flex',
  flexDirection: 'column',
  gap: '1.5rem',
  flex: 1,
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
})

export const EmptyCartWrapper = styled('div', {
  marginTop: '2.03rem',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  gap: '2rem',
  flex: 1,

  /* width */
  '&::-webkit-scrollbar': {
    width: '5px',
  },

  /* Track */
  '&::-webkit-scrollbar-track': {
    background: 'transparent',
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
})

export const CartListItem = styled('li', {
  display: 'flex',
  gap: '1.25rem',
  opacity: 0,
  animation: `${fadeIn} 200ms`,
  animationFillMode: 'forwards',
})

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
})

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
})

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
})
