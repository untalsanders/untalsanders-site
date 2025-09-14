import { ReactNode } from 'react'

type Props = {
  children?: ReactNode
  className?: string
}

export function Container({ className, children }: Props) {
  return <div className={`container ${className}`}>{children}</div>
}
