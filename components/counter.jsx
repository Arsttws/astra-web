import CountUp from 'react-countup';
import { useState } from 'react';
import ScrollTrigger from 'react-scroll-trigger';

import styles from '../styles/counter.module.scss'

export default function Counter(){
    const [counterOn, setCounterOn] = useState(false)

    return(
        <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
            <div className={styles.counter}>
                <p>
                    { counterOn && <CountUp start={0}  end={100} duration={2} delay={0}/> } +
                </p>
            </div>
        </ScrollTrigger>
    )
}