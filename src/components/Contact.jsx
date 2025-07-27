import { useState } from 'react'

const Contact = ({ language }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    role: '',
    message: ''
  })

  const content = {
    fr: {
      title: "Contact",
      subtitle: "Rejoignez la Révolution Bancaire Européenne",
      form: {
        name: "Nom complet",
        email: "Email",
        role: "Votre rôle",
        message: "Message",
        submit: "Envoyer"
      },
      roles: [
        "Institution européenne",
        "Collectivité territoriale", 
        "Investisseur institutionnel",
        "Partenaire technologique",
        "Média spécialisé",
        "Autre"
      ]
    },
    en: {
      title: "Contact",
      subtitle: "Join the European Banking Revolution",
      form: {
        name: "Full name",
        email: "Email",
        role: "Your role",
        message: "Message",
        submit: "Send"
      },
      roles: [
        "European institution",
        "Local authority",
        "Institutional investor", 
        "Technology partner",
        "Specialized media",
        "Other"
      ]
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    alert(language === 'fr' ? 'Message envoyé !' : 'Message sent!')
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {content[language].title}
          </h2>
          <p className="text-xl text-blue-600 font-semibold">
            {content[language].subtitle}
          </p>
        </div>

        <div className="card">
          <div className="card-content">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {content[language].form.name}
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="input"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {content[language].form.email}
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="input"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {content[language].form.role}
                </label>
                <select
                  name="role"
                  value={formData.role}
                  onChange={handleChange}
                  className="input"
                  required
                >
                  <option value="">Sélectionner...</option>
                  {content[language].roles.map((role, index) => (
                    <option key={index} value={role}>{role}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {content[language].form.message}
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="textarea"
                  required
                />
              </div>

              <button type="submit" className="btn btn-primary w-full">
                {content[language].form.submit}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact

