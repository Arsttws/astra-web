import Link from "next/link"
import Image from "next/image"
import logoL from '../public/images/logo-light-w-text.svg'
import { useState } from "react"
import Burger from "./burgerMenu"
import localFont from 'next/font/local'

const montserrat = localFont({
    src: '../src/fonts/montserrat/Montserrat-Regular.ttf',
    display: 'swap',
  })

export default function Header({currentPage = ''}) {

    return(
        <header className={montserrat.className}>
            <div className="header-wrapper">
                <div className="logo"><a href="/"><Image src={logoL} alt="logo" /></a></div>
                <div className="navigation">
                    <nav>
                        <Link legacyBehavior href={'/'} className="navLink"><a className={`navLink ${currentPage === 'index' ? 'active' : ''}`}>Главная</a></Link>
                        <Link legacyBehavior href={'/services'} className="navLink"><a className={`navLink ${currentPage === 'services' ? 'active' : ''}`}>Услуги</a></Link>
                        <Link legacyBehavior href={'/about'} className="navLink"><a className={`navLink ${currentPage === 'about' ? 'active' : ''}`}>О нас</a></Link>
                        {/* <Link legacyBehavior href={'/contacts'} className="navLink"><a className={`navLink ${currentPage === 'contacts' ? 'active' : ''}`}>Контакты</a></Link> */}
                    </nav>
                </div>

                <Burger />
            </div>
        </header>
    )
}