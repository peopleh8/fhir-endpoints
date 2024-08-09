import { FormEvent, ReactElement, ReactNode } from 'react'

export type ChildType = ReactNode | ReactElement

export interface ChildProps {
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

export type FormValues = {
  [key: string]: any
}
export interface FormProps {
  children: ChildType
  onSubmit: (data: FormValues) => void
  extraClasses?: string
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