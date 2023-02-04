import React, { ReactNode, useEffect, useState } from 'react'

type Props = {
  label: string
}

const Icons = (props: Props) => {
  const [label, setLabel] = useState('')
  useEffect(() => {
    setLabel(props.label)
  }, [props.label])
  return (
    <div>
      {
        label
      }
    </div>
  )
}

export default Icons