import Link from "next/link";
import { LuArrowUp, LuArrowUpRight } from "react-icons/lu";
import { FaGithub } from "react-icons/fa";

const github = "https://github.com/Tuzapeno";
const linkedin = "https://www.linkedin.com/in/arthur-neumann-salerno";

export function SiteHeader() {
  return (
    <header className="site-header shell" id="top">
      <Link href="/" className="wordmark" aria-label="Arthur Salerno, home">
        <span className="monogram" aria-hidden="true">AS</span>
        <span>Arthur Salerno</span>
      </Link>
      <nav aria-label="Main navigation" className="site-nav">
        <Link href="/#experience">Experience</Link>
        <Link href="/#work">Work</Link>
        <Link href="/#about">About</Link>
      </nav>
      <a className="header-social" href={github}>
        <FaGithub aria-hidden="true" /> GitHub
      </a>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="site-footer shell">
      <p>Arthur Neumann Salerno</p>
      <div className="footer-links">
        <a href={github}>GitHub <LuArrowUpRight aria-hidden="true" /></a>
        <a href={linkedin}>LinkedIn <LuArrowUpRight aria-hidden="true" /></a>
      </div>
      <a href="#top" className="back-to-top" aria-label="Back to top">
        <LuArrowUp aria-hidden="true" />
      </a>
    </footer>
  );
}
