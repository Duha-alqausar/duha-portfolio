import './App.css'

type CaseStudy = {
  title: string
  domain: string
  category: string
  summary: string
  bullets: string[]
  image?: string
  accent: string
}

const cases: CaseStudy[] = [
  {
    title: 'Synergy Solusi',
    domain: 'synergysolusi.com',
    category: 'Website Growth · SEO · B2B Funnel',
    summary: 'Corporate HSE consulting ecosystem optimized through SEO architecture, content direction, landing page improvement, and growth reporting.',
    bullets: ['SEO/GEO reporting system', 'Website growth planning', 'Conversion direction'],
    image: './project-shots/synergy.png',
    accent: '#2ee6a6'
  },
  {
    title: 'GRC Indonesia',
    domain: 'grc-indonesia.com',
    category: 'SEO System · Corporate Training',
    summary: 'Governance, risk, and compliance platform strengthened through structured keyword mapping, content ecosystem, and technical SEO direction.',
    bullets: ['GRC topic authority', 'Training funnel SEO', 'Multi-brand visibility'],
    image: './project-shots/grc.png',
    accent: '#7c5cff'
  },
  {
    title: 'ITGID',
    domain: 'itgid.org',
    category: 'IT Governance · SEO/SEM · Community Funnel',
    summary: 'IT governance knowledge platform built around high-intent content, certification journeys, community acquisition, and conversion paths.',
    bullets: ['COBIT / CISA / CISM SEO', 'Community CTA funnel', 'B2B training discovery'],
    image: './project-shots/itgid.png',
    accent: '#ff9f43'
  }
]

const miniProjects = [
  ['FS Institute', 'Finance training SEO/SEM ecosystem'],
  ['Biztech Academy', 'Business & tech academy acquisition system'],
  ['Trekking Indonesia', 'Tourism platform web + booking growth'],
  ['Guesthouse555nki', 'WA/IG AI admin automation'],
  ['Proxsis HR & IT', 'AI admin + lead routing system'],
  ['Digital Finger', 'Multi-division ops, tech, and growth system']
]

const skills = ['Website Development', 'SEO Architecture', 'SEM / Google Ads', 'Meta Ads', 'CRO', 'AI Automation', 'n8n Workflow', 'GA4 / GSC', 'Reporting System', 'Growth Strategy']

function ProjectShowcase({ item, index }: { item: CaseStudy; index: number }) {
  return (
    <article className="showcase-card" style={{ '--accent': item.accent } as React.CSSProperties}>
      <div className="showcase-media">
        {item.image ? <img src={item.image} alt={`${item.title} website screenshot`} /> : <div className="fake-screen" />}
        <div className="media-glow" />
      </div>
      <div className="showcase-copy">
        <span className="case-index">0{index + 1} / Featured Project</span>
        <h3>{item.title}</h3>
        <p className="domain">{item.domain}</p>
        <p className="category">{item.category}</p>
        <p className="summary">{item.summary}</p>
        <ul>
          {item.bullets.map(bullet => <li key={bullet}>✦ {bullet}</li>)}
        </ul>
        <a className="consult-btn" href={`https://${item.domain}`} target="_blank" rel="noreferrer">View Website</a>
      </div>
    </article>
  )
}

function App() {
  return (
    <main>
      <div className="bg-grid" />
      <div className="orb orb-a" />
      <div className="orb orb-b" />

      <header className="topbar">
        <a className="logo" href="#top"><span>DA</span><b>duha.dev</b></a>
        <nav>
          <a href="#products">Products</a>
          <a href="#projects">Projects</a>
          <a href="#systems">Systems</a>
          <a href="#about">About</a>
        </nav>
        <div className="quick-actions">
          <a className="icon-link" href="mailto:duha.alqausar@gmail.com" aria-label="Email">✉</a>
          <a className="icon-link" href="tel:+6282284570795" aria-label="WhatsApp">☏</a>
          <a className="book" href="#contact">Book a call</a>
        </div>
      </header>

      <section id="top" className="hero">
        <div className="hero-left">
          <div className="availability"><i /> Available for Growth Systems & Automation</div>
          <h1>Heyyoo!<br />I'm <span>Muhammad Duha Alqausar</span></h1>
          <p className="role">
            Growth & System Architect who delivers <b>Digital Growth Systems</b><br />
            that connect the dots between <em>Business Goals</em> and <em>Scalable Execution</em>.
          </p>
          <div className="hero-buttons">
            <a href="#projects">Projects</a>
            <a href="mailto:duha.alqausar@gmail.com">Email</a>
            <a href="https://github.com/Duha-alqausar/duha-portfolio" target="_blank" rel="noreferrer">Github</a>
          </div>
        </div>
        <div className="hero-badge">
          <div className="avatar-ring"><span>DA</span></div>
          <div className="floating-card c1">SEO · SEM · CRO</div>
          <div className="floating-card c2">AI Automation</div>
          <div className="floating-card c3">20+ Brands</div>
        </div>
      </section>

      <section id="products" className="stats-panel">
        <div><strong>7+</strong><span>Years Experience</span></div>
        <div><strong>20+</strong><span>Brands Managed</span></div>
        <div><strong>15+</strong><span>Corporate Websites</span></div>
        <div><strong>~30%</strong><span>Avg Growth Impact</span></div>
      </section>

      <section id="projects" className="section projects">
        <div className="section-title">
          <span>Selected Works</span>
          <h2>Project showcase that looks visual, credible, and portfolio-worthy.</h2>
          <p>Website screenshots, business context, and system-level contribution — so people can see the work and understand the impact.</p>
        </div>
        <div className="showcase-list">
          {cases.map((item, index) => <ProjectShowcase key={item.title} item={item} index={index} />)}
        </div>
      </section>

      <section id="systems" className="section systems">
        <div className="system-card">
          <div>
            <span>How I Work</span>
            <h2>Business goal → Website → Traffic → Lead → Automation → Report.</h2>
          </div>
          <div className="flow-diagram">
            {['Business', 'Website', 'SEO/Ads', 'Lead Flow', 'Automation', 'Report'].map((step, idx) => (
              <div className="flow-node" key={step}><b>{String(idx + 1).padStart(2, '0')}</b>{step}</div>
            ))}
          </div>
        </div>
      </section>

      <section className="section mini-work">
        <div className="section-title compact">
          <span>More Ecosystem Work</span>
          <h2>Not one-off execution. A multi-brand digital growth ecosystem.</h2>
        </div>
        <div className="mini-grid">
          {miniProjects.map(([name, desc]) => (
            <article key={name}>
              <h3>{name}</h3>
              <p>{desc}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="about" className="section about">
        <div className="about-copy">
          <span>About</span>
          <h2>I operate between strategy, marketing, technology, and automation.</h2>
          <p>My work is not only about launching websites or running campaigns. I design systems that help teams find opportunities, execute consistently, capture leads, reduce manual work, and measure growth.</p>
        </div>
        <div className="skill-cloud">
          {skills.map(skill => <span key={skill}>{skill}</span>)}
        </div>
      </section>

      <section id="contact" className="contact-section">
        <p>Have a project, website, or growth system to build?</p>
        <h2>Let's make it look impressive and work like a system.</h2>
        <div>
          <a href="mailto:duha.alqausar@gmail.com">duha.alqausar@gmail.com</a>
          <a href="tel:+6282284570795">WhatsApp / Call</a>
        </div>
      </section>
    </main>
  )
}

export default App
