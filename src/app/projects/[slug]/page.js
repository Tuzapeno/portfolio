import Link from "next/link";
import { notFound } from "next/navigation";
import { LuArrowLeft, LuArrowUpRight } from "react-icons/lu";
import { assetPath } from "../../asset-path";
import { projects } from "../../projects";
import ProjectGallery from "./project-gallery";

export const dynamicParams = false;

export function generateStaticParams() {
  return projects.map(({ slug }) => ({ slug }));
}

async function getProject(params) {
  const { slug } = await params;
  const project = projects.find((entry) => entry.slug === slug);
  if (!project) notFound();
  return project;
}

export async function generateMetadata({ params }) {
  const { title, summary } = await getProject(params);
  return { title, description: summary };
}

export default async function ProjectPage({ params }) {
  const { title, type, description, tools, theme, links, media } = await getProject(params);

  return (
    <article className="detail-page shell">
      <Link href="/#work" className="text-link">
        <LuArrowLeft aria-hidden="true" /> Back to work
      </Link>
      <header className="detail-header">
        <p className="eyebrow"><span className="label-mark" /> {type}</p>
        <h1>{title}</h1>
        <p className="detail-description">{description}</p>
        {(tools || theme) && (
          <dl className="project-facts">
            {tools && (
              <div>
                <dt>Built with</dt>
                <dd>{tools.join(" · ")}</dd>
              </div>
            )}
            {theme && (
              <div>
                <dt>Jam theme</dt>
                <dd>{theme}</dd>
              </div>
            )}
          </dl>
        )}
        {links && (
          <ul className="detail-links">
            {links.map(({ href, label }) => (
              <li key={href}>
                <a className="primary-link" href={href}>
                  {label} <LuArrowUpRight aria-hidden="true" />
                </a>
              </li>
            ))}
          </ul>
        )}
      </header>

      {media?.length > 0 && (
        <ProjectGallery media={media.map(({ src, alt }) => ({ src: assetPath(src), alt }))} />
      )}
    </article>
  );
}
