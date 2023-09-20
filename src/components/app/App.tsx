import { useState } from 'react'
import Intro from '../intro/intro.tsx'
import Menu from '../menu/menu.tsx'
import '../../assets/satoshi.css'
import './style.scss'
import Companies from '../companies/companies.tsx'
import Awards from '../awards/awards.tsx'
import TechStack from '../techstack/techstack.tsx'

const App = () => {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Menu/>
      <Intro />
      <TechStack />
      <Companies />
      <Awards />
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </div>
  )
}

export default App
