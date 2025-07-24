import { useState } from 'react'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Aquí puedes añadir la lógica para enviar el formulario
    console.log('Formulario enviado:', formData)
    alert('Gracias por tu mensaje. Te contactaremos pronto.')
    setFormData({ name: '', email: '', subject: '', message: '' })
  }

  return (
    <div>
      <h1>Contacto</h1>
      <p>
        ¿Necesitas asesoría legal? No dudes en contactarnos. Estamos aquí 
        para ayudarte con todas tus necesidades legales.
      </p>

      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
        gap: '3rem', 
        marginTop: '2rem' 
      }}>
        <div>
          <h2>Información de Contacto</h2>
          <div style={{ marginTop: '1rem' }}>
            <p><strong>Dirección:</strong></p>
            <p>Av. Principal #123<br />Ciudad, País</p>
            
            <p style={{ marginTop: '1rem' }}><strong>Teléfono:</strong></p>
            <p>+1 (555) 123-4567</p>
            
            <p style={{ marginTop: '1rem' }}><strong>Email:</strong></p>
            <p>info@bflaw.com</p>
            
            <p style={{ marginTop: '1rem' }}><strong>Horarios:</strong></p>
            <p>Lunes - Viernes: 9:00 AM - 6:00 PM<br />
               Sábados: 9:00 AM - 2:00 PM</p>
          </div>
        </div>

        <div>
          <h2>Envíanos un Mensaje</h2>
          <form onSubmit={handleSubmit} style={{ marginTop: '1rem' }}>
            <div style={{ marginBottom: '1rem' }}>
              <input
                type="text"
                name="name"
                placeholder="Tu nombre"
                value={formData.name}
                onChange={handleChange}
                required
                style={{
                  width: '100%',
                  padding: '0.8rem',
                  border: '1px solid #ddd',
                  borderRadius: '4px',
                  fontSize: '1rem'
                }}
              />
            </div>
            
            <div style={{ marginBottom: '1rem' }}>
              <input
                type="email"
                name="email"
                placeholder="Tu email"
                value={formData.email}
                onChange={handleChange}
                required
                style={{
                  width: '100%',
                  padding: '0.8rem',
                  border: '1px solid #ddd',
                  borderRadius: '4px',
                  fontSize: '1rem'
                }}
              />
            </div>
            
            <div style={{ marginBottom: '1rem' }}>
              <input
                type="text"
                name="subject"
                placeholder="Asunto"
                value={formData.subject}
                onChange={handleChange}
                required
                style={{
                  width: '100%',
                  padding: '0.8rem',
                  border: '1px solid #ddd',
                  borderRadius: '4px',
                  fontSize: '1rem'
                }}
              />
            </div>
            
            <div style={{ marginBottom: '1rem' }}>
              <textarea
                name="message"
                placeholder="Tu mensaje"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
                style={{
                  width: '100%',
                  padding: '0.8rem',
                  border: '1px solid #ddd',
                  borderRadius: '4px',
                  fontSize: '1rem',
                  resize: 'vertical'
                }}
              />
            </div>
            
            <button
              type="submit"
              style={{
                backgroundColor: '#61dafb',
                color: '#1a1a1a',
                padding: '0.8rem 2rem',
                border: 'none',
                borderRadius: '4px',
                fontSize: '1rem',
                cursor: 'pointer',
                fontWeight: 'bold'
              }}
            >
              Enviar Mensaje
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact 