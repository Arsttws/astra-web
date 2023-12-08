import { MainLayout } from "../../../components/MainLayout"
import Image from "next/image"
import Link from "next/link"
import localFont from 'next/font/local'
import { MySolutions } from "../../../interfaces/solutions"

const jost = localFont({
    src: '../../../src/fonts/Jost/Jost-Regular.ttf',
    display: 'swap',
  })

  export const getStaticProps = async () => {
    const res = await fetch('http://localhost:4200/solutions')
    const data = await res.json()
  
    return{
      props: {solutions: data}
    }
  }
  
  interface SolutionsPageProps {
    solutions: MySolutions[]
  }
  

export default function Solutions(solutions: SolutionsPageProps) {

    return(
        <MainLayout desc="Решения" currentPage="Solutions">
            <div className="solutions-wrapper">
                <h2 className="solutions-headline">Пакеты решений</h2>
                <div className="solutions">
                    {solutions.solutions.map((solution) =>(
                        <div key={solution.title} className={`single-solution ${solution.title}`}>
                            <Link legacyBehavior href={'/solutions/[name]'} as={`solutions/${solution.name}`}>
                                <div className="solution-wrap">
                                    <div className="solution-image">
                                        <Image className="solution-image" src={solution.img} alt={solution.title} fill />
                                    </div>
                                    <p className={`solution-title ${jost.className}`}>{solution.title}</p>
                                    <p className='solution-description'>{solution.info.substring(0, 140)}...</p>
                                    <p className="price">Цена: <span>{solution.price}$</span></p>
                                    <Link legacyBehavior href={`/solutions/[title]`} as={`/solutions/${solution.title}`}><a className='solution-page-link'>Перейти</a></Link>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </MainLayout>
    )
}