import { ReactElement, ReactNode } from 'react'

export type ChildType = ReactNode | ReactElement

export interface PageProps {
  children: ChildType
}