const Hero = ({ language }) => {
  const content = {
    fr: {
      title: "MyCryptoBank",
      subtitle: "Infrastructure Bancaire Numérique Européenne",
      description: "Révolutionnons ensemble le paysage financier européen avec QubitCoin, le token programmable souverain, et MyCryptoBank, l'infrastructure bancaire numérique la plus avancée d'Europe.",
      grantAmount: "10 Milliards €",
      grantLabel: "Demande de Subvention UE",
      euStates: "27 États",
      euLabel: "Union Européenne",
      tokens: "21k Tokens",
      tokenLabel: "QubitCoin Émis",
      compliance: "100% Conformité",
      complianceLabel: "MiCA & RGPD",
      cta: "Découvrir le Projet"
    },
    en: {
      title: "MyCryptoBank", 
      subtitle: "European Digital Banking Infrastructure",
      description: "Let's revolutionize the European financial landscape together with QubitCoin, the sovereign programmable token, and MyCryptoBank, Europe's most advanced digital banking infrastructure.",
      grantAmount: "€10 Billion",
      grantLabel: "EU Grant Application",
      euStates: "27 States",
      euLabel: "European Union",
      tokens: "21k Tokens",
      tokenLabel: "QubitCoin Issued",
      compliance: "100% Compliance",
      complianceLabel: "MiCA & GDPR",
      cta: "Discover the Project"
    }
  }

  const scrollToObjective = () => {
    const element = document.getElementById('objective')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="relative bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="mb-8">
            <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-blue-100 text-blue-800 mb-4">
              🇪🇺 {content[language].euStates} - {content[language].euLabel}
            </span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            {content[language].title}
          </h1>
          
          <p className="text-xl md:text-2xl text-blue-600 font-semibold mb-8">
            {content[language].subtitle}
          </p>
          
          <p className="text-lg text-gray-600 max-w-4xl mx-auto mb-12 leading-relaxed">
            {content[language].description}
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">
                {content[language].grantAmount}
              </div>
              <div className="text-sm text-gray-600">
                {content[language].grantLabel}
              </div>
            </div>
            
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">
                {content[language].euStates}
              </div>
              <div className="text-sm text-gray-600">
                {content[language].euLabel}
              </div>
            </div>
            
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">
                {content[language].tokens}
              </div>
              <div className="text-sm text-gray-600">
                {content[language].tokenLabel}
              </div>
            </div>
            
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">
                {content[language].compliance}
              </div>
              <div className="text-sm text-gray-600">
                {content[language].complianceLabel}
              </div>
            </div>
          </div>

          <button 
            onClick={scrollToObjective}
            className="btn btn-primary text-lg px-8 py-4"
          >
            {content[language].cta}
          </button>
        </div>
      </div>
    </section>
  )
}

export default Hero

