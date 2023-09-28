import Image from 'next/image'

export default function Error404() {
  return (
    <div
      style={{
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        flex: 1,
        gap: '2rem',
      }}
    >
      <Image src="/sad.svg" alt="cart empty" width={170} height={170} />
      <h1>404 - Page Not Found</h1>
      <p>Por favor, tente novamente.</p>
    </div>
  )
}
