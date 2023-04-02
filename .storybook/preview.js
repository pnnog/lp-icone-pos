
import { ThemeProvider } from 'styled-components'
import GlobalStyle from '../src/styles/GlobalStyles'
import theme from '../src/styles/theme'
export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },

  backgrounds: {
    default: 'icone-darkblue',
    values: [
      {
        name: 'icone-white',
        value: theme.colors.white,
      },
      {
        name: 'icone-darkblue',
        value: theme.colors.primary,
      },
    ],
  },
}


export const decorators = [
  (Story) => (
    <>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Story />
    </ThemeProvider>
    </>
  )
]
