import { useState } from 'react'
<<<<<<< HEAD
=======

import { Button } from 'primereact/button';


import { Menubar } from 'primereact/menubar';
>>>>>>> 92b4fcb (Component_V1)
        
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
