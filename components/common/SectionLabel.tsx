import React, { ReactNode } from 'react'

type Props = {
  position?: 'left' | 'right' | 'center';
  label: string | ReactNode;
  description?: string | ReactNode;
  showUnderLine?: boolean
}

const SectionLabel = ({ position = 'left', label, description, showUnderLine = false }: Props) => {

  if (position === 'center') {
    return (
      <div className="flex flex-wrap w-full mb-10 justify-center text-center">
        <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
          <h1 className="sm:text-3xl text-2xl leading-5 tracking-widest font-medium title-font mb-2 text-gray-900 uppercase">{label}</h1>
          {
            showUnderLine ? <div className="h-1 w-20 bg-indigo-500 rounded"></div> : null
          }
          <p className=" w-full leading-relaxed text-center text-gray-500">{description}</p>
        </div>

      </div>
    )
  }

  if (position === 'right') {
    return (
      <div className="flex flex-wrap w-full mb-20 ">
        <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">{description}</p>
        <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900 text-end">{label}</h1>
          {
            showUnderLine ? <div className="h-1 w-20 bg-blue-400 rounded "></div> : null
          }
        </div>
      </div>
    )
  }

  return (
    <div className="flex flex-wrap w-full mb-20">
      <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">{label}</h1>
        {
          showUnderLine ? <div className="h-1 w-20 bg-indigo-500 rounded"></div> : null
        }
      </div>
      <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">{description}</p>
    </div>
  )
}

export default SectionLabel