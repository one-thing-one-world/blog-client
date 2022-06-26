import React, { useState, useRef } from 'react'
import { useClickAway } from 'ahooks'

interface Iprops {
  children: React.ReactElement[]
}

export interface ISelectedStatusItemProps {
  title: string
}
export default function SelectedStatusCom(props: Iprops) {
  const { children } = props
  const [activeKey, setActiveKey] = useState(0)
  const selectedStatusComRef = useRef<any>(null)
  useClickAway(() => setActiveKey(-1), selectedStatusComRef)
  return (
    <div ref={selectedStatusComRef}>
      {children.map((child, index) =>
        React.cloneElement(child, {
          key: index,
          activeKey,
          isActive: index === activeKey,
          onClick: () => {
            index === activeKey ? setActiveKey(-1) : setActiveKey(index)
            console.log(23)
          },
        })
      )}
    </div>
  )
}
