import { useState } from 'react'
        
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/header/Header';
import Body from './components/body/Body';


function App() {
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
