import CountUp from 'react-countup';
import { useState } from 'react';
import ScrollTrigger from 'react-scroll-trigger';
import localFont from 'next/font/local'

import styles from '../styles/counter.module.scss'


const jost = localFont({
    src: '../src/fonts/Jost/Jost-Regular.ttf',
    display: 'swap',
})


export default function Counter(){
    const [counterOn, setCounterOn] = useState(false)



    return(
        <div className={styles.counter}>
            <div className={styles.counterWrapper}>
                <h2 className={`${styles.headline} ${jost.className}`}>Почему мы</h2>
                <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
                    <div className="projects">
                        <p className={jost.className}>
                            { counterOn && <CountUp start={0}  end={30} duration={2} delay={0}/> }+
                        </p>
                        <p>Успешных проектов</p>
                    </div>
                    <div className="years">
                        <p className={jost.className}>
                            { counterOn && <CountUp start={0}  end={6} duration={2} delay={0}/> }+
                        </p>
                        <p>Лет в разработке</p>
                    </div>
                    <div className="reviews">
                        <p className={jost.className}>
                            { counterOn && <CountUp start={0}  end={98} duration={2} delay={0}/> }%
                        </p>
                        <p>Положительных отзывов</p>
                    </div>
                </ScrollTrigger>
            </div>
        </div>
    )
}