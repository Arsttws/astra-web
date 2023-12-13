import { MainLayout } from "../../components/MainLayout";
import Image from "next/image";
import localFont from 'next/font/local'
import unicars from '../../public/images/unicars.png'
import kanso from '../../public/images/kanso.png'
import topka from '../../public/images/topka.png'
import kvalirem from '../../public/images/kvalirem.png'
import beton from '../../public/images/beton.png'
import astra from '../../public/images/astra.png'

const jost = localFont({
    src: '../fonts/Jost/Jost-Regular.ttf',
    display: 'swap',
  })  

export default function Projects() {

    const MyProjects = {
        projects: [
            {
                id: 1,
                title: 'Unicars.by',
                link: 'https://unicars.by',
                img: unicars
            },
            {
                id: 2,
                title: 'Kanso.by',
                link: 'https://kanso.by',
                img: kanso
            },
            {
                id: 3,
                title: 'MyTopka.by',
                link: 'https://mytopka.by',
                img: topka
            },
            {
                id: 4,
                title: 'Kvalirem.ee',
                link: 'https://kvalirem.ee/',
                img: kvalirem
            },
            {
                id: 5,
                title: 'Kupitbeton.by',
                link: 'https://www.kupitbeton.by/',
                img: beton
            },
            {
                id: 6,
                title: 'Astra.web',
                link: 'https://e-astra-web.vercel.app/',
                img: astra
            }
        ]
    }

    return(
        <MainLayout desc="Проекты" currentPage="projects">
            <div className="projects-wrapper">
                <h2 className={`projects-headline ${jost.className}`}>Наши проекты</h2>
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