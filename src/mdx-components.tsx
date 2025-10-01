import type { MDXComponents } from 'mdx/types'
import React from 'react'

// Hx
const CustomH1 = ({ children }: { children: React.ReactNode }) => (
  <h1 className="prose prose-stone text-4xl text-gray-900">{children}</h1>
)
const CustomH2 = ({ children }: { children: React.ReactNode }) => (
  <h2 className="prose prose-stone text-3xl text-gray-800">{children}</h2>
)
const CustomH3 = ({ children }: { children: React.ReactNode }) => (
  <h3 className="prose prose-stone text-2xl text-gray-700">{children}</h3>
)

const PreCustom = ({ children, ...props }: { children: React.ReactNode }) => {
  let language = ''
  if (React.isValidElement(children) && (children.props as any)?.className) {
    const match = (children.props as any).className.match(/language-(\w+)/)
    language = match ? match[1] : ''
  }

  return (
    <div className="code-block">
      {language && <div className="code-language">{language}</div>}
      <pre {...props} className="code-pre">
        {children}
      </pre>
    </div>
  )
}

const components: MDXComponents = {
  h1: CustomH1,
  h2: CustomH2,
  h3: CustomH3,
  pre: PreCustom,
} satisfies MDXComponents

export function useMDXComponents(): MDXComponents {
  return components
}
