import { useState } from 'react'

const FAQ = ({ language }) => {
  const [openIndex, setOpenIndex] = useState(null)

  const content = {
    fr: {
      title: "Questions Fréquentes",
      subtitle: "Conformité et Réglementation",
      faqs: [
        {
          question: "MyCryptoBank est-elle conforme à la réglementation MiCA ?",
          answer: "Oui, MyCryptoBank est entièrement conforme à la réglementation MiCA (Markets in Crypto-Assets) de l'Union européenne."
        },
        {
          question: "Comment la protection des données est-elle assurée ?",
          answer: "Nous respectons intégralement le RGPD avec chiffrement de bout en bout et hébergement exclusivement européen."
        },
        {
          question: "Quel est le calendrier de déploiement ?",
          answer: "Phase pilote en 2025, déploiement progressif dans les 27 États membres sur 3 ans."
        },
        {
          question: "Comment QubitCoin se différencie-t-il des autres cryptomonnaies ?",
          answer: "QubitCoin est un token européen souverain, programmable et entièrement conforme aux réglementations européennes."
        }
      ]
    },
    en: {
      title: "Frequently Asked Questions",
      subtitle: "Compliance and Regulation",
      faqs: [
        {
          question: "Is MyCryptoBank compliant with MiCA regulation?",
          answer: "Yes, MyCryptoBank is fully compliant with the European Union's MiCA (Markets in Crypto-Assets) regulation."
        },
        {
          question: "How is data protection ensured?",
          answer: "We fully comply with GDPR with end-to-end encryption and exclusively European hosting."
        },
        {
          question: "What is the deployment timeline?",
          answer: "Pilot phase in 2025, progressive deployment across all 27 member states over 3 years."
        },
        {
          question: "How does QubitCoin differ from other cryptocurrencies?",
          answer: "QubitCoin is a European sovereign token, programmable and fully compliant with European regulations."
        }
      ]
    }
  }

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {content[language].title}
          </h2>
          <p className="text-xl text-blue-600 font-semibold">
            {content[language].subtitle}
          </p>
        </div>

        <div className="space-y-4">
          {content[language].faqs.map((faq, index) => (
            <div key={index} className="card">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full text-left p-6 focus:outline-none"
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold text-gray-900">
                    {faq.question}
                  </h3>
                  <span className="text-2xl text-blue-600">
                    {openIndex === index ? '−' : '+'}
                  </span>
                </div>
              </button>
              {openIndex === index && (
                <div className="px-6 pb-6">
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQ

