import { useState } from 'react'
import { FaFacebookF, FaInstagram } from 'react-icons/fa6'
import './App.css'

const WHATSAPP_NUMBER = '56965515899'

function whatsappLink(message) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
}

const programs = [
  { tag: '01 / DESDE CERO', title: 'BJJ para principiantes', text: 'Aprende las bases con calma, seguridad y una guia clara desde tu primera clase.', action: 'Quiero comenzar' },
  { tag: '02 / PERSONALIZADO', title: 'Clases 1 a 1', text: 'Entrenamiento enfocado en tus objetivos, tu ritmo y los detalles que quieres mejorar.', action: 'Consultar 1 a 1' },
  { tag: '03 / COMUNIDAD', title: 'Clases grupales', text: 'Tecnica, movimiento y sparring guiado en un ambiente exigente, cercano y respetuoso.', action: 'Ver horarios' },
]

const belts = [
  { color: 'white', name: 'Blanca', time: '1 - 2 anos', meaning: 'Fundamentos, confianza y primeras herramientas.' },
  { color: 'blue', name: 'Azul', time: '2 - 4 anos', meaning: 'Defensa, estrategia y mayor autonomia.' },
  { color: 'purple', name: 'Morada', time: '1 - 3 anos', meaning: 'Fluidez, combinaciones y lectura del juego.' },
  { color: 'brown', name: 'Marron', time: '1 - 2 anos', meaning: 'Precision, presion y refinamiento tecnico antes de la negra.' },
  { color: 'black', name: 'Negra', time: '8 - 12+ anos total', meaning: 'Maestria, criterio y el compromiso de seguir aprendiendo.' },
]

function App() {
  const generalMessage = 'Hola, me gustaria recibir informacion sobre las clases de BJJ.'
  const [contactForm, setContactForm] = useState({ name: '', phone: '', email: '', occupation: '', reason: '', otherReason: '', query: '' })

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
      <header className="site-header">
        <a className="brand" href="#inicio" aria-label="PAMELA BJJ, inicio"><span className="brand-mark">PB</span><span>PAMELA <strong>BJJ</strong></span></a>
        <nav className="desktop-nav" aria-label="Navegacion principal"><a href="#sobre-mi">Sobre mi</a><a href="#historia">Historia</a><a href="#bjj">¿Qué es BJJ?</a><a href="#clases">Clases</a><a href="#cinturones">Cinturones</a><a href="#contacto">Contacto</a></nav>
        <a className="button button-whatsapp button-small" href={whatsappLink(generalMessage)} target="_blank" rel="noreferrer"><span className="whatsapp-icon">◔</span> WhatsApp</a>
      </header>

      <main>
        <section className="hero" id="inicio">
          <div className="hero-content">
            <div className="hero-copy"><p className="eyebrow">Brazilian Jiu-Jitsu · Santiago</p><h1>Entrena con <em>proposito.</em></h1><p className="hero-lead">Un espacio para hombres y mujeres que quieren aprender, fortalecerse y descubrir todo lo que pueden hacer con tecnica y constancia.</p><div className="button-row"><a className="button button-primary" href={whatsappLink('Hola, quiero agendar mi clase de prueba de BJJ.')} target="_blank" rel="noreferrer">Agendar clase de prueba <span>↗</span></a><a className="button button-outline" href="#clases">Conocer las clases</a></div><div className="hero-stats"><div><strong>10+</strong><span>Anos entrenando</span></div><div><strong>100%</strong><span>Atencion cercana</span></div><div><strong>∞</strong><span>Ganas de aprender</span></div></div></div>
            <div className="hero-visual"><div className="image-frame"><img src="/images/pamela-bjj-hero.png" alt="Pamela practicando Brazilian Jiu-Jitsu" width="1200" height="1600" fetchPriority="high" /></div><div className="credential-card"><span className="credential-line"></span><div><strong>PROFESORA</strong><span>Pamela BJJ</span></div><b>FAIXA<br />PRETA <small>2º GRAU</small></b></div><span className="hero-stamp">DISCIPLINA<br /><i>+ MOVIMIENTO</i></span></div>
          </div>
          <a className="scroll-cue" href="#sobre-mi"><span></span> Desliza para conocerme</a>
        </section>

        <section className="intro-section" id="sobre-mi"><div className="section-kicker">01 / SOBRE MI</div><div className="intro-grid"><div className="intro-title"><h2>Mas que un deporte.<br /><em>Una forma de vivir.</em></h2></div><div className="intro-copy"><p className="profile-bio">Prof. de Brazilian Jiu-Jitsu · Black belt 2º Grau · Corpo e Mente · CONSTRICTORS JIU JITSU ARGENTINA · Hoy en Chile 🇨🇱</p><p>El jiu-jitsu me enseno que la fuerza no siempre esta en empujar mas fuerte, sino en aprender a moverse mejor.</p><p>Hoy quiero compartir esa experiencia contigo, en un espacio donde puedas avanzar a tu ritmo, superar tus limites y disfrutar el proceso.</p><div className="profile-actions"><a className="text-link" href={whatsappLink('Hola Pamela, quiero conocer mas sobre tu forma de entrenar.')} target="_blank" rel="noreferrer">Conversemos por WhatsApp <span>→</span></a><a className="text-link" href="https://www.threads.com/@pamelavargasmilla?xmt=AQG09fUXuBAoe1swIPju-eovePFq2VlTeoojpsEcR4SmXuXuQ" target="_blank" rel="noreferrer">Ver perfil de Threads <span>↗</span></a></div></div></div></section>

        <section className="story-section" id="historia"><div className="story-heading"><p className="eyebrow">02 / LA HISTORIA DETRAS DEL KIMONO</p><h2>Una vida de <em>movimiento.</em></h2></div><div className="story-grid"><div className="story-marker"><span>2008</span><small>El comienzo</small></div><div className="story-copy"><p>Soy Pamela. Antes de encontrar el Brazilian Jiu-Jitsu, me forme como Licenciada en Arte Dramatico e Interprete Dramatico, y me especialice durante anos en teatro fisico. Esa experiencia tambien me enseno a observar el cuerpo, el movimiento y la expresion.</p><p>En octubre de 2008 tome mi primera clase de BJJ. Lo que comenzo como una forma de sumar herramientas para mi carrera artistica rapidamente se convirtio en una pasion propia: el jiu-jitsu me resulto natural, desafiante y profundamente transformador.</p><p>Con el tiempo, esta practica dio forma a <strong>Constrictors Jiu Jitsu</strong> y a mi vocacion por ensenar. Hoy sigo perfeccionandome para compartir el BJJ con hombres y mujeres de todos los niveles, desde un lugar tecnico, humano y cercano.</p><blockquote>El BJJ me equilibra en lo fisico y en lo mental. Me trae al aqui y ahora.</blockquote></div></div></section>

        <section className="discipline-section" id="bjj"><div className="section-heading"><div><p className="eyebrow">03 / CONOCE LA DISCIPLINA</p><h2>Una practica de <em>tecnica y estrategia.</em></h2></div><p>El Brazilian Jiu-Jitsu es un arte marcial y deporte de combate enfocado en el control, el movimiento y la capacidad de resolver situaciones con inteligencia.</p></div><div className="discipline-grid"><article><span className="discipline-number">01</span><h3>Control y tecnica</h3><p>Se trabaja principalmente en el suelo, usando posiciones, desplazamientos, palancas y estrangulaciones tecnicas para controlar a un oponente sin depender solo de la fuerza.</p></article><article><span className="discipline-number">02</span><h3>Defensa personal</h3><p>Ayuda a desarrollar calma, conciencia corporal y herramientas para protegerse, escapar de posiciones dificiles y tomar mejores decisiones bajo presion.</p></article><article><span className="discipline-number">03</span><h3>Deporte y comunidad</h3><p>Tambien tiene una dimension competitiva, con reglas y categorias, pero se puede practicar sin competir: cada persona avanza segun sus objetivos y su propio ritmo.</p></article></div><div className="discipline-cta"><p>No necesitas experiencia ni una condicion fisica especial para empezar.</p><a className="text-link" href={whatsappLink('Hola Pamela, quiero saber como comenzar a practicar Brazilian Jiu-Jitsu.')} target="_blank" rel="noreferrer">Preguntar como comenzar <span>→</span></a></div></section>

        <section className="classes-section" id="clases"><div className="section-heading"><div><p className="eyebrow">04 / ENCUENTRA TU RITMO</p><h2>Clases para <em>cada etapa.</em></h2></div><p>Elige como quieres entrenar. Yo te ayudo a encontrar el mejor punto de partida.</p></div><div className="program-grid">{programs.map((program, index) => <article className={`program-card ${index === 1 ? 'program-card-featured' : ''}`} key={program.title}><span className="program-tag">{program.tag}</span><h3>{program.title}</h3><p>{program.text}</p><a className="card-link" href={whatsappLink(`Hola Pamela, me interesa ${program.title.toLowerCase()}.`)} target="_blank" rel="noreferrer">{program.action} <span>↗</span></a></article>)}</div></section>

        <section className="belts-section" id="cinturones"><div className="section-heading"><div><p className="eyebrow">LA RUTA DEL JIU-JITSU</p><h2>Cada cinturón es<br /><em>una nueva pregunta.</em></h2></div><p>Son tiempos aproximados de cada etapa, no plazos obligatorios. La graduación depende de la técnica, la constancia, la asistencia y el criterio de la profesora.</p></div><div className="belt-list">{belts.map((belt) => <article className="belt-item" key={belt.name}><span className={`belt-swatch belt-${belt.color}`}></span><div className="belt-info"><h3>{belt.name}</h3><p>{belt.meaning}</p></div><span className="belt-time">{belt.time}</span></article>)}</div></section>

        <section className="quote-section"><div className="quote-mark">“</div><blockquote>La tecnica te da herramientas.<br /><em>La constancia te transforma.</em></blockquote><span className="quote-rule"></span><p>PAMELA BJJ · ENTRENAMIENTO CON PROPOSITO</p></section>

        <section className="contact-section" id="contacto"><div className="contact-content"><p className="eyebrow">05 / COMENCEMOS</p><h2>Tu primera clase<br /><em>empieza aqui.</em></h2><p>Completa tus datos y tu consulta se abrira directamente en WhatsApp para que Pamela pueda responderte.</p><div className="contact-number"><span>WHATSAPP DIRECTO</span><strong>+56 9 6551 XXXX</strong><small>Respuesta personalizada</small></div></div><form className="contact-form" onSubmit={submitContactForm}><div className="form-grid"><label>Nombre<input name="name" type="text" value={contactForm.name} onChange={updateContactForm} placeholder="Tu nombre" required /></label><label>Telefono<input name="phone" type="tel" value={contactForm.phone} onChange={updateContactForm} placeholder="+56 9..." required /></label></div><label>Correo electronico <span>(opcional)</span><input name="email" type="email" value={contactForm.email} onChange={updateContactForm} placeholder="tu@email.com" /></label><label>Profesion u ocupacion <span>(opcional)</span><input name="occupation" type="text" value={contactForm.occupation} onChange={updateContactForm} placeholder="A que te dedicas" /></label><label>Motivo de contacto<select name="reason" value={contactForm.reason} onChange={updateContactForm} required><option value="">Selecciona una opcion</option><option value="Clase de prueba">Clase de prueba</option><option value="Clases grupales">Clases grupales</option><option value="Clase personalizada 1 a 1">Clase personalizada 1 a 1</option><option value="BJJ femenino">BJJ femenino</option><option value="Horarios y ubicacion">Horarios y ubicacion</option><option value="Otro">Otro</option></select></label>{contactForm.reason === 'Otro' && <label>Especifica el motivo<input name="otherReason" type="text" value={contactForm.otherReason} onChange={updateContactForm} placeholder="Cuentame el motivo" required /></label>}<label>Tu consulta<textarea name="query" value={contactForm.query} onChange={updateContactForm} placeholder="Escribe aqui tu consulta..." rows="4" required /></label><button className="button button-whatsapp" type="submit"><span className="whatsapp-icon">◔</span> Enviar consulta por WhatsApp <span>↗</span></button></form></section>
      </main>

      <footer><div className="footer-brand"><span className="brand-mark footer-belt-mark">PB</span><div><strong>PAMELA BJJ</strong><small>Entrena con proposito.</small></div></div><div className="footer-socials" aria-label="Redes sociales"><a className="social-icon" href="https://www.instagram.com/pamelavargasmilla/" target="_blank" rel="noreferrer" aria-label="Instagram de Pamela BJJ"><FaInstagram aria-hidden="true" /></a><a className="social-icon" href="https://www.facebook.com/pamela.v.milla" target="_blank" rel="noreferrer" aria-label="Facebook de Pamela BJJ"><FaFacebookF aria-hidden="true" /></a></div><div className="footer-credit"><span>Web desarrollada por</span><a href="https://www.linkedin.com/in/anyelo-b-84ab65147/" target="_blank" rel="noreferrer">Anyelo Bustos Galdames · LinkedIn ↗</a></div><a className="footer-top" href="#inicio">Volver arriba ↑</a></footer>
    </div>
  )
}

export default App
