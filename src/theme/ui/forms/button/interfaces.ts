import { ButtonProps as RebassButtonProps } from 'rebass'
export interface ButtonProps extends RebassButtonProps {
  size?: 'xs' | 'sm' | 'md' | 'lg'
  loading?: boolean
  disabled?: boolean
  className?: string
  children?: React.ReactNode
  newWindow?: boolean
}
