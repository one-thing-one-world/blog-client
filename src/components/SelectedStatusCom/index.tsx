import React, { useState } from 'react'

interface Iprops {
  children: React.ReactElement[]
}

export interface ISelectedStatusItemProps {
  title: string
}
export default function SelectedStatusCom(props: Iprops) {
  const { children } = props
  const [activeKey, setActiveKey] = useState(0)
  return (
    <>
      {children.map((child, index) =>
        React.cloneElement(child, {
          key: index,
          activeKey,
          isActive: index === activeKey,
          onClick: () => {
            console.log(23)
            // setActiveKey(index)
            index === activeKey ? setActiveKey(-1) : setActiveKey(index)
          },
        })
      )}
    </>
  )
}
