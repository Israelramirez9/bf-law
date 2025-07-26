export function Clients() {
  const services = [
    {
      title: "Derecho Civil",
      description: "Contratos, responsabilidad civil, derecho de familia y más."
    },
    {
      title: "Derecho Penal",
      description: "Defensa penal, representación en juicios criminales."
    },
    {
      title: "Derecho Comercial",
      description: "Constitución de empresas, contratos comerciales, fusiones."
    },
    {
      title: "Derecho Laboral",
      description: "Despidos, conflictos laborales, negociaciones colectivas."
    },
    {
      title: "Derecho Inmobiliario",
      description: "Compraventa, arrendamientos, registros de propiedad."
    },
    {
      title: "Derecho Tributario",
      description: "Asesoría fiscal, controversias con hacienda."
    }
  ]

  return (
    <div>
      <h1>Nuestros Servicios</h1>
      <p>
        Ofrecemos una amplia gama de servicios legales adaptados a las
        necesidades específicas de cada cliente.
      </p>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '2rem',
        marginTop: '2rem'
      }}>
        {services.map((service, index) => (
          <div key={index} style={{
            border: '1px solid #ddd',
            borderRadius: '8px',
            padding: '1.5rem',
            backgroundColor: '#f9f9f9'
          }}>
            <h3 style={{ color: '#61dafb', marginBottom: '1rem' }}>
              {service.title}
            </h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>

      <div style={{ marginTop: '3rem', textAlign: 'center' }}>
        <p>
          <strong>¿No encuentras el servicio que necesitas?</strong>
        </p>
        <p>
          Contáctanos y te ayudaremos a encontrar la solución legal adecuada.
        </p>
      </div>
    </div>
  )
}

