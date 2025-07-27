const KeyTechnologies = ({ language }) => {
  const content = {
    fr: {
      title: "Technologies Clés",
      subtitle: "Innovation Européenne Souveraine",
      technologies: [
        {
          name: "QubitCoin",
          description: "Token européen programmable conforme MiCA"
        },
        {
          name: "MyCryptoBank",
          description: "Infrastructure bancaire numérique avancée"
        },
        {
          name: "Wallets Souverains",
          description: "Portefeuilles numériques européens sécurisés"
        },
        {
          name: "Data Centers Verts",
          description: "Infrastructure 100% énergie solaire"
        }
      ]
    },
    en: {
      title: "Key Technologies",
      subtitle: "European Sovereign Innovation",
      technologies: [
        {
          name: "QubitCoin",
          description: "MiCA-compliant European programmable token"
        },
        {
          name: "MyCryptoBank", 
          description: "Advanced digital banking infrastructure"
        },
        {
          name: "Sovereign Wallets",
          description: "Secure European digital wallets"
        },
        {
          name: "Green Data Centers",
          description: "100% solar energy infrastructure"
        }
      ]
    }
  }

  return (
    <section id="technologies" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {content[language].title}
          </h2>
          <p className="text-xl text-blue-600 font-semibold">
            {content[language].subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {content[language].technologies.map((tech, index) => (
            <div key={index} className="card text-center">
              <div className="card-content">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {tech.name}
                </h3>
                <p className="text-gray-600">
                  {tech.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default KeyTechnologies

