import { useState, useEffect } from 'react'
import { FaFacebookF, FaInstagram } from 'react-icons/fa6'
import './App.css'

const WHATSAPP_NUMBER = '56965515899'

function whatsappLink(message) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
}

const programs = [
  {
    tag: '01 / FUNDAMENTOS',
    title: 'BJJ para Principiantes',
    text: 'Aprende las bases con calma, seguridad y una guía técnica clara desde tu primera clase.',
    features: ['Desde cero y sin experiencia previa', 'Técnicas de control y escape', 'Ambiente seguro y sin golpes'],
    action: 'Quiero comenzar',
    featured: false,
  },
  {
    tag: '02 / EXCLUSIVO',
    badge: 'MÁS SOLICITADO',
    title: 'Clases 1 a 1',
    text: 'Entrenamiento enfocado 100% en tus objetivos personales, tu ritmo y los detalles que quieres perfeccionar.',
    features: ['Plan técnico individualizado', 'Horarios flexibles a convenir', 'Atención directa y corrección al detalle'],
    action: 'Consultar 1 a 1',
    featured: true,
  },
  {
    tag: '03 / COMUNIDAD',
    title: 'Clases Grupales',
    text: 'Técnica, movimiento corporal y sparring guiado en un equipo exigente, cercano y de gran respeto.',
    features: ['Hombres y mujeres de todos los niveles', 'Desarrollo de resistencia y agilidad', 'Comunidad y compañerismo en el tatami'],
    action: 'Ver horarios',
    featured: false,
  },
]

const belts = [
  { color: 'white', name: 'Blanca', time: '1 - 2 años', meaning: 'Fundamentos, confianza y primeras herramientas de supervivencia.' },
  { color: 'blue', name: 'Azul', time: '2 - 4 años', meaning: 'Defensa sólida, combinaciones estratégicas y mayor autonomía.' },
  { color: 'purple', name: 'Morada', time: '1 - 3 años', meaning: 'Fluidez de movimiento, lectura del oponente y ritmo de juego.' },
  { color: 'brown', name: 'Marrón', time: '1 - 2 años', meaning: 'Presión precisa y refinamiento técnico previo al cinturón negro.' },
  { color: 'black', name: 'Negra', time: '8 - 12+ años', meaning: 'Maestría marcial, criterio técnico y el compromiso de seguir aprendiendo.' },
]

function App() {
  const generalMessage = 'Hola, me gustaría recibir información sobre las clases de BJJ.'
  const currentYear = new Date().getFullYear()
  const [contactForm, setContactForm] = useState({ name: '', phone: '', email: '', occupation: '', reason: '', otherReason: '', query: '' })
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    function handleScroll() {
      setIsScrolled(window.scrollY > 25)
    }
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  function updateContactForm(event) {
    const { name, value } = event.target
    setContactForm((current) => ({ ...current, [name]: value }))
  }

  function submitContactForm(event) {
    event.preventDefault()
    const selectedReason = contactForm.reason === 'Otro' ? contactForm.otherReason : contactForm.reason
    const message = [
      'Hola Pamela, quiero hacer una consulta desde tu pagina web.',
      `Nombre: ${contactForm.name}`,
      `Telefono: ${contactForm.phone}`,
      contactForm.email ? `Correo: ${contactForm.email}` : '',
      contactForm.occupation ? `Profesion u ocupacion: ${contactForm.occupation}` : '',
      `Motivo: ${selectedReason}`,
      `Consulta: ${contactForm.query}`,
    ].filter(Boolean).join('\n')
    window.open(whatsappLink(message), '_blank', 'noopener,noreferrer')
  }

  return (
    <div className="site-shell">
      <header className={`site-header ${isScrolled ? 'header-scrolled' : 'header-top'}`}>
        <div className="header-inner">
          <a className="brand" href="#inicio" aria-label="Pívot Pamela BJJ, inicio">
            <img className="brand-logo" src="/images/2_Logo Pivot Transparente 2.png" alt="Pívot - Pamela BJJ" />
          </a>
          <nav className="desktop-nav" aria-label="Navegación principal">
            <a href="#sobre-mi">Sobre mí</a>
            <a href="#historia">Historia</a>
            <a href="#bjj">¿Qué es BJJ?</a>
            <a href="#clases">Clases</a>
            <a href="#cinturones">Cinturones</a>
            <a href="#contacto">Contacto</a>
          </nav>
          <a className="button button-whatsapp button-small" href={whatsappLink(generalMessage)} target="_blank" rel="noreferrer">
            <span className="whatsapp-icon">◔</span> WhatsApp
          </a>
        </div>
      </header>

      <main>
        <section className="hero" id="inicio">
          <div className="hero-content">
            <div className="hero-copy">
              <div className="hero-status-pill">
                <span className="status-dot"></span>
                <span>Clases en Santiago, Chile · Abiertas para todos los niveles</span>
              </div>
              <h1>Entrena con <em>propósito.</em></h1>
              <p className="hero-lead">
                Clases de Brazilian Jiu-Jitsu para hombres y mujeres que quieren aprender defensa, fortalecerse y descubrir el poder de la técnica y la constancia.
              </p>
              <div className="button-row">
                <a className="button button-primary" href={whatsappLink('Hola, quiero agendar mi clase de prueba de BJJ.')} target="_blank" rel="noreferrer">
                  Agendar clase de prueba <span>↗</span>
                </a>
                <a className="button button-outline" href="#clases">Conocer las clases</a>
              </div>
              <div className="hero-stats">
                <div className="stat-card">
                  <strong>10+</strong>
                  <span>Años de trayectoria</span>
                </div>
                <div className="stat-divider"></div>
                <div className="stat-card">
                  <strong>100%</strong>
                  <span>Atención cercana</span>
                </div>
                <div className="stat-divider"></div>
                <div className="stat-card">
                  <strong>2º GRAU</strong>
                  <span>Faixa Preta BJJ</span>
                </div>
              </div>
            </div>

            <div className="hero-visual">
              <div className="image-frame">
                <img
                  src="/images/Pamela bjj Perfil.png"
                  alt="Pamela Vargas Milla practicando Brazilian Jiu-Jitsu"
                  width="1142"
                  height="1377"
                  fetchPriority="high"
                />
              </div>
            </div>
          </div>

          <div className="hero-details">
            <div className="detail-item">
              <span className="detail-icon">◌</span>
              <div>
                <small>PARA TODOS</small>
                <strong>Hombres y mujeres</strong>
              </div>
            </div>
            <div className="detail-item">
              <span className="detail-icon">◈</span>
              <div>
                <small>NIVEL</small>
                <strong>Desde cero a avanzado</strong>
              </div>
            </div>
            <div className="detail-item">
              <span className="detail-icon">↗</span>
              <div>
                <small>PRIMER PASO</small>
                <strong>Agenda tu clase de prueba</strong>
              </div>
            </div>
          </div>
          <a className="scroll-cue" href="#sobre-mi"><span></span> Desliza para conocer más</a>
        </section>

        <section className="intro-section" id="sobre-mi">
          <div className="section-container">
            <div className="section-header">
              <span className="section-badge">01 / SOBRE MÍ</span>
              <h2>Más que un deporte.<br /><em>Una forma de vivir.</em></h2>
              <div className="section-header-line"></div>
            </div>

            <div className="intro-grid">
              <div className="intro-card">
                <div className="intro-card-badge">PERFIL TÉCNICO</div>
                <h3>Pamela Vargas Milla</h3>
                <p className="intro-card-subtitle">Profesora de Brazilian Jiu-Jitsu</p>
                <div className="intro-badges">
                  <span>Faixa Preta 2º Grau</span>
                  <span>Constrictors JJ Argentina</span>
                  <span>Lic. en Arte Dramático</span>
                  <span>Especialista en Teatro Físico</span>
                </div>
                <div className="intro-card-quote">
                  <p>“El jiu-jitsu me enseñó que la fuerza no está en empujar más fuerte, sino en aprender a moverse mejor.”</p>
                </div>
              </div>

              <div className="intro-copy">
                <p className="lead-text">
                  Antes de encontrar el Brazilian Jiu-Jitsu, me formé como Licenciada en Arte Dramático e Intérprete Dramático, especializándome durante años en teatro físico y conciencia corporal.
                </p>
                <p>
                  Esa mirada me enseñó a observar el cuerpo con máxima atención: cada apoyo, cada palanca y la respiración bajo presión tienen un porqué.
                </p>
                <p>
                  Hoy dirijo mis clases en Chile con una metodología técnica, segura y humana, para que cada practicante descubra su fuerza, supere sus límites y disfrute el proceso a su propio ritmo.
                </p>
                <div className="profile-actions">
                  <a className="button button-primary" href={whatsappLink('Hola Pamela, quiero conocer más sobre tu forma de entrenar.')} target="_blank" rel="noreferrer">
                    Conversemos por WhatsApp <span>↗</span>
                  </a>
                  <a className="button button-outline" href="https://www.threads.com/@pamelavargasmilla?xmt=AQG09fUXuBAoe1swIPju-eovePFq2VlTeoojpsEcR4SmXuXuQ" target="_blank" rel="noreferrer">
                    Ver perfil de Threads <span>↗</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="story-section" id="historia">
          <div className="section-container">
            <div className="section-header">
              <span className="section-badge">02 / LA HISTORIA DETRÁS DEL KIMONO</span>
              <h2>Una vida de <em>movimiento.</em></h2>
              <div className="section-header-line"></div>
            </div>

            <div className="story-grid">
              <div className="story-timeline-card">
                <div className="story-year">2008</div>
                <div className="story-year-label">EL COMIENZO</div>
                <p className="story-year-desc">
                  En octubre de 2008 tomé mi primera clase de BJJ en Argentina. Lo que empezó como una herramienta para el entrenamiento corporal se convirtió en el eje de mi vida.
                </p>
                <div className="story-stat-box">
                  <strong>16+</strong>
                  <span>Años ininterrumpidos en el arte marcial</span>
                </div>
              </div>

              <div className="story-copy">
                <p>
                  Lo que comenzó como una búsqueda artística rápidamente se transformó en una vocación: el jiu-jitsu me resultó natural, desafiante y profundamente transformador.
                </p>
                <p>
                  Con el tiempo, esta práctica dio forma a mi camino en <strong>Constrictors Jiu Jitsu</strong> y a mi entrega total a la enseñanza. Tras alcanzar la faixa preta y el 2º grado, hoy sigo perfeccionándome día a día para entregar una enseñanza de calidad internacional a mis alumnos en Chile.
                </p>
                <blockquote className="editorial-quote">
                  “El BJJ me equilibra en lo físico y en lo mental. Me trae al aquí y ahora.”
                </blockquote>
              </div>
            </div>
          </div>
        </section>

        <section className="discipline-section" id="bjj">
          <div className="section-container">
            <div className="section-header">
              <span className="section-badge">03 / CONOCE LA DISCIPLINA</span>
              <h2>Técnica, estrategia <em>y control.</em></h2>
              <p className="section-lead">El Brazilian Jiu-Jitsu es un arte marcial enfocado en la inteligencia corporal, el control posicional y la resolución de situaciones sin depender únicamente del tamaño o la fuerza.</p>
              <div className="section-header-line"></div>
            </div>

            <div className="discipline-grid">
              <article className="discipline-card">
                <div className="card-top">
                  <span className="discipline-number">01</span>
                  <span className="card-badge">FUNDAMENTAL</span>
                </div>
                <h3>Control y Técnica</h3>
                <p>
                  Se practica principalmente en el suelo mediante posiciones, desplazamientos, palancas y estrangulaciones técnicas para neutralizar a un oponente con máxima eficiencia.
                </p>
              </article>

              <article className="discipline-card">
                <div className="card-top">
                  <span className="discipline-number">02</span>
                  <span className="card-badge">PRÁCTICO</span>
                </div>
                <h3>Defensa Personal</h3>
                <p>
                  Desarrolla calma mental, control de la respiración y herramientas efectivas para protegerte, escapar de situaciones de riesgo y tomar mejores decisiones bajo presión.
                </p>
              </article>

              <article className="discipline-card">
                <div className="card-top">
                  <span className="discipline-number">03</span>
                  <span className="card-badge">ESTILO DE VIDA</span>
                </div>
                <h3>Deporte y Comunidad</h3>
                <p>
                  Combina entrenamiento físico integral con un grupo humano sano. Cada persona avanza a su ritmo, ya sea por bienestar, superación personal o competencia.
                </p>
              </article>
            </div>

            <div className="discipline-cta-box">
              <div className="cta-box-text">
                <strong>¿Nunca has practicado un arte marcial?</strong>
                <p>No necesitas experiencia previa ni una condición física especial para dar tu primer paso.</p>
              </div>
              <a className="button button-primary" href={whatsappLink('Hola Pamela, quiero saber como comenzar a practicar Brazilian Jiu-Jitsu.')} target="_blank" rel="noreferrer">
                Preguntar cómo comenzar <span>↗</span>
              </a>
            </div>
          </div>
        </section>

        <section className="classes-section" id="clases">
          <div className="section-container">
            <div className="section-header">
              <span className="section-badge">04 / PROGRAMAS DISPONIBLES</span>
              <h2>Clases diseñadas para <em>cada etapa.</em></h2>
              <p className="section-lead">Elige la modalidad que mejor se adapte a tus tiempos, objetivos y nivel de entrenamiento.</p>
              <div className="section-header-line"></div>
            </div>

            <div className="program-grid">
              {programs.map((program) => (
                <article className={`program-card ${program.featured ? 'program-card-featured' : ''}`} key={program.title}>
                  {program.badge && <span className="featured-ribbon">{program.badge}</span>}
                  <div className="program-header">
                    <span className="program-tag">{program.tag}</span>
                    <h3>{program.title}</h3>
                  </div>
                  <p className="program-desc">{program.text}</p>
                  <ul className="program-features">
                    {program.features.map((feat) => (
                      <li key={feat}>
                        <span className="check-icon">✓</span>
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                  <a
                    className={`button ${program.featured ? 'button-primary' : 'button-outline'} program-btn`}
                    href={whatsappLink(`Hola Pamela, me interesa ${program.title.toLowerCase()}.`)}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {program.action} <span>↗</span>
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="belts-section" id="cinturones">
          <div className="section-container">
            <div className="section-header">
              <span className="section-badge">LA RUTA DEL JIU-JITSU</span>
              <h2>Cada cinturón es <em>una nueva pregunta.</em></h2>
              <p className="section-lead">Tiempos de referencia basados en constancia, técnica y criterio pedagógico de la profesora.</p>
              <div className="section-header-line"></div>
            </div>

            <div className="belt-list">
              {belts.map((belt) => (
                <article className="belt-item" key={belt.name}>
                  <div className="belt-top">
                    <span className={`belt-swatch belt-${belt.color}`}></span>
                    <span className="belt-time">{belt.time}</span>
                  </div>
                  <div className="belt-info">
                    <h3>{belt.name}</h3>
                    <p>{belt.meaning}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="quote-section">
          <div className="quote-container">
            <div className="quote-mark">“</div>
            <blockquote>
              La técnica te da herramientas.<br />
              <em>La constancia te transforma.</em>
            </blockquote>
            <span className="quote-rule"></span>
            <p>PAMELA BJJ · PÍVOT ACADEMIA · CHILE</p>
          </div>
        </section>

        <section className="contact-section" id="contacto">
          <div className="section-container contact-wrapper">
            <div className="contact-content">
              <span className="section-badge">05 / COMENCEMOS</span>
              <h2>Tu primera clase<br /><em>empieza aquí.</em></h2>
              <p className="contact-lead">
                Completa tus datos para coordinar tu clase de prueba o resolver cualquier duda directamente con Pamela por WhatsApp.
              </p>

              <div className="contact-info-cards">
                <div className="info-card">
                  <small>CANAL DIRECTO</small>
                  <strong>WhatsApp Personalizado</strong>
                  <span>Respuesta rápida y cercana</span>
                </div>
                <div className="info-card">
                  <small>UBICACIÓN</small>
                  <strong>Santiago, Chile</strong>
                  <span>Clases presenciales</span>
                </div>
              </div>
            </div>

            <form className="contact-form" onSubmit={submitContactForm}>
              <div className="form-header">
                <h3>Formulario de Contacto</h3>
                <p>Te responderemos directamente a tu WhatsApp.</p>
              </div>

              <div className="form-grid">
                <label>
                  Nombre completo
                  <input
                    name="name"
                    type="text"
                    value={contactForm.name}
                    onChange={updateContactForm}
                    placeholder="Tu nombre y apellido"
                    required
                  />
                </label>
                <label>
                  Teléfono / WhatsApp
                  <input
                    name="phone"
                    type="tel"
                    value={contactForm.phone}
                    onChange={updateContactForm}
                    placeholder="+56 9 1234 5678"
                    required
                  />
                </label>
              </div>

              <div className="form-grid">
                <label>
                  Correo electrónico <span>(opcional)</span>
                  <input
                    name="email"
                    type="email"
                    value={contactForm.email}
                    onChange={updateContactForm}
                    placeholder="tu@correo.com"
                  />
                </label>
                <label>
                  Profesión u ocupación <span>(opcional)</span>
                  <input
                    name="occupation"
                    type="text"
                    value={contactForm.occupation}
                    onChange={updateContactForm}
                    placeholder="¿A qué te dedicas?"
                  />
                </label>
              </div>

              <label>
                Motivo de contacto
                <select name="reason" value={contactForm.reason} onChange={updateContactForm} required>
                  <option value="">Selecciona una opción</option>
                  <option value="Clase de prueba">Clase de prueba</option>
                  <option value="Clases grupales">Clases grupales</option>
                  <option value="Clase personalizada 1 a 1">Clase personalizada 1 a 1</option>
                  <option value="BJJ femenino">BJJ femenino</option>
                  <option value="Horarios y ubicación">Horarios y ubicación</option>
                  <option value="Otro">Otro</option>
                </select>
              </label>

              {contactForm.reason === 'Otro' && (
                <label>
                  Especifica el motivo
                  <input
                    name="otherReason"
                    type="text"
                    value={contactForm.otherReason}
                    onChange={updateContactForm}
                    placeholder="Cuéntame el motivo de tu consulta"
                    required
                  />
                </label>
              )}

              <label>
                Tu consulta o mensaje
                <textarea
                  name="query"
                  value={contactForm.query}
                  onChange={updateContactForm}
                  placeholder="Cuéntame si tienes experiencia previa, tus objetivos o tus dudas..."
                  rows="4"
                  required
                />
              </label>

              <button className="button button-whatsapp submit-button" type="submit">
                <span className="whatsapp-icon">◔</span> Enviar consulta por WhatsApp <span>↗</span>
              </button>
            </form>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="footer-inner">
          <div className="footer-brand">
            <img className="brand-logo" src="/images/2_Logo Pivot Transparente 2.png" alt="Pívot - Pamela BJJ" />
            <div>
              <strong>PÍVOT · ACADEMIA DE BJJ</strong>
              <small>© {currentYear} · Pamela Vargas Milla · Entrena con propósito.</small>
            </div>
          </div>

          <div className="footer-socials" aria-label="Redes sociales">
            <a className="social-icon" href="https://www.instagram.com/pamelavargasmilla/" target="_blank" rel="noreferrer" aria-label="Instagram de Pamela BJJ">
              <FaInstagram aria-hidden="true" />
            </a>
            <a className="social-icon" href="https://www.facebook.com/pamela.v.milla" target="_blank" rel="noreferrer" aria-label="Facebook de Pamela BJJ">
              <FaFacebookF aria-hidden="true" />
            </a>
          </div>

          <div className="footer-credit">
            <span>Diseño & Desarrollo web</span>
            <a href="https://www.linkedin.com/in/anyelo-b-84ab65147/" target="_blank" rel="noreferrer">
              Anyelo Bustos Galdames · LinkedIn ↗
            </a>
          </div>

          <a className="footer-top" href="#inicio">Volver arriba ↑</a>
        </div>
      </footer>
    </div>
  )
}

export default App
