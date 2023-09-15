import { useState } from 'react'
import Intro from '../intro/intro.tsx'
import Menu from '../menu/menu.tsx'
import '../../assets/satoshi.css'
import './style.scss'

const App = () => {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Menu/>
      <Intro />
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default App
