const Footer = ({ language }) => {
  const content = {
    fr: {
      description: "MyCryptoBank - Infrastructure bancaire numérique européenne révolutionnaire",
      rights: "Tous droits réservés",
      compliance: "Conforme MiCA & RGPD"
    },
    en: {
      description: "MyCryptoBank - Revolutionary European digital banking infrastructure",
      rights: "All rights reserved",
      compliance: "MiCA & GDPR Compliant"
    }
  }

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="text-2xl font-bold mb-4">
            🏦 MyCryptoBank
          </div>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            {content[language].description}
          </p>
          <div className="flex flex-col md:flex-row justify-center items-center space-y-2 md:space-y-0 md:space-x-8">
            <p className="text-gray-400">
              © 2025 MyCryptoBank. {content[language].rights}.
            </p>
            <p className="text-blue-400 font-medium">
              🇪🇺 {content[language].compliance}
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

