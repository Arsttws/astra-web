import { MainLayout } from "../../components/MainLayout";
import style  from '../../styles/notFound.module.scss';
import Link from "next/link";

export default function Custom404() {
    return (
    <MainLayout desc="error :)" currentPage="404">
        <div className={style.errorWrapper}>
            <h2 className={style.hedline}>К сожалению, данная страница не найдена :(</h2>
            <div className={style.navigation}>
                <p className={style.navigationHeadline}>Возможно вы имелт в виду одну из этих страниц:</p>
                <nav className={style.nav}>
                    <Link legacyBehavior href={'/index'}><a className={style.link}>Главная</a></Link>
                    <Link legacyBehavior href={'/services'}><a className={style.link}>Услуги</a></Link>
                    <Link legacyBehavior href={'/projects'}><a className={style.link}>Проекты</a></Link>
                    <Link legacyBehavior href={'/solutions'}><a className={style.link}>Пакеты решений</a></Link>
                    <Link legacyBehavior href={'/contacts'}><a className={style.link}>Контакты</a></Link>
                    <Link legacyBehavior href={'/about'}><a className={style.link}>О нас</a></Link>
                    <Link legacyBehavior href={'/reviews'}><a className={style.link}>Отзывы</a></Link>
                    <Link legacyBehavior href={'/connect'}><a className={style.link}>Связаться с нами</a></Link>
                </nav>
            </div>
        </div>
    </MainLayout>
    )
  }