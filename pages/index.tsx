/* eslint-disable @next/next/no-img-element */
import Head from 'next/head'
import Header from '../components/common/Header'
import Footer from '../components/common/Footer'
import SectionLabel from '../components/common/SectionLabel'
import About from '../components/About'

import Skills from '../components/Skills'
import Hero from '../components/Hero'
import Projects from '../components/Projects'



export default function Home() {

  return (
    <div className='bg-gradient-to-t from-zinc-900 via-orange-200 to-orange-300'>
      <Head>
        <title>Bernardin Ochoa</title>
        <meta name="description" content="Bernardino Ochoa Portfolio" />
        <meta name="description" content="Bernardino Ochoa" />
        <meta name="description" content="Bernardino" />
        <meta name="description" content="Ochoa" />
        <meta name="description" content="Bernardino Ochoa Projects" />
        <meta name="description" content="Bernardino Ochoa Profile" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="container mx-auto ">
        {/** Hero section */}
        <section id="hero" className=' h-[100vh]'>
          <Hero />
        </section>

        {/** Works / Projects */}
        <section id="projects" className='h-[100vh]'>
          <SectionLabel
            label='Projects'
            position='center'
            description=''
          />
          <Projects />
        </section>

        {/** Skills */}
        <section id="skills" className=' h-[100vh]'>
          <SectionLabel
            label='Skills'
            position='center'
            description='' />
          <Skills />
        </section>

        {/** About */}
        <section id="about" className=' h-[100vh]'>
          <SectionLabel label='About' position='center' />
          <About />
        </section>
      </main>
      <Footer />

    </div>
  )
}
