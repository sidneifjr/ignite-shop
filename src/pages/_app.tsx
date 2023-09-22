import type { AppProps } from 'next/app';

import Image from 'next/image';

import { globalStyles } from '@/styles/global';
import { Container, Header } from '@/styles/pages/app';

import logoImg from '../assets/ignite-shop-logo.svg';

// Deve estar no escopo global, para que tais estilos não sejam carregados novamente em cada página.
globalStyles();

export default function App({ Component, pageProps }: AppProps) {
  const { src, width, height } = logoImg;

  return (
    <Container>
      <Header>
        <Image
          src={src}
          width={width}
          height={height}
          alt="logo"
        />

        <button style={{}}>
          <Image
            width={24}
            height={24}
            src="./bag.svg"
            alt=""
          />
        </button>
      </Header>

      <Component {...pageProps} />
    </Container>
  );
}
