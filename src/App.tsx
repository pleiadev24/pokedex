import { ThemeProvider } from 'styled-components'
import { Provider } from 'react-redux'

import GlobalStyle from './styles/global'
import theme from './styles/theme'
import store from './store'
import Home from './pages/Home'

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Home />
      </ThemeProvider>
    </Provider>
  )
}

export default App
