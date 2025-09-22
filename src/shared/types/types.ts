import { ReactNode } from 'react'

export type Props = Readonly<{ children: ReactNode }>

export type EmailData = {
  name: string
  email: string
  subject: string
  body: string
}
