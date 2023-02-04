/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Experience from '../common/Experience'


type Props = {}

function About({ }: Props) {
  return (
    <div className="container mx-auto flex px-5 py-5 md:flex-row flex-col items-center">
      <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
        <img className="object-cover object-center rounded-lg" alt="hero" src="me1.png" />
      </div>
      <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Bernardino T.
          <br className="hidden lg:inline-block" />Ochoa
        </h1>
        <p className="mb-8 leading-relaxed text-gray-100">I am a front-end developer with over 3 years of
          experience in React. I have a strong understanding of the
          React Library and its ecosystem and a deep knowledge
          of JavaScript and its related technologies. I can create
          complex, interactive user interfaces that are visually
          appealing and highly functional. I am comfortable working
          in both teams and individual settings. I am a quick learner
          and am always eager to take on new challenges and
          explore new technologies.</p>
        <div className="flex justify-center text-gray-200">

          <div className="text-gray-200 body-font overflow-hidden">
            <div className="container px-0 py-0 mx-auto">
              <p className=' font-bold tracking-widest text-lg pb-4'>Education</p>
              <div className="-my-8 divide-y-2 divide-gray-100 overflow-auto max-h-[70vh] px-2">

                <Experience
                  orgname='Our Lady of Lourdes College'
                  title='Bachelor of Science in Information Technology'
                  startDate='June 2015'
                  endDate='April 2019'
                  overView={
                    <ul>
                      <li>Worked across the Front-end of the
                        software (Angular, React)
                      </li>
                      <li>
                        Worked together with two other senior
                        developer to brainstorm and apply ideas
                        and feedback into the app&#39;s development
                        progress
                      </li>
                    </ul>
                  }
                />
              </div>


              <p className=' font-bold tracking-widest text-lg pb-4'>Experiences</p>
              <div className="-my-8 divide-y-2 divide-gray-100 overflow-auto max-h-[70vh] px-2">

                <Experience
                  orgname='Concentrix'
                  title='Associate Analytic Technology'
                  startDate='September 2019'
                  endDate='September 2022'
                  overView={
                    <ul>
                      <li>Worked across the Front-end of the
                        software (Angular, React)
                      </li>
                      <li>
                        Worked together with two other senior
                        developer to brainstorm and apply ideas
                        and feedback into the app&#39;s development
                        progress
                      </li>
                    </ul>
                  }
                />

                <Experience
                  orgname='Concentrix'
                  title='Analyst Analytic Technology'
                  startDate='September 2022'
                  endDate='CURRENT'
                  overView={
                    <ul>
                      <li>Develop and maintian Web Application
                        using ReactJs (3 apps)

                      </li>
                      <li>
                        Working a with teammate aboad and
                        covert there idea to UI (User interface)
                      </li>
                    </ul>
                  }
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About