import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
// import './index.css'

import { PrimeReactProvider } from "primereact/api";

<<<<<<< HEAD
import "primereact/resources/themes/saga-purple/theme.css";
import "primereact/resources/primereact.min.css"; //core css

=======
import "primereact/resources/themes/arya-orange/theme.css"; //theme
import "primereact/resources/primereact.min.css"; //core css
import "primeflex/primeflex.css";
>>>>>>> 008500593b367d59037f355a69998709a89539a5
import 'primeicons/primeicons.css';
        
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <PrimeReactProvider value={{ ripple: true, StyleClass: true }}>
       <App />
    </PrimeReactProvider>
  </React.StrictMode>
)
