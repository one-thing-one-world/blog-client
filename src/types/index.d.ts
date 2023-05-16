// type CustomText = { text: string }

// type CustomElement = { type: 'paragraph'; children: CustomText[] }

// declare module 'slate' {
//   // eslint-disable-next-line no-unused-vars
//   interface CustomTypes {
//     // eslint-disable-next-line no-undef
//     Editor: BaseEditor & ReactEditor
//     Element: CustomElement
//     Text: CustomText
//   }
// }
declare module '*.md'
declare module 'react-syntax-highlighter'
declare module 'react-syntax-highlighter/dist/esm/styles/prism'
interface ITags {
  id: number
  name: string
  value: string
}

interface IListItem {
  title: string
  content: string
  createTime: string
  tags: ITags[]
  id: number
  author: string
  getListData: () => void
}
