import { Download } from './Icons'

export default function TopBar() {
  return (
    <header className="topbar">
      <a href="#top" className="logo" aria-label="Rohan Kumar, back to top">
        RK
      </a>
      <nav aria-label="Sections">
        <a className="stk nav skin-vinyl" href="#work">Work</a>
        <a className="stk nav skin-vinyl hide-sm" href="#experience">Jobs</a>
        <a className="stk nav skin-vinyl hide-sm" href="#toolkit">Toolkit</a>
        <a className="stk nav skin-vinyl" href="#contact">Contact</a>
        <a className="stk nav skin-yellow" href="/Rohan_Kumar_Resume.pdf" download>
          <Download size={16} /> Resume
        </a>
      </nav>
    </header>
  )
}
