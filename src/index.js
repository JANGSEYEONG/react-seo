import React from 'react'
import {createRoot, hydrateRoot} from 'react-dom/client'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import {BrowserRouter} from 'react-router-dom'
import {HelmetProvider} from 'react-helmet-async'

const rootElement = document.getElementById('root')
const root = createRoot(rootElement)

if (rootElement.hasChildNodes()) {
  hydrateRoot(
    rootElement,
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <HelmetProvider>
        <App />
      </HelmetProvider>
    </BrowserRouter>
  )
} else {
  root.render(
    <BrowserRouter>
      <HelmetProvider>
        <App />
      </HelmetProvider>
    </BrowserRouter>
  )
}

reportWebVitals()
