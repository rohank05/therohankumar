import type { CSSProperties } from 'react'
import { Download, Github, Linkedin, Mail } from './Icons'

export default function Contact() {
  return (
    <section className="outro" id="contact" aria-labelledby="contact-title">
      <div className="wrap">
        <h2 id="contact-title" className="outro-title">
          Have something interesting to{' '}
          <span className="word skin-yellow" data-t="build?" style={{ '--r': '-3deg' } as CSSProperties}>
            build?
          </span>
        </h2>

        <a
          className="stk mailto skin-tomato peel"
          href="mailto:mail@therohankumar.com"
          style={{ '--r': '-1.5deg', '--d': '0ms' } as CSSProperties}
          data-rv="slap"
        >
          <Mail size={36} />
          <span>mail@therohankumar.com</span>
        </a>

        <div className="outro-links">
          <a className="stk btn skin-yellow" href="/Rohan_Kumar_Resume.pdf" download style={{ '--r': '2deg' } as CSSProperties}>
            <Download /> Resume
          </a>
          <a className="stk btn skin-vinyl" href="https://github.com/rohank05" target="_blank" rel="me noreferrer" style={{ '--r': '-1deg' } as CSSProperties}>
            <Github /> GitHub
          </a>
          <a className="stk btn skin-mint" href="https://www.linkedin.com/in/rohank05" target="_blank" rel="me noreferrer" style={{ '--r': '1.5deg' } as CSSProperties}>
            <Linkedin /> LinkedIn
          </a>
        </div>

        <footer className="foot">
          <span suppressHydrationWarning>© {new Date().getFullYear()} Rohan Kumar · Delhi, IN</span>
          <a href="#top">Back to the top of the lid</a>
        </footer>
      </div>
    </section>
  )
}
