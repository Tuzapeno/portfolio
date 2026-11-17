import Image from "next/image";
import Link from "next/link";
import { LuArrowDown, LuArrowRight, LuArrowUpRight } from "react-icons/lu";
import { assetPath } from "./asset-path";
import { projectGroups, projectHref, projects } from "./projects";

const featured = projects.filter((project) => project.cover);

const experience = [
  {
    company: "OniLearning",
    roles: [
      {
        title: "PHP Developer",
        dates: "Jan 2026 – Present",
        highlights: [
          "Built and optimized LLM pipelines for personalized interactive learning content, cutting execution costs by about 88%.",
          "Designed and built a messaging service for students and teachers on partner learning platforms serving about 8,000 users.",
          "Standardized integrations with multiple payment providers and added late-payment rules, order filters, and exports.",
          "Introduced reusable CI workflows for automated tests, dependency checks, and pull request notifications across multiple projects.",
        ],
      },
      {
        title: "Full-Stack Developer Intern",
        dates: "Sep – Dec 2025",
        highlights: [
          "Implemented LTI 1.3 in a multi-tenant platform to standardize integrations with partner learning management systems.",
          "Optimized legacy SQL queries for large datasets, consolidated duplicated logic, and removed dead code.",
        ],
      },
    ],
  },
  {
    company: "Freelance",
    roles: [
      {
        title: "Web Developer",
        dates: "Mar 2023",
        highlights: ["Prototyped an educational platform using Svelte."],
      },
    ],
  },
];

const education = [
  { school: "Pontifícia Universidade Católica do Paraná (PUCPR)", program: "Bachelor’s in Computer Science", dates: "2022–2025" },
  { school: "UniCesumar", program: "Bachelor’s in Software Engineering", dates: "2022–2025" },
  { school: "TECPUC", program: "Integrated Technical Program in Information Technology", dates: "2019–2021" },
];

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
          <p className="eyebrow hero-label">PHP developer</p>
          <h1 id="hero-title">Arthur Neumann<br />Salerno</h1>
          <p className="hero-description">
            I build backend services and AI tools for education at OniLearning.
          </p>
          <a className="primary-link" href="#work">
            Explore my work <LuArrowDown aria-hidden="true" />
          </a>
        </div>
      </section>

      <section className="experience-section shell" id="experience" aria-labelledby="experience-title">
        <div className="section-heading">
          <h2 id="experience-title">Experience</h2>
        </div>
        {experience.map(({ company, roles }) => (
          <div className="experience-entry" key={company}>
            <h3>{company}</h3>
            <div className="experience-roles">
              {roles.map(({ title, dates, highlights }) => (
                <div className="experience-role" key={title}>
                  <div className="experience-role-heading">
                    <h4>{title}</h4>
                    <p>{dates}</p>
                  </div>
                  <ul className="experience-highlights">
                    {highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        ))}
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
            I’m a developer based in Curitiba, Brazil. I got into programming through games
            and still build them at game jams. In my web work, I use PHP, Laravel, React,
            TypeScript, and Python.
          </p>
          <h3 className="eyebrow education-heading">Education</h3>
          <ul className="education-list">
            {education.map(({ school, program, dates }) => (
              <li key={school}>
                <p>{program}</p>
                <p>{school} · {dates}</p>
              </li>
            ))}
          </ul>
          <a className="text-link" href="https://www.linkedin.com/in/arthur-neumann-salerno">
            Connect on LinkedIn <LuArrowRight aria-hidden="true" />
          </a>
        </div>
      </section>
    </>
  );
}
