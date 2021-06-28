import React from 'react'

import { useTheme } from '../../../../hooks'
import { SpacerProps } from './interfaces'
import { SpacerBox } from './style.css'

const Spacer: React.FC<SpacerProps> = ({ size }) => {
  const { spacer } = useTheme()
  if (size) {
    return <SpacerBox size={spacer[size]} />
  }

  return <SpacerBox />
}

export default Spacer
