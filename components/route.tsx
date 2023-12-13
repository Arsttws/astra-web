import localFont from 'next/font/local'

const montserratBold = localFont({
    src: '../src/fonts/montserrat/Montserrat-Black.ttf',
    display: 'swap',
  })

  const jost = localFont({
    src: '../src/fonts/Jost/Jost-Regular.ttf',
    display: 'swap',
})

export default function Route() {
    return(
        <div className='Route'>
            <p className={`Route-headline ${jost.className}`}>Как это работает</p>
            <div className="route-steps">
                <div className="first-step step">
                    <p className={`step-number ${montserratBold.className}`}>01</p>
                    <div className="description">
                        <p className="title">Определение требований</p>
                        <p className='desc'>Определение целей проекта через обсуждение и анализ</p>
                    </div>
                </div>
                <div className="second-step step">
                    <p className={`step-number ${montserratBold.className}`}>02</p>
                    <div className="description">
                        <p className="title">Проектирование и разработка</p>
                        <p className='desc'>Разработка структуры, дизайна и основных страниц сайта</p>
                    </div>
                </div>
                <div className="third-step step">
                    <p className={`step-number ${montserratBold.className}`}>03</p>
                    <div className="description">
                        <p className="title">Тестирование и оптимизация</p>
                        <p className='desc'>Улучшение производительности и исправление ошибок</p>
                    </div>
                </div>
                <div className="third-step step">
                    <p className={`step-number ${montserratBold.className}`}>04</p>
                    <div className="description">
                        <p className="title">Внедрени и поддержка</p>
                        <p className='desc'>Вывод сайта на рынок, обслуживание сайта для стабильной работы</p>
                    </div>
                </div>
            </div>
        </div>
    )
}