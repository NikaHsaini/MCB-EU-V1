import { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import StrategicObjective from './components/StrategicObjective'
import KeyTechnologies from './components/KeyTechnologies'
import GrantApplication from './components/GrantApplication'
import Partners from './components/Partners'
import FAQ from './components/FAQ'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  const [language, setLanguage] = useState('fr')

  return (
    <div className="min-h-screen bg-white">
      <Header language={language} setLanguage={setLanguage} />
      <main>
        <Hero language={language} />
        <StrategicObjective language={language} />
        <KeyTechnologies language={language} />
        <GrantApplication language={language} />
        <Partners language={language} />
        <FAQ language={language} />
        <Contact language={language} />
      </main>
      <Footer language={language} />
    </div>
  )
}

export default App

