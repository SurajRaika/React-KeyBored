import { useState } from 'preact/hooks'
import preactLogo from './assets/preact.svg'
import viteLogo from '/vite.svg'
import Keybored from './keybored'
import './app.css'

export function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
    
      <Keybored/>
      </div>
    
    </>
  )
}
