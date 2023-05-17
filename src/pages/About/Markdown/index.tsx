/* eslint-disable react/no-children-prop */
import React, { useEffect, useState } from 'react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import rehypeRaw from 'rehype-raw'
import remarkMath from 'remark-math'
import resume from './resume.md'

export default function Markdown() {
  const [mdFile, setMdFile] = useState<string>('')

  useEffect(() => {
    fetch(resume)
      .then(res => res.text())
      .then(text => setMdFile(text))
  }, [])
  console.log(mdFile)
  const CustomBlockquote = ({ children }: any) => (
    <div
      style={{
        borderLeft: '4px solid #d6d6d6',
        background: '#f0f0f0',
        paddingLeft: '16px',
        marginBottom: '16px',
        marginTop: '16px',
        fontWeight: '600 !important',
      }}
    >
      {children}
    </div>
  )
  const CustomUlList = ({ children }: any) => (
    <ul style={{ listStyle: 'disc', padding: '0px 10px 0px 32px' }}>
      {children}
    </ul>
  )
  // const CustomListItem = ({ children }: any) => (
  //   <li style={{ marginBottom: '8px', lineHeight: '1.5' }}>{children}</li>
  // )

  const CustomOrderedList = ({ children }: any) => (
    <ol style={{ listStyle: 'decimal', padding: '0px 10px 0px 32px' }}>
      {children}
    </ol>
  )
  const CustomOrderedListItem = ({ children }: any) => (
    <li style={{ marginBottom: '2px', lineHeight: '1.5' }}>{children}</li>
  )

  const CustomStrong = ({ children }: any) => (
    <strong
      style={{
        display: 'block',
        lineHeight: '1.8',
        margin: '8px 0 ',
        fontWeight: '600 !important',
      }}
    >
      {children}
    </strong>
  )
  const CustomP = ({ children }: any) => (
    <p style={{ lineHeight: '1.5' }}>{children}</p>
  )

  const customRenderers = {
    blockquote: CustomBlockquote,
    ol: CustomOrderedList,
    ul: CustomUlList,
    li: CustomOrderedListItem,
    strong: CustomStrong,
    p: CustomP,
  }
  return (
    <ReactMarkdown
      children={mdFile}
      remarkPlugins={[remarkGfm, remarkMath]}
      rehypePlugins={[rehypeRaw]}
      components={customRenderers}
    />
    // <ReactMarkdown
    //   children={mdFile}
    //   remarkPlugins={[remarkGfm, remarkMath]}
    //   rehypePlugins={[rehypeRaw]}
    // />
  )
}
