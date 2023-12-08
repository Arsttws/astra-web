import { MainLayout } from "../../components/MainLayout"

export default function About() {
    return(
        <MainLayout desc='Контакты' currentPage='contacts'>
            <div className="contacts-wrapper">
                <h2 className='contacts-headline'>Контакты</h2>
                <div className="contacts">
                    
                </div>
            </div>
        </MainLayout>
    )
}