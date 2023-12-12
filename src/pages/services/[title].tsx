import { MainLayout } from '../../../components/MainLayout'
import { MyServices } from '../../../interfaces/service'

import Image from 'next/image'
import Link from 'next/link'
import styles from '../../../styles/serviceSingle.module.scss'
import localFont from 'next/font/local'

import inst from '../../../public/images/inst.svg'
import tg from '../../../public/images/tg.svg'
import viber from '../../../public/images/viber.svg'
import whatsapp from '../../../public/images/whatsapp.svg'

const jost = localFont({
    src: '../../../src/fonts/Jost/Jost-Regular.ttf',
    display: 'swap',
  })


export const getStaticPaths = async() => {
  const res = await fetch('https://mocki.io/v1/c4c3e10d-4cb7-413f-8f37-5f656253ab93')
  const data = await res.json()

  const paths = data.map((service: MyServices) => {
    return{
      params: {title: service.title}
    }
  })

  return{
    paths,
    fallback: false
  }
}

export const getStaticProps = async(context: any) => {
  const title = context.params.title

  const res = await fetch(`https://mocki.io/v1/c4c3e10d-4cb7-413f-8f37-5f656253ab93`)
  const json = await res.json()
  const data = json.find((service: MyServices) => service.title === title)
  console.log(data)

  return{
    props: {service: data}
  }
}

interface ServicePageProps {
  service: MyServices
}

export default function Service({service}: ServicePageProps) {
  return(
    <MainLayout desc={'service'} currentPage='services'>
      <div className={styles.serviceWrapper}>
        <div className={styles.content}>
          <div className={styles.image}>
            <Image src={service.img} alt={service.headline} fill/>
          </div>
          <div className={styles.main}>
            <h2 className={`${styles.headline} ${jost.className}`}>{service.headline}</h2>
            <p className={styles.body}>{service.body}</p>
            <div className={styles.advantages}>
              <ul>
                <li><span>{service.advantage1}</span></li>
                <li><span>{service.advantage2}</span></li>
                <li><span>{service.advantage3}</span></li>
              </ul>
            </div>
            <span className={styles.line}></span>
            <div className={styles.order}>
              <p className={styles.toOrder}>Для оформления заказа свяжитесь с нами<br />удобным Вам способом:</p>
              <Link href={'/connect'} className={styles.connectLink}>Оставить заявку</Link>
              <a href={'/connect'} className={styles.connectLink}>Позвонить</a>
              <div className={styles.write}>
                <p>Или напишите нам в один из мессенджеров</p>
                <div className={styles.links}>
                  <a href="https://www.instagram.com/" target="_blank"><Image src={inst} alt="instagram"/></a>
                  <a href="https://web.telegram.org/a/" target="_blank"><Image src={tg} alt="telegram"/></a>
                  <a href="https://www.whatsapp.com/" target="_blank"><Image src={viber} alt="Whatsapp"/></a>
                  <a href="https://www.viber.com/en/" target="_blank"><Image src={whatsapp} alt="Viber"/></a>
                </div>
              </div>
            </div>
          </div>
          </div>
      </div>
    </MainLayout>
  )
}