import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import { PrimeReactProvider } from 'primereact/api'

// import 'primereact/resources/themes/arya-orange/theme.css' //theme
import 'primereact/resources/primereact.min.css' //core css
import 'primeflex/primeflex.css'
import 'primeicons/primeicons.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <PrimeReactProvider value={{ ripple: true, StyleClass: true }}>
      <App />
    </PrimeReactProvider>
  </React.StrictMode>
)
