/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import React from 'react'

type Props = {
  imgsrc: string;
  projectTitle: string;
  projectLink: string;
  description?: string

}

const Project = (props: Props) => {
  return (
    <div className="lg:w-1/3 sm:w-1/2 p-4">
      <div className="flex relative shadow-lg rounded-lg h-60">
        <img alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" src={props.imgsrc} />
        <div className="px-8 py-10 relative z-10 w-full  bg-white/80 opacity-0 hover:opacity-100">
          <Link href={props.projectLink} className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1 flex items-center space-x-2">
            <span>
              <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
            </span>
             <span>
              Redirect
             </span>
            </Link>
          <h1 className="title-font text-lg font-medium text-gray-900 mb-3">{props.projectTitle}</h1>
          <p className="leading-relaxed">{props.description}.</p>
        </div>
      </div>
    </div>
  )
}

export default Project