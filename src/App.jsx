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
    title: 'Clases de BJJ para Principiantes',
    text: 'Aprende los fundamentos del Brazilian Jiu-Jitsu desde cero, con seguridad, pedagogía clara y sin golpes ni lesiones.',
    features: ['Desde cero y sin experiencia previa', 'Técnicas de control, escape y defensa personal', 'Ambiente seguro, respetuoso y guiado'],
    action: 'Quiero comenzar',
    featured: false,
  },
  {
    tag: '02 / EXCLUSIVO',
    badge: 'MÁS SOLICITADO',
    title: 'Clases Particulares 1 a 1 de BJJ',
    text: 'Entrenamiento individualizado enfocado al 100% en tus metas personales, ritmo y detalles técnicos finos.',
    features: ['Plan técnico y pedagógico individualizado', 'Horarios flexibles a convenir en Santiago', 'Corrección al detalle y avance acelerado'],
    action: 'Consultar 1 a 1',
    featured: true,
  },
  {
    tag: '03 / COMUNIDAD',
    title: 'Clases Grupales de Brazilian Jiu-Jitsu',
    text: 'Técnica, motricidad y sparring supervisado en un equipo exigente, motivador y con profundo respeto marcial.',
    features: ['Hombres y mujeres de todos los niveles', 'Resistencia física, agilidad y reflejos', 'Excelente ambiente de compañerismo en el tatami'],
    action: 'Ver horarios',
    featured: false,
  },
]

const faqs = [
  {
    question: '¿Cómo son las clases de Brazilian Jiu-Jitsu para principiantes?',
    answer: 'Las clases de BJJ para principiantes están enfocadas en aprender las bases: posturas, caídas seguras, escapes y control posicional. Se enseña paso a paso en un ambiente seguro, controlado y sin golpes, ideal para personas sin ninguna experiencia marcial previa.',
  },
  {
    question: '¿Necesito condición física o experiencia previa para tomar clases de BJJ?',
    answer: 'No. No necesitas estar en forma para empezar; las clases de Brazilian Jiu-Jitsu te pondrán en forma. Desarrollarás resistencia cardiovascular, fuerza funcional, movilidad y flexibilidad de manera natural y progresiva a tu propio ritmo.',
  },
  {
    question: '¿Qué necesito llevar para mi primera clase de Brazilian Jiu-Jitsu?',
    answer: 'Para tu primera clase de prueba solo necesitas ropa deportiva cómoda (calzas o short deportivo sin cierres metálicos y polera) y una botella de agua. Si decides continuar, Pamela te orientará sobre cómo elegir tu kimono (gi) de BJJ.',
  },
  {
    question: '¿Las clases de Brazilian Jiu-Jitsu son aptas para mujeres?',
    answer: 'Absolutamente. El Brazilian Jiu-Jitsu es una de las disciplinas de defensa personal más recomendadas y efectivas para mujeres, ya que prioriza el uso de palancas biomecánicas, distribución de peso y técnica por sobre la fuerza física o el tamaño.',
  },
  {
    question: '¿Cómo agendar una clase de prueba de BJJ en Chile?',
    answer: 'Puedes agendar directamente haciendo clic en el botón de WhatsApp o completando el formulario al final de la página. Pamela responderá tus dudas personalmente y coordinarán el día y horario que mejor te acomode.',
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
            <img className="brand-logo" src="/FaviconLogoPivot.png" alt="Pívot - Pamela BJJ" />
          </a>
          <nav className="desktop-nav" aria-label="Navegación principal">
            <a href="#sobre-mi">Sobre mí</a>
            <a href="#linaje">Linaje</a>
            <a href="#historia">Historia</a>
            <a href="#bjj">¿Qué es BJJ?</a>
            <a href="#clases">Clases</a>
            <a href="#cinturones">Cinturones</a>
            <a href="#faq">Preguntas</a>
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
                <span>Clases de Brazilian Jiu-Jitsu en Santiago, Chile · Todos los niveles</span>
              </div>
              <h1>Clases de <em>Brazilian Jiu-Jitsu</em> en Chile</h1>
              <p className="hero-lead">
                Aprende la disciplina y defensa personal del jiu-jitsu brasileño con técnica precisa, seguridad y atención cercana. Clases para principiantes desde cero, entrenamiento personalizado 1 a 1 y clases grupales en Santiago con la profesora Pamela Vargas Milla (Faixa Preta 2º Grau).
              </p>
              <div className="button-row">
                <a className="button button-primary" href={whatsappLink('Hola Pamela, quiero agendar mi clase de prueba de Brazilian Jiu-Jitsu.')} target="_blank" rel="noreferrer">
                  Agendar clase de prueba <span>↗</span>
                </a>
                <a className="button button-outline" href="#clases">Ver opciones de clases</a>
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
                  alt="Clases de Brazilian Jiu-Jitsu en Chile con Pamela Vargas Milla Faixa Preta"
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

        <section className="lineage-section" id="linaje">
          <div className="section-container">
            <div className="section-header">
              <span className="section-badge">02 / LINAJE Y RESPALDO</span>
              <h2>Una enseñanza con <em>raíces.</em></h2>
              <p className="section-lead">
                Pamela forma parte de Constrictors Jiu-Jitsu, equipo reconocido por Corpo &amp; Mente.
              </p>
              <div className="section-header-line"></div>
            </div>

            <div className="lineage-card">
              <div className="lineage-image-wrap">
                <img
                  className="lineage-image"
                  src="/humberto-7-grau.jpeg"
                  alt="Humberto Tavares, Professor Faixa Preta 7º Grau de Corpo & Mente"
                  loading="lazy"
                />
              </div>
              <div className="lineage-copy">
                <img
                  className="lineage-logo"
                  src="/1_Logo Corpo & Mente Transparente.png"
                  alt="Logo de Corpo & Mente Jiu-Jitsu"
                  loading="lazy"
                />
                <span className="intro-card-badge">CORPO &amp; MENTE · BRASIL</span>
                <h3>Professor Humberto Tavares</h3>
                <p className="lineage-title">Faixa Preta 7º Grau · Criador de Equipe Corpo &amp; Mente</p>
                <p>
                  Pamela pertenece a una línea de formación respaldada por la experiencia de Humberto Tavares,
                  referente brasileño y fundador de Equipe Corpo &amp; Mente.
                </p>
                <a
                  className="button button-outline"
                  href="https://equipecorpoemente.com.br/about/lideres.html"
                  target="_blank"
                  rel="noreferrer"
                >
                  Conocer a Corpo &amp; Mente <span>↗</span>
                </a>
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
              <span className="section-badge">04 / CLASES DE BRAZILIAN JIU-JITSU</span>
              <h2>Clases de BJJ diseñadas para <em>cada nivel.</em></h2>
              <p className="section-lead">Elige la modalidad que mejor se adapte a tus objetivos: desde clases de BJJ para principiantes desde cero hasta clases particulares 1 a 1 en Santiago, Chile.</p>
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

        <section className="faq-section" id="faq">
          <div className="section-container">
            <div className="section-header">
              <span className="section-badge">05 / PREGUNTAS FRECUENTES</span>
              <h2>Todo sobre nuestras <em>clases de BJJ.</em></h2>
              <p className="section-lead">
                Resolvemos las dudas más habituales sobre las clases de Brazilian Jiu-Jitsu en Santiago, Chile: niveles, equipamiento y cómo empezar.
              </p>
              <div className="section-header-line"></div>
            </div>

            <div className="faq-grid">
              {faqs.map((faq, index) => (
                <article className="faq-card" key={index}>
                  <div className="faq-card-header">
                    <span className="faq-tag">0{index + 1}</span>
                    <h3>{faq.question}</h3>
                  </div>
                  <p className="faq-answer">{faq.answer}</p>
                </article>
              ))}
            </div>

            <div className="faq-cta-bar">
              <div className="faq-cta-info">
                <strong>¿Tienes otra duda sobre las clases o los horarios?</strong>
                <p>Escríbenos directamente por WhatsApp y te orientaremos en todo lo que necesites.</p>
              </div>
              <a className="button button-whatsapp button-small" href={whatsappLink('Hola Pamela, tengo una duda sobre las clases de Brazilian Jiu-Jitsu.')} target="_blank" rel="noreferrer">
                <span className="whatsapp-icon">◔</span> Consultar por WhatsApp <span>↗</span>
              </a>
            </div>
          </div>
        </section>

        <section className="contact-section" id="contacto">
          <div className="section-container contact-wrapper">
            <div className="contact-content">
              <span className="section-badge">06 / COMENCEMOS</span>
              <h2>Tu primera clase<br /><em>empieza aquí.</em></h2>
              <p className="contact-lead">
                Completa tus datos para coordinar tu clase de prueba de Brazilian Jiu-Jitsu o resolver cualquier duda directamente con Pamela por WhatsApp.
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
            <img className="brand-logo" src="/FaviconLogoPivot.png" alt="Pívot - Pamela BJJ" />
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
