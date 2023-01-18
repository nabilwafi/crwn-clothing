import { ButtonHTMLAttributes, FC } from 'react'
import {
  BaseButton,
  GoogleButton,
  InvertedButton,
  LoadingSpinner,
} from './Button.style'

export enum BUTTON_TYPE_CLASS {
  base = 'base',
  google = 'google-sign-in',
  inverted = 'inverted',
}

const getButton = (buttonType = BUTTON_TYPE_CLASS.base): typeof BaseButton =>
  ({
    [BUTTON_TYPE_CLASS.base]: BaseButton,
    [BUTTON_TYPE_CLASS.google]: GoogleButton,
    [BUTTON_TYPE_CLASS.inverted]: InvertedButton,
  }[buttonType])

export type ButtonProps = {
  buttonType?: BUTTON_TYPE_CLASS
  isLoading?: boolean
} & ButtonHTMLAttributes<HTMLButtonElement>

const Button: FC<ButtonProps> = ({
  children,
  buttonType,
  isLoading,
  ...otherProps
}) => {
  const CustomButton = getButton(buttonType)
  return (
    <CustomButton disabled={isLoading} {...otherProps}>
      {isLoading ? <LoadingSpinner /> : children}
    </CustomButton>
  )
}

export default Button
