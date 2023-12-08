import { MainLayout } from "../../components/MainLayout";
import Image from "next/image";
import unicars from '../../public/images/unicars.png'
import kanso from '../../public/images/kanso.png'
import topka from '../../public/images/topka.png'

export default function Projects() {

    const MyProjects = {
        projects: [
            {
                id: 1,
                title: 'Unicars',
                link: 'https://unicars.by',
                img: unicars
            },
            {
                id: 2,
                title: 'Kanso',
                link: 'https://kanso.by',
                img: kanso
            },
            {
                id: 3,
                title: 'MyTopka',
                link: 'https://mytopka.by',
                img: topka
            },
            {
                id: 4,
                title: 'Unicars',
                link: 'https://unicars.by',
                img: unicars
            },
            {
                id: 5,
                title: 'Kanso',
                link: 'https://kanso.by',
                img: kanso
            },
            {
                id: 6,
                title: 'MyTopka',
                link: 'https://mytopka.by',
                img: topka
            }
        ]
    }

    return(
        <MainLayout desc="Проекты" currentPage="projects">
            <div className="projects-wrapper">
                <h2 className='projects-headline'>Наши проекты</h2>
                <div className="projects">
                    {MyProjects.projects.map((project) => (
                        <div className="single-project">
                            <a href={project.link} target="_blank">
                                <div key={project.title} className="project-image">
                                    <Image className='project-image' src={project.img} alt={project.title} fill/>
                                </div>
                                <p className="project-title">{project.title}</p>
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </MainLayout>
    )
}