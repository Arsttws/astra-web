import type { AppProps } from 'next/app'
import 'styles/main.scss'
import 'styles/burger.scss'
import 'styles/slider.scss'
import 'styles/services.scss'
import 'styles/about.scss'
import 'styles/contacts.scss'
import 'styles/reviews.scss'
import 'styles/projects.scss'
import 'styles/solutions.scss'

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';



export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
    </>
  )
}