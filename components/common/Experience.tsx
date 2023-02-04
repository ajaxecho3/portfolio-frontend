import React, { ReactNode } from 'react'

type Props = {
  orgname: string;
  startDate: string;
  endDate: string;
  title: string;
  overView?: string | ReactNode;

}

const Experience = ({ orgname, startDate, endDate, title, overView }: Props) => {
  return (
    <div className="py-8 flex flex-wrap md:flex-nowrap">
      <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
        <span className="font-semibold title-font text-gray-700 tracking-widest">{orgname}</span>
        <span className="mt-1 text-gray-500 text-sm uppercase">{startDate} - {endDate}</span>
      </div>
      <div className="md:flex-grow">
        <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">{title}</h2>
        <div className="leading-relaxed">{overView}</div>
      </div>
    </div>
  )
}

export default Experience