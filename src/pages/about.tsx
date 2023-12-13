import { MainLayout } from "../../components/MainLayout"
import Link from "next/link"
import Image from "next/image"
import expert from '../../public/images/ceo1.jpg'
import dev from '../../public/images/development1.jpg'
import arrowR from '../../public/images/arrow-right.svg'
import localFont from 'next/font/local'

const jost = localFont({
    src: '../fonts/Jost/Jost-Regular.ttf',
    display: 'swap',
  })
  

export default function About() {
    return(
        <MainLayout desc='О нас' currentPage='about'>
                <div className="about-wrapper">
                    <div className="about">
                        <div className="about-first about-text">
                            <div className="text first-text">
                                <h2 className={jost.className}>О нас</h2>
                                <p>
                                    Наши эксперты обладают богатым опытом в создании инновационных и эффективных веб-решений для различных отраслей. Мы предлагаем комплексный подход, начиная с тщательного анализа вашего бизнеса и заканчивая развертыванием уникальных веб-сайтов, спроектированных с учетом всех современных требований и тенденций.
                                </p>
                                <div className="sell-link">
                                    <Link legacyBehavior href={'/services'}><a>Наши услуги</a></Link>
                                    {/* <Link legacyBehavior href={'/services'}><a>Наши услуги<Image src={arrowR} alt={'arrow'}/></a></Link> */}
                                </div>
                            </div>
                            <div className="first-image image">
                                <Image src={expert} alt={'about'}/>
                            </div>
                        </div>
                        <div className="about-second about-text">
                            <div className="text second-text">
                                <h2 className={jost.className}>Почему мы</h2>
                                <p>
                                    Выбирая <a href="https://e-astra-web.vercel.app/">Astra.web</a>, вы получаете не только высококачественные веб-решения, но и надежного партнера, готового сопровождать ваш бизнес на каждом этапе развития. Доверьтесь нам, и ваш сайт станет мощным инструментом для достижения ваших бизнес-целей в виртуальном мире. Свяжитесь с нами сегодня, и давайте вместе создадим успешное будущее вашего онлайн-проекта!
                                </p>
                                <div className="sell-link">
                                    {/* <Link legacyBehavior href={'/connect'}><a>Связаться с нами<Image src={arrowR} alt={'arrow'}/></a></Link> */}
                                    <Link legacyBehavior href={'/connect'}><a>Связаться с нами</a></Link>
                                </div>
                            
                            </div>
                            <div className="second-image image">
                                <Image src={dev} alt={'about'}/>
                            </div>
                        </div>
                    </div>
                </div>
        </MainLayout>
    )
}