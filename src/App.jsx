import { useState } from 'react'

import { Button } from 'primereact/button';
import { Menubar } from 'primereact/menubar';
        
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Header from './components/header/Header';
import Body from './components/body/Body';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Header />
        <Body />
      </div>
    </>
  )
}

export default App;
