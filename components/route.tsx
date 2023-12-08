import localFont from 'next/font/local'

const montserratBold = localFont({
    src: '../src/fonts/montserrat/Montserrat-Black.ttf',
    display: 'swap',
  })

export default function Route() {
    return(
        <div className='Route'>
            <p className="Route-headline">Наша работа пошагово</p>
            <div className="route-steps">
                <div className="first-step step">
                    <p className={`step-number ${montserratBold.className}`}>01</p>
                    <div className="description">
                        <p className="title">Обсуждение</p>
                        <p className='desc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, quia!</p>
                    </div>
                </div>
                <div className="second-step step">
                    <p className={`step-number ${montserratBold.className}`}>02</p>
                    <div className="description">
                        <p className="title">Разработка</p>
                        <p className='desc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, quia!</p>
                    </div>
                </div>
                <div className="third-step step">
                    <p className={`step-number ${montserratBold.className}`}>03</p>
                    <div className="description">
                        <p className="title">Сдача проекта</p>
                        <p className='desc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, quia!</p>
                    </div>
                </div>
            </div>
        </div>
    )
}