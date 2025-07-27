const GrantApplication = ({ language }) => {
  const content = {
    fr: {
      title: "Demande de Subvention UE",
      subtitle: "10 Milliards d'Euros pour l'Europe Numérique",
      description: "Cette demande de financement s'inscrit dans le cadre de NextGenerationEU pour développer l'infrastructure bancaire numérique européenne la plus avancée au monde.",
      budget: [
        { item: "Infrastructure Technique", amount: "4 Mds €" },
        { item: "Recherche & Développement", amount: "2 Mds €" },
        { item: "Déploiement Européen", amount: "2 Mds €" },
        { item: "Formation & Support", amount: "1 Md €" },
        { item: "Conformité Réglementaire", amount: "1 Md €" }
      ]
    },
    en: {
      title: "EU Grant Application",
      subtitle: "€10 Billion for Digital Europe",
      description: "This funding request is part of NextGenerationEU to develop the world's most advanced European digital banking infrastructure.",
      budget: [
        { item: "Technical Infrastructure", amount: "€4B" },
        { item: "Research & Development", amount: "€2B" },
        { item: "European Deployment", amount: "€2B" },
        { item: "Training & Support", amount: "€1B" },
        { item: "Regulatory Compliance", amount: "€1B" }
      ]
    }
  }

  return (
    <section id="grant" className="py-20 bg-blue-50">
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

        <div className="max-w-4xl mx-auto">
          <div className="card">
            <div className="card-header">
              <h3 className="text-2xl font-bold text-center">Budget Détaillé</h3>
            </div>
            <div className="card-content">
              <div className="space-y-4">
                {content[language].budget.map((item, index) => (
                  <div key={index} className="flex justify-between items-center py-3 border-b border-gray-200 last:border-b-0">
                    <span className="text-gray-700">{item.item}</span>
                    <span className="text-xl font-bold text-blue-600">{item.amount}</span>
                  </div>
                ))}
                <div className="flex justify-between items-center py-4 border-t-2 border-blue-600">
                  <span className="text-xl font-bold text-gray-900">Total</span>
                  <span className="text-3xl font-bold text-blue-600">
                    {language === 'fr' ? '10 Mds €' : '€10B'}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default GrantApplication

