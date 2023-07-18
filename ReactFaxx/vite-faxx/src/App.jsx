import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import sunLogo from './assets/orange yellow sunset.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        
        <a href="https://react.dev" target="_blank">
          <img src={sunLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Sunset Spa</h1>
      
    </>
  )
}

export default App
