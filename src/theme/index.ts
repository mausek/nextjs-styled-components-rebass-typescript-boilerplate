import React from 'react'
import { createGlobalStyle } from 'styled-components'
import { DarkTheme, LightTheme } from './colors'


const useDefaultTheme = () => {
  const breakpoints: string[] = React.useMemo(() => ['860px', '1440px', '1600px', '1920px'], [])
  return {
    breakpoints
  }
}



export const GlobalStyle = createGlobalStyle<any>`
  /* Global styles bellow */

  html {
    font-size: 15px;
  }

  @media (min-width: ${({ breakpoints }) => breakpoints[1]}) {
    html {
      font-size: 15px;
    }
  }

  @media (min-width: ${({ breakpoints }) => breakpoints[2]}) {
    html {
      font-size: 16px;
    }
  }

  @media (min-width: ${({ breakpoints }) => breakpoints[3]}) {
    html {
      font-size: 16px;
    }
  }
`

export default useDefaultTheme
