import Link from 'next/link'
import React from 'react'

type Props = {}

const Header = (props: Props) => {
  return (
    <header className="text-gray-600 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link href='/' className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <span className="ml-3 text-xl">Bernardino</span>
        </Link>
        <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
          <Link href='#projects' className="mr-5 hover:text-gray-900">
            Projects
          </Link>
          <Link href='#skills' className="mr-5 hover:text-gray-900">
            Skills
          </Link>
          <Link href='#about' className="mr-5 hover:text-gray-900">
            About
          </Link>

        </nav>
        <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">Download CV
        </button>
      </div>
    </header>
  )
}

export default Header