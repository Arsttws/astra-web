import Image from "next/image"
import logoL from '../public/images/logo-light-w-text.svg'
import localFont from 'next/font/local'
import Link from "next/link"
import inst from '../public/images/inst.svg'
import tg from '../public/images/tg.svg'
import viber from '../public/images/viber.svg'
import whatsapp from '../public/images/whatsapp.svg'
import logo from '../public/images/logo-visa.png'


const montserrat = localFont({
    src: '../src/fonts/montserrat/Montserrat-Regular.ttf',
    display: 'swap',
  })

export default function Footer({currentPage = ''}) {
    return(
        <footer className={montserrat.className}>
            <div className="footer-wrapper">
                <div className="top-footer">
                    <div className="company-info">
                        <div className="footer-logo">
                            <div className="logo"><a href="/"><Image src={logoL} alt="logo" /></a></div>
                        </div>
                    </div>
                    <div className="footer-menu">
                        <div className="navigation">
                            <nav>
                                <Link legacyBehavior href={'/'} className="navLink"><a className={`navLink ${currentPage === 'index' ? 'active' : ''}`}>Главная</a></Link>
                                <Link legacyBehavior href={'/services'} className="navLink"><a className={`navLink ${currentPage === 'services' ? 'active' : ''}`}>Услуги</a></Link>
                                <Link legacyBehavior href={'/about'} className="navLink"><a className={`navLink ${currentPage === 'about' ? 'active' : ''}`}>О нас</a></Link>
                                {/* <Link legacyBehavior href={'/contacts'} className="navLink"><a className={`navLink ${currentPage === 'contacts' ? 'active' : ''}`}>Контакты</a></Link> */}
                            </nav>
                        </div>
                    </div>
                    <div className="footer-contacts">
                        <div className="footer-adress">
                            <a href="https://maps.app.goo.gl/pbYhmt72aVygrvhdA" target="_blank">Vulitsa Kuybyshava 18, Minsk</a>
                            <a href="tel: +375251234455">+375251234455</a>
                        </div>
                        <div className="social">
                            <a href="https://www.instagram.com/" target="_blank"><Image src={inst} alt="instagram"/></a>
                            <a href="https://web.telegram.org/a/" target="_blank"><Image src={tg} alt="telegram"/></a>
                            <a href="https://www.whatsapp.com/" target="_blank"><Image src={viber} alt="Whatsapp"/></a>
                            <a href="https://www.viber.com/en/" target="_blank"><Image src={whatsapp} alt="Viber"/></a>
                        </div>
                    </div>
                </div>
            </div>
                <div className="bottom-footer">
                    <div className="bottom-wrapper">
                        <div className="text">
                            <p>© 2019 - 2023 ООО «Чип Сити Плюс», УНП 193096213</p>
                            <p>220088 г. Минск, улица Слесарная, дом 4, офис 6а</p>
                        </div>  
                        <div className="card-pay">
                            <Image src={logo} alt="Логотипы Visa" />
                            <Image src={logo} alt="Логотипы Visa" />
                            <Image src={logo} alt="Логотипы Maestro" />
                            <Image src={logo} alt="Логотипы Mastercard" />
                            <Image src={logo} alt="Логотипы Белкарт" />
                            <Image src={logo} alt="Логотипы Белкарт" />
                            <Image src={logo} alt="Логотип ЕРИП" />
                        </div>
                    </div>
                </div>
        </footer>
    )
}