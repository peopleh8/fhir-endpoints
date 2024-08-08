import { ReactElement, ReactNode } from 'react'

export type ChildType = ReactNode | ReactElement

export interface PageProps {
  children: ChildType
}

export interface TitleProps {
  label: string
  extraClasses?: string
}

export interface ButtonProps {
  [key: string]: any
}

export interface InputProps {
  [key: string]: any
}

export interface CheckboxProps {
  [key: string]: any
}

export interface FormProps {
  children: ChildType
}

export interface DescProps {
  children: ChildType
  extraClasses?: string
}

export interface LinkProps {
  label: string
  desc?: string
  href: string
  isInternal?: boolean
  extraClasses?: string
}