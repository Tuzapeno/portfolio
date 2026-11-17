import Image from "next/image";
import Link from "next/link";
import { LuArrowDown, LuArrowRight, LuArrowUpRight } from "react-icons/lu";
import { assetPath } from "./asset-path";
import { projectGroups, projectHref, projects } from "./projects";

const featured = projects.filter((project) => project.cover);

function FeaturedProject({ project }) {
  return (
    <article className="project-card">
      <Link href={projectHref(project.slug)} className="project-card-link">
        <div className={`project-cover project-cover--${project.slug}`}>
          <Image src={assetPath(project.cover)} alt="" fill />
        </div>
        <div className="project-card-copy">
          <div>
            <p className="eyebrow">{project.type}</p>
            <h3>{project.title}</h3>
            <p className="project-summary">{project.summary}</p>
          </div>
          <span className="project-arrow">
            <LuArrowUpRight aria-hidden="true" />
          </span>
        </div>
      </Link>
    </article>
  );
}

export default function Home() {
  return (
    <>
      <section className="hero shell" aria-labelledby="hero-title">
        <div className="hero-visual">
          <Image className="hero-art" src={assetPath("/harbor.webp")} alt="" fill priority />
        </div>
        <div className="hero-copy">
          <p className="eyebrow hero-label">Software developer</p>
          <h1 id="hero-title">Arthur Neumann<br />Salerno</h1>
          <p className="hero-description">
            I build web applications and make games.
            <br className="wide-only" /> Here’s a selection of both.
          </p>
          <a className="primary-link" href="#work">
            Explore my work <LuArrowDown aria-hidden="true" />
          </a>
        </div>
      </section>

      <section className="work-section shell" id="work" aria-labelledby="work-title">
        <div className="section-heading">
          <h2 id="work-title">Selected work</h2>
          <a className="text-link" href="#archive">
            Browse the archive <LuArrowDown aria-hidden="true" />
          </a>
        </div>
        <div className="featured-grid">
          {featured.map((project) => <FeaturedProject key={project.slug} project={project} />)}
        </div>
      </section>

      <section className="archive-section shell" id="archive" aria-labelledby="archive-title">
        <h2 id="archive-title">Project archive</h2>
        <div className="archive-grid">
          {projectGroups.map(({ name, projects }) => (
            <div key={name}>
              <h3 className="eyebrow archive-heading">{name}</h3>
              <ul className="archive-list">
                {projects.filter((project) => !project.cover).map((project) => (
                  <li key={project.slug}>
                    <Link href={projectHref(project.slug)}>
                      <div>
                        <p className="archive-title">{project.title}</p>
                        <p className="archive-summary">{project.summary}</p>
                      </div>
                      <LuArrowUpRight aria-hidden="true" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="about-section shell" id="about" aria-labelledby="about-title">
        <div className="about-photo">
          <Image src={assetPath("/profile.webp")} alt="Arthur Neumann Salerno" fill />
        </div>
        <div className="about-copy">
          <h2 id="about-title">About me</h2>
          <p>
            I got into programming because I wanted to understand how games are made.
            I went on to study computer science at PUCPR in Brazil, and that curiosity
            led me to web development as well.
          </p>
          <a className="text-link" href="https://www.linkedin.com/in/arthur-neumann-salerno">
            Connect on LinkedIn <LuArrowRight aria-hidden="true" />
          </a>
        </div>
      </section>
    </>
  );
}
