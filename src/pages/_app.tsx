
import { globalStyles } from '@/styles/global'
import { Container, Header } from '@/styles/pages/app'
import type { AppProps } from 'next/app'
import logoImg from '../assets/logo.svg'

import Image from 'next/image';
import Link from 'next/link';

globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  return (
      <Container>
        <Header>
          <Link
              href={`/`}
            >
            <Image src={logoImg.src} alt='' width={150} height={150}/>
          </Link>
        </Header>

      <Component {...pageProps} />
  
      </Container>
    )
}
