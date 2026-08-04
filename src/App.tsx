import { projects } from './projects'
import './App.css'

export default function App() {
  return (
    <div className="page">
      <div className="atmosphere" aria-hidden="true" />

      <header className="hero">
        <p className="brand">Zhanna Myshkovskaya</p>
        <h1 className="headline">Senior Frontend Engineer</h1>
        <p className="lede">
          Angular and React for enterprise HR SaaS — jobs, compensation
          comparison, evaluations, and data-sensitive product UI. Based in
          Tbilisi; open to EU relocation.
        </p>
        <div className="cta-row">
          <a className="cta primary" href="mailto:zhanna.myshkovskaya@gmail.com">
            Email
          </a>
          <a
            className="cta"
            href="https://www.linkedin.com/in/zhanna-myshkovskaya-2a1b63291/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
          <a
            className="cta"
            href="https://github.com/ZhannaM85"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        </div>
      </header>

      <main>
        <section className="work" aria-labelledby="work-heading">
          <h2 id="work-heading">Selected work</h2>
          <p className="section-lede">
            A short list of projects I can walk through in an interview.
          </p>
          <ul className="project-list">
            {projects.map((project, index) => (
              <li
                key={project.name}
                className="project"
                style={{ ['--i' as string]: index }}
              >
                <a
                  className="project-link"
                  href={project.url}
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="project-name">{project.name}</span>
                  <span className="project-blurb">{project.blurb}</span>
                  <span className="project-stack">
                    {project.stack.join(' · ')}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </section>
      </main>

      <footer className="footer">
        <p>
          <a href="mailto:zhanna.myshkovskaya@gmail.com">
            zhanna.myshkovskaya@gmail.com
          </a>
        </p>
        <p className="fine">Built with React · hosted on GitHub Pages</p>
      </footer>
    </div>
  )
}
