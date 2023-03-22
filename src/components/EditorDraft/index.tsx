import React, { useState, useEffect } from 'react'
import { Editor, Toolbar } from '@wangeditor/editor-for-react'
import { IDomEditor, IEditorConfig, IToolbarConfig } from '@wangeditor/editor'
import '@wangeditor/editor/dist/css/style.css'
import styled from 'styled-components'
// 引入 css
const EditorWrapper = styled.div`
  border: 1px solid #ccc;
  z-index: 9;
  /* margin-top: 20px; */
`

function EditorDraft() {
  // editor 实例
  const [editor, setEditor] = useState<IDomEditor | null>(null) // TS 语法
  // const [editor, setEditor] = useState(null)                   // JS 语法

  // 编辑器内容
  const [html, setHtml] = useState('<p></p>')

  // // 模拟 ajax 请求，异步设置 html
  // useEffect(() => {
  //   setTimeout(() => {
  //     setHtml('<p>hello world</p>')
  //   }, 1500)
  // }, [])

  // 工具栏配置
  const toolbarConfig: Partial<IToolbarConfig> = {} // TS 语法
  // const toolbarConfig = { }                        // JS 语法

  // 编辑器配置
  const token = 123
  const editorConfig: Partial<IEditorConfig> = {
    placeholder: '请输入内容...',
    MENU_CONF: {
      uploadImage: {
        server: '/apc/permission/v1/upload/textEditImage',
        uploadImage: [], // 不限制上传文件类型
        maxNumberOfFiles: 4, // 单次最多上传一个文件
        headers: {
          Authorization: `Bearer ${token}`,
        },
        timeout: 5 * 1000, // 5s
        fieldName: 'editer-name',
        metaWithUrl: true, // 参数拼接到 url 上
        maxFileSize: 2 * 1024 * 1024, // 20M
        base64LimitSize: 500 * 1024,
        // // 跨域是否传递 cookie ，默认为 false
        withCredentials: false,
        // 超时时间，默认为 10 秒
      },
    },
  }

  // 及时销毁 editor ，重要！
  useEffect(
    () => () => {
      if (editor == null) return
      editor.destroy()
      setEditor(null)
    },
    [editor]
  )

  return (
    <EditorWrapper>
      <Toolbar
        editor={editor}
        defaultConfig={toolbarConfig}
        mode="default"
        style={{ borderBottom: '1px solid #ccc' }}
      />
      <Editor
        defaultConfig={editorConfig}
        value={html}
        onCreated={setEditor}
        onChange={(editorContent: any) => setHtml(editorContent.getHtml())}
        mode="default"
        style={{ height: '500px', overflowY: 'hidden' }}
      />
    </EditorWrapper>
  )
}

export default EditorDraft
