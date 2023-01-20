import { FC, ReactNode } from 'react'

interface Props {
  forInput: string
  value?: string
  className?: string
  children?: ReactNode
}

const InputLabel: FC<Props> = ({ forInput, value, className, children }) => {
  return (
    <label
      htmlFor={forInput}
      className={`block font-medium text-sm text-gray-700 ` + className}
    >
      {value ? value : children}
    </label>
  )
}

export default InputLabel
