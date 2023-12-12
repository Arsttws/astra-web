import { MainLayout } from "../../../components/MainLayout"
import { MySolutions } from "../../../interfaces/solutions"

import Image from 'next/image'
import Link from 'next/link'
import styles from '../../../styles/solutionSingle.module.scss'
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
    const res = await fetch('https://mocki.io/v1/15f89c7f-184e-46cb-a72b-f030a865a1bd')
    const data = await res.json()
  
    const paths = data.map((solution: MySolutions) => {
      return{
        params: {name: solution.name}
      }
    })
  
    return{
      paths,
      fallback: false
    }
  }
  
  export const getStaticProps = async(context: any) => {
    const name = context.params.name
  
    const res = await fetch(`https://mocki.io/v1/15f89c7f-184e-46cb-a72b-f030a865a1bd`)
    const json = await res.json()
    const data = json.find((solution: MySolutions) => solution.name === name)
    
  
    return{
      props: {solution: data}
    }
  }
  
  interface SolutionPageProps {
    solution: MySolutions
  }
  

export default function Solution({solution}: SolutionPageProps) {
  console.log('data', solution)
    return(
        <MainLayout desc="" currentPage="solution">
          <div className={styles.solutionWrapper}>
            <div className={styles.content}>
              <div className={styles.image}>
                <Image src={solution.img} alt={solution.name} fill/>
              </div>
              <div className={styles.main}>
                <h2 className={`${styles.headline} ${jost.className}`}>{solution.title}</h2>
                <p className={styles.body}>{solution.info}</p>
                <div className={styles.advantages}>
                  <ul>
                    <li><span>{solution.desc1}</span></li>
                    <li><span>{solution.desc2}</span></li>
                    <li><span>{solution.desc3}</span></li>
                  </ul>
                </div>
                <p className={styles.price}>от <span>{solution.price}$</span></p>
                <p className={styles.desc4}>{solution.desc4} от <span>39$</span>/месяц</p>
                <p className={styles.priceDesc}>*цена, указанная на сайте не является окончательной и варьируется в зависмости от ряда факторов</p>
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
