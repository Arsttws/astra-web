import Link from "next/link"
import { useState } from "react"

export default function Burger() {
    const [burger, setBurger] = useState(false)

    return(
        <>
            <div className={`burger-menu ${burger ? 'show-menu' : ''}`} onClick={() => setBurger((prev) => !prev)}>
                <span className="line"></span>
                <span className="line"></span>
                <span className="line"></span>
            </div>
            <ul className={`menu-nav ${burger ? 'show-menu' : ''}`}>
                <li><Link legacyBehavior href={'/'}><a className="headerLink">Главная</a></Link></li>        
                <li><Link legacyBehavior href={'/services'}><a className="headerLink">Услуги</a></Link></li>        
                <li><Link legacyBehavior href={'/about'}><a className="headerLink">О нас</a></Link></li>        
                <li><Link legacyBehavior href={'/reviews'} ><a className="navLink">Отзывы</a></Link></li>
                <li><Link legacyBehavior href={'/projects'} ><a className="navLink">Проекты</a></Link></li>
                <li><Link legacyBehavior href={'/services'} ><a className="navLink">Услуги</a></Link></li>
                <li><Link legacyBehavior href={'/solutions'} ><a className="navLink">Пакеты решений</a></Link></li>
                <li><Link legacyBehavior href={'/connect'} ><a className="navLink">Связаться с нами</a></Link></li>
            </ul>
        </>
    )
}