const Partners = ({ language }) => {
  const content = {
    fr: {
      title: "Partenaires Européens",
      subtitle: "Écosystème d'Excellence",
      partners: [
        "Commission Européenne - DG FISMA",
        "Banque Centrale Européenne (BCE)",
        "BPI France - Innovation",
        "Université de la Sorbonne",
        "Institut Polytechnique de Paris",
        "Fraunhofer Institute"
      ]
    },
    en: {
      title: "European Partners",
      subtitle: "Excellence Ecosystem",
      partners: [
        "European Commission - DG FISMA",
        "European Central Bank (ECB)",
        "BPI France - Innovation",
        "Sorbonne University",
        "Institut Polytechnique de Paris",
        "Fraunhofer Institute"
      ]
    }
  }

  return (
    <section id="partners" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {content[language].title}
          </h2>
          <p className="text-xl text-blue-600 font-semibold">
            {content[language].subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {content[language].partners.map((partner, index) => (
            <div key={index} className="card text-center">
              <div className="card-content">
                <p className="text-gray-700 font-medium">{partner}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Partners

