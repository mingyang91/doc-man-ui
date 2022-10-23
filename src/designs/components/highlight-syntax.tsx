import { Light as SyntaxHighlighter } from 'react-syntax-highlighter'
import excel from 'react-syntax-highlighter/dist/esm/languages/hljs/excel'
import json from 'react-syntax-highlighter/dist/esm/languages/hljs/json'
import { atomOneLight } from 'react-syntax-highlighter/dist/esm/styles/hljs'

// 目前只用到了这一个
SyntaxHighlighter.registerLanguage('json', json)
SyntaxHighlighter.registerLanguage('excel', excel)

export interface HighlightSyntaxProps {
  language?: 'json' | 'excel'
  code: string
}

export const HighlightSyntax = ({
  code,
  language = 'json',
}: HighlightSyntaxProps) => {
  return (
    <SyntaxHighlighter language={language} style={atomOneLight}>
      {code}
    </SyntaxHighlighter>
  )
}
