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
    image: './project-shots/synergy.webp',
    accent: '#2ee6a6'
  },
  {
    title: 'Proxsis Group',
    domain: 'proxsisgroup.com',
    category: 'Website Growth · Corporate Ecosystem',
    summary: 'Corporate group website highlighted as the main Proxsis ecosystem gateway, connecting solutions, academy, sustainability, digital services, and business enquiries.',
    bullets: ['Corporate ecosystem gateway', 'Solutions navigation', 'B2B enquiry direction'],
    image: './project-shots/proxsisgroup.webp',
    accent: '#e7194f'
  },
  {
    title: 'ITGID',
    domain: 'itgid.org',
    category: 'IT Governance · SEO/SEM · Community Funnel',
    summary: 'IT governance knowledge platform built around high-intent content, certification journeys, community acquisition, and conversion paths.',
    bullets: ['COBIT / CISA / CISM SEO', 'Community CTA funnel', 'B2B training discovery'],
    image: './project-shots/itgid.webp',
    accent: '#ff9f43'
  }
]


type PortfolioItem = {
  name: string
  desc: string
  type: string
  href?: string
}

const portfolioGroups: { label: string; kicker: string; items: PortfolioItem[] }[] = [
  {
    label: 'Website Development',
    kicker: 'End-to-end website build, UX optimization, and SEO structure',
    items: [
      ['karoseri-ckm.co.id', 'Karoseri company website', 'Website'],
      ['loghos.id', 'Business / brand website', 'Website'],
      ['proxcare.id', 'Corporate service website', 'Website'],
      ['synnovac-capital.com', 'Capital & advisory website', 'Website'],
      ['miminku.id', 'Product / brand website', 'Website'],
      ['tamtam.co.id', 'Business website', 'Website'],
      ['parakerja.com', 'Career / job ecosystem', 'Website'],
      ['fs-institute.org', 'Finance training platform', 'Website + SEO'],
      ['suarakampus.com', 'Media / campus publication', 'Website'],
      ['mustafamotor.com', 'Automotive business website', 'Website'],
      ['trekking.id', 'Tourism platform + booking growth', 'Website + Growth'],
      ['inetz.com', 'Digital / technology website', 'Website'],
      ['talkactive.co.id', 'Training / communication platform', 'Website + SEO']
    ].map(([name, desc, type]) => ({ name, desc, type, href: `https://${name}` }))
  },
  {
    label: 'SEO & SEM Ecosystem',
    kicker: 'Corporate multi-brand visibility, paid search, and conversion funnels',
    items: [
      ['fs-institute.org', 'Finance training demand capture', 'SEO/SEM'],
      ['grc-indonesia.com', 'GRC topic authority system', 'SEO System'],
      ['ipqi.org', 'Quality & productivity training visibility', 'SEO/SEM'],
      ['strategy.proxsisgroup.com', 'Strategy consulting search ecosystem', 'SEO'],
      ['indonesiasafetycenter.org', 'Safety training acquisition', 'SEO/SEM'],
      ['petrotrainingasia.com', 'Petroleum training demand generation', 'SEO/SEM'],
      ['synergysolusi.com', 'HSE consulting growth engine', 'SEO + Growth'],
      ['environment-indonesia.com', 'Environment consulting visibility', 'SEO'],
      ['it.proxsisgroup.com', 'IT consulting lead generation', 'SEO/SEM'],
      ['itgid.org', 'IT governance community funnel', 'SEO/SEM'],
      ['isoindonesiacenter.com', 'ISO certification training funnel', 'SEO/SEM'],
      ['icicert.com', 'Certification ecosystem visibility', 'SEO'],
      ['biztechacademy.id', 'Business & tech academy acquisition', 'SEO/Paid'],
      ['digital.proxsisgroup.com', 'Digital service search ecosystem', 'SEO'],
      ['hr.proxsisgroup.com', 'HR consulting/training discovery', 'SEO'],
      ['talkactive.co.id', 'Communication training visibility', 'SEO/SEM']
    ].map(([name, desc, type]) => ({ name, desc, type, href: `https://${name}` }))
  },
  {
    label: 'Social & Paid Ads',
    kicker: 'Content-performance alignment, Meta Ads, and lead generation',
    items: [
      ['PHR & PHR Community', 'Community activation + lead-gen content', 'Meta Ads'],
      ['PCG & PCC', 'Consulting ecosystem paid-social support', 'Paid Social'],
      ['FSI', 'Finance training social acquisition', 'Meta Ads'],
      ['Proxsis ITGRC', 'IT governance content-performance', 'Meta Ads'],
      ['Biztech Academy', 'Business & tech education campaigns', 'Meta Ads'],
      ['Proxsis Digital', 'Digital service campaign ecosystem', 'Paid Social'],
      ['Ecosystem Group', 'Multi-brand coordination', 'Strategy'],
      ['SS K3', 'Safety training social demand', 'Meta Ads'],
      ['IEC', 'Environment consulting campaign support', 'Meta Ads'],
      ['Petro Training', 'Training lead generation', 'Meta Ads'],
      ['ISC', 'Safety center content activation', 'Meta Ads'],
      ['Guesthouse555nki', 'Hospitality campaign + automation support', 'Social + AI']
    ].map(([name, desc, type]) => ({ name, desc, type }))
  },
  {
    label: 'AI & Automation Systems',
    kicker: 'Workflow automation, WA/IG bots, and operational notification systems',
    items: [
      ['Guesthouse555nki WA/IG AI Admin', 'Automated customer response + scalable interaction', 'AI Bot'],
      ['Proxsis HR & IT WA/IG AI Admin', 'Lead response automation and admin workload reduction', 'AI Bot'],
      ['Content Production Workflow', 'Automated project-management notification system', 'n8n / Workflow'],
      ['Reporting Framework', 'KPI, SEO, ads, and growth report systemization', 'Analytics'],
      ['CRM & Lead Flow Design', 'Routing, follow-up, and lead management flow', 'Automation']
    ].map(([name, desc, type]) => ({ name, desc, type }))
  }
]

const skills = ['Website Development', 'SEO Architecture', 'SEM / Google Ads', 'Meta Ads', 'CRO', 'AI Automation', 'n8n Workflow', 'GA4 / GSC', 'Reporting System', 'Growth Strategy']


function PortfolioCarousel() {
  return (
    <div className="portfolio-carousel">
      {portfolioGroups.map((group, groupIndex) => (
        <div className="portfolio-row" key={group.label}>
          <div className="portfolio-row-head">
            <span>{String(groupIndex + 1).padStart(2, '0')}</span>
            <div>
              <h3>{group.label}</h3>
              <p>{group.kicker}</p>
            </div>
            <em>Drag / scroll →</em>
          </div>
          <div className="portfolio-track" aria-label={`${group.label} portfolio list`}>
            {group.items.map((item, index) => {
              const card = (
                <article className="portfolio-slide">
                  <div className="slide-top"><span>{item.type}</span><b>{String(index + 1).padStart(2, '0')}</b></div>
                  <h4>{item.name}</h4>
                  <p>{item.desc}</p>
                </article>
              )
              return item.href ? <a href={item.href} target="_blank" rel="noreferrer" key={`${group.label}-${item.name}`}>{card}</a> : <div key={`${group.label}-${item.name}`}>{card}</div>
            })}
          </div>
        </div>
      ))}
    </div>
  )
}

function ProjectShowcase({ item, index }: { item: CaseStudy; index: number }) {
  return (
    <article className="showcase-card" style={{ '--accent': item.accent } as React.CSSProperties}>
      <div className="showcase-media">
        {item.image ? <img src={item.image} alt={`${item.title} website screenshot`} decoding="async" /> : <div className="fake-screen" />}
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
        <div className="section-title portfolio-title">
          <span>Full Portfolio List</span>
          <h2>Looks like one portfolio — but it carries a lot of digital ecosystems.</h2>
          <p>All website, SEO/SEM, paid social, and automation work from the portfolio list — arranged as horizontal slides so it feels rich without making the page crowded.</p>
        </div>
        <PortfolioCarousel />
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

      <section id="contact" className="section contact-shell">
        <div className="contact-section">
          <p>Have a project, website, or growth system to build?</p>
          <h2>Let's make it look impressive and work like a system.</h2>
          <div>
            <a href="mailto:duha.alqausar@gmail.com">duha.alqausar@gmail.com</a>
            <a href="tel:+6282284570795">WhatsApp / Call</a>
          </div>
        </div>
      </section>
    </main>
  )
}

export default App
