import Head from "next/head"
import Link from "next/link"
import Header from "./Header"
import localFont from 'next/font/local'
import Footer from "./footer"
import { ReactNode } from "react"

const montserrat = localFont({
    src: '../src/fonts/montserrat/Montserrat-Regular.ttf',
    display: 'swap',
  })

interface MyProps {
    children?: ReactNode;
    desc: string
    currentPage: string
}

export function MainLayout ({children, desc, currentPage} : MyProps) {
    return (
        <>
            <Head>
                <title>Astra | {desc}</title>
                <meta name='keywords' content='next,s,nextjs,react' />
                <meta name='description' content='description' />
                <meta charSet='utf-8' />
            </Head>
            <Header currentPage={currentPage}/>
            <main className={montserrat.className}>
                { children }
            </main>
            <Footer currentPage={currentPage}/>
        </>
    )
}