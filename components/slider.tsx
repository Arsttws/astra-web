import localFont from 'next/font/local'
import Link from 'next/link'
import Image from 'next/image'
import arrowRight from '../public/images/arrow-right.svg'
import sliderImg from '../public/images/sliderImg.png'

const jost = localFont({
    src: '../src/fonts/Jost/Jost-Light.ttf',
    display: 'swap',
  })
const montserrat = localFont({
  src: '../src/fonts/montserrat/Montserrat-Black.ttf',
  display: 'swap',
})

export default function Slider() {
    return(
        <div className="main-content">
            <div className="main-text">
                <div className="dotes">
                    <span className="dote"></span><span className="dote"></span><span className="dote"></span><span className="dote"></span><span className="dote"></span><span className="dote"></span><span className="dote"></span><span className="dote"></span><span className="dote"></span><span className="dote"></span><span className="dote"></span><span className="dote"></span><span className="dote"></span><span className="dote"></span><span className="dote"></span><span className="dote"></span><span className="dote"></span><span className="dote"></span><span className="dote"></span><span className="dote"></span><span className="dote"></span><span className="dote"></span><span className="dote"></span><span className="dote"></span><span className="dote"></span><span className="dote"></span><span className="dote"></span><span className="dote"></span>
                </div>
                <h1 className={jost.className}>
                    <span>Создание</span> и продвижение <span>сайтов</span><br />
                    Разработка эффективных<br />
                    решений <span>для бизнеса</span>
                </h1>
                <Link href={'/services'}>Сделать заказ <Image src={arrowRight} alt='->' />   </Link>
                    <div><p className={montserrat.className}>01</p></div>
                <a href="#secondPage" className='btm-arrow'><Image src={arrowRight} alt='->' className='slider-arrow'/></a>
            </div>
            <div className="slider">
                <Image src={sliderImg} alt='image'/>
            </div>
        </div>
    )
}