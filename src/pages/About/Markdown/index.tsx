/* eslint-disable react/no-children-prop */
import React, { useEffect, useState } from 'react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import rehypeRaw from 'rehype-raw'
import remarkMath from 'remark-math'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'

import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism'
import resume from './resume.md'

export default function Markdown() {
  const [mdFile, setMdFile] = useState<string>('')

  useEffect(() => {
    fetch(resume)
      .then(res => res.text())
      .then(text => setMdFile(text))
  }, [])
  console.log(mdFile)
  return (
    <ReactMarkdown
      children={mdFile}
      remarkPlugins={[remarkGfm, remarkMath]}
      rehypePlugins={[rehypeRaw]}
      components={{
        code({ node, inline, className, children, ...props }) {
          const match = /language-(\w+)/.exec(className || '')
          return !inline && match ? (
            <SyntaxHighlighter
              {...props}
              children={String(children).replace(/\n$/, '')}
              style={dark}
              language={match[1]}
              PreTag="div"
            />
          ) : (
            <code {...props} className={className}>
              {children}
            </code>
          )
        },
      }}
    />
    // <ReactMarkdown
    //   children={mdFile}
    //   remarkPlugins={[remarkGfm, remarkMath]}
    //   rehypePlugins={[rehypeRaw]}
    // />
  )
}
