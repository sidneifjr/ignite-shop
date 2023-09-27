import { ArrowProps } from '@/interfaces'

import { ArrowWrapper } from './styles'

export const Arrow = ({ position, disabled, onClick }: ArrowProps) => {
  const isDisabled = disabled ? ' arrow--disabled' : ''

  return (
    <ArrowWrapper
      position={position}
      className={isDisabled ? 'disabled' : ''}
      onClick={(e) => onClick(e)}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        style={{
          width: '24px',
          height: '24px',
          fill: '#ffffff',
        }}
      >
        {position === 'left' ? (
          <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
        ) : (
          <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
        )}
      </svg>
    </ArrowWrapper>
  )
}
