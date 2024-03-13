import { useState } from 'react'

import { Button } from 'primereact/button';

<<<<<<< HEAD
// import { PrimeReactProvider } from "primereact/api";

import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import "primereact/resources/themes/arya-orange/theme.css"; //theme
=======

import { Menubar } from 'primereact/menubar';
        
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

>>>>>>> 008500593b367d59037f355a69998709a89539a5



function App() {
  const [count, setCount] = useState(0)
<<<<<<< HEAD
=======
  const items = [
    {
        label: 'Home',
        icon: 'pi pi-home'
    },
    {
        label: 'Features',
        icon: 'pi pi-star'
    },
    {
        label: 'Projects',
        icon: 'pi pi-search',
        items: [
            {
                label: 'Components',
                icon: 'pi pi-bolt'
            },
            {
                label: 'Blocks',
                icon: 'pi pi-server'
            },
            {
                label: 'UI Kit',
                icon: 'pi pi-pencil'
            },
            {
                label: 'Templates',
                icon: 'pi pi-palette',
                items: [
                    {
                        label: 'Apollo',
                        icon: 'pi pi-palette'
                    },
                    {
                        label: 'Ultima',
                        icon: 'pi pi-palette'
                    }
                ]
            }
        ]
    },
    {
        label: 'Contact',
        icon: 'pi pi-envelope'
    }
];
>>>>>>> 008500593b367d59037f355a69998709a89539a5

  return (
    <>
      <div>
<<<<<<< HEAD
      <Button label="Check" icon="pi pi-check" />
=======
      <Menubar model={items} />
      <Button label="Check" icon="pi pi-check" />
    
>>>>>>> 008500593b367d59037f355a69998709a89539a5
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
