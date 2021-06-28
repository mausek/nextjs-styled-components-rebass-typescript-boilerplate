import React from 'react'
import { Button as ButtonRebass, Flex } from 'rebass/styled-components'
// Hooks
import { useTheme } from '../../../../hooks'
// Interfaces
import { ButtonProps } from './interfaces'
// Styles
import { Loader } from './index.css'

const Button: React.FC<ButtonProps> = ({
  size,
  loading,
  disabled,
  className,
  children,
  href,
  newWindow = false,
  ...rest
}) => {
  const { buttonSize } = useTheme()
  const [showLoader, setShowLoader] = React.useState<boolean>(false)

  React.useEffect(() => {
    if (loading) {
      setShowLoader(true)
    }

    if (!loading && showLoader) {
      const timeout = setTimeout(() => {
        setShowLoader(false)
      }, 200)

      return () => {
        clearTimeout(timeout)
      }
    }
  }, [loading, showLoader])

  switch (size) {
    
    case 'md':
      return !href ? (
        <ButtonRebass
          disabled={loading || disabled}
          px={buttonSize.lg}
          py={buttonSize.md}
          {...rest}
          className={className}
        >
          <Flex justifyContent='center' alignItems='center'>
            {showLoader ? <Loader /> : children}
          </Flex>
        </ButtonRebass>
      ) : (
        <ButtonRebass
          as='a'
          href={href}
          px={buttonSize.lg}
          py={buttonSize.md}
          target={newWindow ? '_blank' : '_self'}
          rel={newWindow ? 'noopener noreferrer' : ''}
          {...rest}
          className={className}
        >
          <Flex justifyContent='center' alignItems='center'>
            {showLoader ? <Loader /> : children}
          </Flex>
        </ButtonRebass>
      )
    
    default:
      return !href ? (
        <ButtonRebass
          disabled={loading || disabled}
          {...rest}
          className={className}
        >
          <Flex justifyContent='center' alignItems='center'>
            {showLoader ? <Loader /> : children}
          </Flex>
        </ButtonRebass>
      ) : (
        <ButtonRebass
          as='a'
          href={href}
          target={newWindow ? '_blank' : '_self'}
          rel={newWindow ? 'noopener noreferrer' : ''}
          {...rest}
          className={className}
        >
          <Flex justifyContent='center' alignItems='center'>
            {showLoader ? <Loader /> : children}
          </Flex>
        </ButtonRebass>
      )
  }
}

export default Button
