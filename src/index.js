import { ChakraProvider } from '@chakra-ui/react'
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import theme from './styles/theme'
import './api/server'
import { Provider } from 'react-redux'
import { store } from './app/store'

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <ChakraProvider theme={theme}>
        <App />
      </ChakraProvider>
    </React.StrictMode>
  </Provider>
  ,
  document.getElementById('root')
)
