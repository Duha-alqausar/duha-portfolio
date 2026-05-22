import './App.css'

type Project = {
  name: string
  url: string
  type: string
  industry: string
  role: string
  impact: string
  accent: 'blue' | 'green' | 'pink' | 'amber' | 'violet' | 'slate'
  layout: 'saas' | 'corp' | 'media' | 'commerce' | 'dashboard' | 'automation'
}

const websiteProjects: Project[] = [
  { name: 'Synergy Solusi', url: 'synergysolusi.com', type: 'SEO + Website Growth', industry: 'HSSEE Consulting', role: 'SEO architecture, website optimization, funnel direction', impact: 'Built stronger organic visibility and client inquiry flow.', accent: 'green', layout: 'corp' },
  { name: 'FS Institute', url: 'fs-institute.org', type: 'SEO / SEM Ecosystem', industry: 'Finance Training', role: 'Keyword architecture, content strategy, paid search', impact: 'Improved multi-channel discoverability for corporate training.', accent: 'blue', layout: 'saas' },
  { name: 'GRC Indonesia', url: 'grc-indonesia.com', type: 'SEO Growth System', industry: 'Governance Risk Compliance', role: 'SEO structure, content mapping, technical optimization', impact: 'Strengthened authority around governance, risk, and compliance topics.', accent: 'violet', layout: 'dashboard' },
  { name: 'ITGID', url: 'itgid.org', type: 'SEO + Conversion Funnel', industry: 'IT Governance Training', role: 'SEO, SEM, landing page direction, reporting', impact: 'Connected high-intent search demand with B2B lead generation.', accent: 'pink', layout: 'corp' },
  { name: 'Biztech Academy', url: 'biztechacademy.id', type: 'SEO / Paid Media', industry: 'Business & Tech Training', role: 'Content-performance alignment and campaign structure', impact: 'Supported brand growth through structured digital acquisition.', accent: 'amber', layout: 'saas' },
  { name: 'Trekking Indonesia', url: 'trekking.id', type: 'Website + Booking Growth', industry: 'Tourism Platform', role: 'Co-Founder & CTO, web infrastructure, SEO, UX', impact: 'Helped drive 40% booking growth through digital infrastructure.', accent: 'green', layout: 'commerce' },
]

const ecosystemSites = [
  'fs-institute.org', 'grc-indonesia.com', 'ipqi.org', 'strategy.proxsisgroup.com',
  'indonesiasafetycenter.org', 'petrotrainingasia.com', 'synergysolusi.com',
  'environment-indonesia.com', 'it.proxsisgroup.com', 'itgid.org', 'isoindonesiacenter.com',
  'icicert.com', 'biztechacademy.id', 'digital.proxsisgroup.com', 'hr.proxsisgroup.com'
]

const automationProjects = [
  { title: 'WA & IG AI Admin Automation', brand: 'Guesthouse555nki', flow: ['DM/WA', 'AI Reply', 'Lead Capture', 'Follow-up'] },
  { title: 'AI Admin Automation', brand: 'Proxsis HR & IT', flow: ['Inquiry', 'Qualification', 'Routing', 'Notification'] },
  { title: 'Content Workflow Notification', brand: 'Internal Production System', flow: ['Task', 'Status', 'Webhook', 'Team Alert'] },
]

function AccentOrb({ accent }: { accent: Project['accent'] }) {
  return <span className={`accent-orb ${accent}`} />
}

function MockScreenshot({ project }: { project: Project }) {
  const bars = Array.from({ length: 5 })
  const cards = Array.from({ length: 4 })
  return (
    <div className={`mock-screen ${project.layout} ${project.accent}`}>
      <div className="mock-browser">
        <span /> <span /> <span />
        <em>{project.url}</em>
      </div>
      <div className="mock-hero">
        <div>
          <small>{project.type}</small>
          <strong>{project.name}</strong>
          <p>{project.industry}</p>
        </div>
        <i />
      </div>
      <div className="mock-grid">
        <div className="mock-panel large">
          {bars.map((_, i) => <b key={i} style={{ width: `${92 - i * 12}%` }} />)}
        </div>
        <div className="mock-panel stats">
          <strong>{project.layout === 'automation' ? 'AI' : project.accent === 'green' ? 'SEO' : 'GROWTH'}</strong>
          <span>system</span>
        </div>
      </div>
      <div className="mock-card-row">
        {cards.map((_, i) => <span key={i} />)}
      </div>
    </div>
  )
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="project-card">
      <MockScreenshot project={project} />
      <div className="project-copy">
        <div className="project-meta"><AccentOrb accent={project.accent} /> {project.type}</div>
        <h3>{project.name}</h3>
        <p className="url">{project.url}</p>
        <p>{project.role}</p>
        <div className="impact">{project.impact}</div>
      </div>
    </article>
  )
}

function App() {
  return (
    <main>
      <nav className="nav">
        <a className="brand" href="#top" aria-label="Muhammad Duha Alqausar portfolio">
          <span>DA</span>
          <strong>Duha Alqausar</strong>
        </a>
        <div className="nav-links">
          <a href="#work">Work</a>
          <a href="#systems">Systems</a>
          <a href="#automation">Automation</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <section id="top" className="hero section">
        <div className="eyebrow"><span /> Growth & System Architect</div>
        <h1>Building digital growth systems that make brands easier to find, trust, and convert.</h1>
        <p className="hero-sub">I connect business strategy, website development, SEO/SEM, paid media, AI automation, and analytics into scalable growth engines for multi-brand ecosystems.</p>
        <div className="hero-actions">
          <a className="btn primary" href="#work">View Project Systems</a>
          <a className="btn secondary" href="mailto:duha.alqausar@gmail.com">Contact Me</a>
        </div>
        <div className="hero-dashboard">
          <div className="terminal-card">
            <div className="terminal-top"><span /><span /><span /><em>growth-system.ts</em></div>
            <code>
              <b>businessGoal</b> → website → SEO/SEM → lead flow<br />
              <b>automation</b> → response system → reporting<br />
              <b>optimizationLoop</b> → better traffic → better inquiry
            </code>
          </div>
          <div className="metric-stack">
            <div><strong>7+</strong><span>Years experience</span></div>
            <div><strong>20+</strong><span>Brands managed</span></div>
            <div><strong>15+</strong><span>Corporate SEO sites</span></div>
            <div><strong>~30%</strong><span>Avg. revenue growth</span></div>
          </div>
        </div>
      </section>

      <section className="section statement">
        <p>Not just running campaigns.</p>
        <h2>I build the operating system behind digital growth.</h2>
        <div className="pillar-grid">
          {[
            ['Website & CRO', 'Website structures, landing pages, UX conversion, and technical SEO foundations.'],
            ['SEO & SEM', 'Keyword architecture, content strategy, paid search, and high-intent funnel mapping.'],
            ['AI Automation', 'WhatsApp/Instagram AI admin, n8n workflows, lead routing, and internal notifications.'],
            ['Analytics & Reporting', 'GA4, GSC, KPI systems, dashboard thinking, and performance reporting loops.'],
          ].map(([title, body]) => (
            <div className="pillar" key={title}><h3>{title}</h3><p>{body}</p></div>
          ))}
        </div>
      </section>

      <section id="work" className="section projects-section">
        <div className="section-head">
          <span className="kicker">Selected portfolio</span>
          <h2>Project cards built to show the work visually — not just listed like a CV.</h2>
          <p>Each card uses a browser-style project preview, role summary, and business impact so visitors instantly understand the depth of the work.</p>
        </div>
        <div className="project-grid">
          {websiteProjects.map(project => <ProjectCard key={project.name} project={project} />)}
        </div>
      </section>

      <section id="systems" className="section ecosystem">
        <div className="section-head compact">
          <span className="kicker">Multi-brand ecosystem</span>
          <h2>SEO/SEM architecture across 15+ corporate websites.</h2>
          <p>Structured keyword mapping, content planning, technical SEO, paid search alignment, and conversion funnel direction across consulting, training, certification, IT, safety, and business ecosystems.</p>
        </div>
        <div className="ecosystem-map">
          <div className="core-node">
            <span>Growth Engine</span>
            <strong>SEO · SEM · Content · CRO</strong>
          </div>
          <div className="site-cloud">
            {ecosystemSites.map((site, index) => <span style={{ '--i': index } as React.CSSProperties} key={site}>{site}</span>)}
          </div>
        </div>
      </section>

      <section id="automation" className="section automation">
        <div className="section-head compact">
          <span className="kicker">AI & workflow automation</span>
          <h2>Automation projects that reduce manual work and speed up response time.</h2>
        </div>
        <div className="automation-grid">
          {automationProjects.map(item => (
            <article className="automation-card" key={item.title}>
              <div className="auto-head"><span>AI FLOW</span><strong>{item.brand}</strong></div>
              <h3>{item.title}</h3>
              <div className="flow-row">
                {item.flow.map((step, idx) => <div key={step} className="flow-step"><b>{String(idx + 1).padStart(2, '0')}</b>{step}</div>)}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section case-study">
        <div className="case-left">
          <span className="kicker">Featured narrative</span>
          <h2>From fragmented digital activity to structured growth system.</h2>
        </div>
        <div className="case-right">
          <div><b>01 · Diagnose</b><p>Audit the website, SEO performance, funnel gaps, tracking, and content opportunities.</p></div>
          <div><b>02 · Architect</b><p>Design keyword maps, landing page structures, campaign flows, automation, and reporting framework.</p></div>
          <div><b>03 · Execute</b><p>Coordinate content, paid media, technical SEO, website updates, and automation implementation.</p></div>
          <div><b>04 · Optimize</b><p>Review data, identify bottlenecks, improve conversion points, and turn learnings into the next action plan.</p></div>
        </div>
      </section>

      <section id="contact" className="section contact">
        <h2>Let’s build a growth system worth showing.</h2>
        <p>Available for digital growth architecture, SEO/SEM ecosystems, website optimization, AI automation, and performance reporting systems.</p>
        <div className="contact-row">
          <a className="btn primary" href="mailto:duha.alqausar@gmail.com">duha.alqausar@gmail.com</a>
          <a className="btn secondary" href="tel:+6282284570795">+62 822-8457-0795</a>
        </div>
      </section>
    </main>
  )
}

export default App
