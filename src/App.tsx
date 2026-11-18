import { Navigation } from './components/navigation/Navigation'
import { About } from './sections/About/About'
import { Certificates } from './sections/Certificates/Certificates'
import { Contact } from './sections/Contact/Contact'
import { Education } from './sections/Education/Education'
import { Experience } from './sections/Experience/Experience'
import { Hero } from './sections/Hero/Hero'
import { Marquee } from './sections/Marquee'
import { Projects } from './sections/Projects/Projects'
import { Skills } from './sections/Skills/Skills'

function App() {
  return (
    <div className="min-h-screen overflow-x-clip">
      <Navigation />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Certificates />
        <Contact />
      </main>
    </div>
  )
}

export default App
