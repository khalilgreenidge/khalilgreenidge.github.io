import Intro from '../intro/intro.tsx'
import '../../assets/satoshi.css'
import './style.scss'
import Companies from '../companies/companies.tsx'
import Awards from '../awards/awards.tsx'
import TechStack from '../techstack/techstack.tsx'
import Projects from '../projects/projects.tsx'
import Recommendations from '../testimonials/testimonials.tsx'

const App = () => {

  return (
    <div>
      <Intro />
      <TechStack />
      <Companies />
      <Projects />
      <Awards />
      <Recommendations />
    </div>
  )
}

export default App
