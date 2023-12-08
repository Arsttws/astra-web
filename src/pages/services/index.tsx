import { MainLayout } from '../../../components/MainLayout'
import Link from 'next/link'
import Image from 'next/image'
import { MyServices } from '../../../interfaces/service'

export const getStaticProps = async () => {
  const res = await fetch('http://localhost:4200/services')
  const data = await res.json()


  return{
    props: {services: data}
  }
}

interface ServicePageProps {
  services: MyServices[]
}

export default function Services(services: ServicePageProps) {

  return (
    <MainLayout desc='Услуги' currentPage='services'>
      <div className="services-wrapper">
        <h2 className='services-headline'>Наши услуги</h2>
        <div className='services'>
            {services.services.map((service) => (
              <div key={service.title} className={`${service.title}-service service`}>
                <Link legacyBehavior href={`/services/[title]`} as={`/services/${service.title}`}>
                  <div className='service-wrap'>
                    <div className='service-image'>
                      <Image className='service-image' src={service.img} alt={service.title} fill />
                    </div>
                    <p>{service.headline}</p>
                    <p className='service-description'>{service.body.substring(0, 50)}...</p>
                    <Link legacyBehavior href={`/services/[title]`} as={`/services/${service.title}`}><a className='service-page-link'>Перейти</a></Link>
                  </div>
                </Link>
              </div>
            ))}
          </div>
      </div>
    </MainLayout>
  )
}