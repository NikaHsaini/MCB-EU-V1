const Header = ({ language, setLanguage }) => {
  const content = {
    fr: {
      nav: {
        objective: "Objectif",
        technologies: "Technologies",
        grant: "Subvention",
        partners: "Partenaires",
        faq: "FAQ",
        contact: "Contact"
      }
    },
    en: {
      nav: {
        objective: "Objective",
        technologies: "Technologies", 
        grant: "Grant",
        partners: "Partners",
        faq: "FAQ",
        contact: "Contact"
      }
    }
  }

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <header className="bg-white shadow-sm border-b sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-4">
            <div className="text-2xl font-bold text-blue-600">
              🏦 MyCryptoBank
            </div>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <button 
              onClick={() => scrollToSection('objective')}
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              {content[language].nav.objective}
            </button>
            <button 
              onClick={() => scrollToSection('technologies')}
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              {content[language].nav.technologies}
            </button>
            <button 
              onClick={() => scrollToSection('grant')}
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              {content[language].nav.grant}
            </button>
            <button 
              onClick={() => scrollToSection('partners')}
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              {content[language].nav.partners}
            </button>
            <button 
              onClick={() => scrollToSection('faq')}
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              {content[language].nav.faq}
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              {content[language].nav.contact}
            </button>
          </nav>

          <div className="flex items-center space-x-4">
            <button
              onClick={() => setLanguage(language === 'fr' ? 'en' : 'fr')}
              className="btn btn-secondary"
            >
              {language === 'fr' ? '🇬🇧 EN' : '🇫🇷 FR'}
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header

