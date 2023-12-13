import { MainLayout } from '../../components/MainLayout'
import Link from 'next/link'
import Slider from '../../components/slider'
import Image from 'next/image'
import Route from '../../components/route'
import arrowR from '../../public/images/arrow-right.svg'
import { MyServices } from '../../interfaces/service'
import Counter from '../../components/counter'

export const getStaticProps = async () => {
  const res = await fetch('https://mocki.io/v1/c4c3e10d-4cb7-413f-8f37-5f656253ab93')
  const data = await res.json()
  return{
    props: {services: data}
  }
}

interface ServicePageProps {
  services: MyServices[]
}

export default function Index(services: ServicePageProps) {
  
  return (
    <MainLayout desc='Главная' currentPage="index">
      <Slider />
      <div className="mainContent serviceContent">
        <p className='services-headline' id='secondPage'>Наши услуги</p>
        <div className='services'>
          {services.services.map(service => (
            <div key={service.title} className={`${service.title}-service service`}>
              <Link legacyBehavior href={`/services/[title]`} as={`/services/${service.title}`}>
                <div className='service-wrap'>
                  <div className='service-image'>
                    <Image className='service-image' src={service.img} alt={service.title} fill sizes='(max-width: 100%)'/>
                  </div>
                  <p>{service.headline}</p>
                  <p className='service-description'>{service.body.substring(0, 55)}...</p>
                  <Link legacyBehavior href={`/services/[title]`} as={`/services/${service.title}`}><a className='service-page-link'>Перейти</a></Link>
                </div>
              </Link>
            </div>
          ))}
          <div className="more-services">
            <Link legacyBehavior href={'/services'}><a>Все услуги <Image src={arrowR} alt='arrow'/></a></Link>
          </div>
        </div>
      </div>
      <Route />
      <Counter />
    </MainLayout>
  )
}
