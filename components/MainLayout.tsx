import Head from "next/head"
import Header from "./Header"
import localFont from 'next/font/local'
import Footer from "./footer"

const montserrat = localFont({
    src: '../src/fonts/montserrat/Montserrat-Regular.ttf',
    display: 'swap',
  })

export function MainLayout({children}: any, desc = '', currentPage='') {
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
                {children}
            </main>
            <Footer currentPage={currentPage}/>
        </>
    )
}