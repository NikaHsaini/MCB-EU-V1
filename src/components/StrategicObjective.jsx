const StrategicObjective = ({ language }) => {
  const content = {
    fr: {
      title: "Objectif Stratégique",
      subtitle: "Alignement avec NextGenerationEU",
      description: "MyCryptoBank s'inscrit parfaitement dans la stratégie NextGenerationEU en contribuant à la transformation numérique et à la transition verte de l'Europe.",
      objectives: [
        {
          title: "Transition Numérique",
          description: "Développement de wallets souverains européens et d'une infrastructure bancaire 100% numérique"
        },
        {
          title: "Transition Verte", 
          description: "Data centers alimentés à 100% par l'énergie solaire et compensation carbone intégrale"
        },
        {
          title: "Inclusion Bancaire",
          description: "Accès aux services bancaires pour 10 millions d'Européens actuellement non-bancarisés"
        },
        {
          title: "Innovation Souveraine",
          description: "Technologies européennes conformes aux réglementations MiCA et RGPD"
        }
      ]
    },
    en: {
      title: "Strategic Objective",
      subtitle: "Alignment with NextGenerationEU", 
      description: "MyCryptoBank perfectly aligns with the NextGenerationEU strategy by contributing to Europe's digital transformation and green transition.",
      objectives: [
        {
          title: "Digital Transition",
          description: "Development of European sovereign wallets and 100% digital banking infrastructure"
        },
        {
          title: "Green Transition",
          description: "Data centers powered 100% by solar energy and comprehensive carbon offsetting"
        },
        {
          title: "Banking Inclusion", 
          description: "Access to banking services for 10 million currently unbanked Europeans"
        },
        {
          title: "Sovereign Innovation",
          description: "European technologies compliant with MiCA and GDPR regulations"
        }
      ]
    }
  }

  return (
    <section id="objective" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {content[language].title}
          </h2>
          <p className="text-xl text-blue-600 font-semibold mb-6">
            {content[language].subtitle}
          </p>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {content[language].description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {content[language].objectives.map((objective, index) => (
            <div key={index} className="card">
              <div className="card-content">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {objective.title}
                </h3>
                <p className="text-gray-600">
                  {objective.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default StrategicObjective

