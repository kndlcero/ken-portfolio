import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { projects } from "@/data/data";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    return {
      title: "Project Not Found | Ken Audie Lucero",
    };
  }

  return {
    title: `${project.title} | Ken Audie Lucero`,
    description: project.overview,
    openGraph: {
      title: `${project.title} | Ken Audie Lucero`,
      description: project.overview,
      images: project.image ? [{ url: project.image, alt: `${project.title} screenshot` }] : undefined,
    },
  };
}

export default async function ProjectDetailPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const projectIndex = projects.findIndex((item) => item.slug === slug);
  const project = projects[projectIndex];

  if (!project) notFound();

  const previousProject = projects[(projectIndex - 1 + projects.length) % projects.length];
  const nextProject = projects[(projectIndex + 1) % projects.length];

  return (
    <main className="min-h-screen px-6 py-10" style={{ backgroundColor: "var(--bg)", color: "var(--text)" }}>
      <div className="max-w-6xl mx-auto">
        <Link href="/#projects" className="font-mono text-xs inline-flex mb-10 hover:underline" style={{ color: "var(--accent)" }}>
          {"<-"} back_to_projects();
        </Link>

        <section className="grid lg:grid-cols-[1fr_360px] gap-10 items-start mb-14">
          <div>
            {project.tag && (
              <span className="font-mono text-[10px] border rounded px-2 py-1 uppercase tracking-widest"
                style={{ color: "var(--accent)", borderColor: "var(--accent)", backgroundColor: "var(--accent-glow)" }}>
                {project.tag}
              </span>
            )}
            <h1 className="text-4xl md:text-6xl font-sans font-semibold mt-5 leading-tight">
              {project.title}
            </h1>
            <p className="font-mono text-sm mt-3" style={{ color: "var(--text-dim)" }}>
              {project.role}
            </p>
            <p className="text-base md:text-lg leading-relaxed mt-8 max-w-3xl" style={{ color: "var(--text-dim)" }}>
              {project.overview}
            </p>
            <div className="flex flex-wrap gap-2 mt-8">
              {project.stack.map((item) => (
                <span key={item} className="font-mono text-xs px-2.5 py-1 rounded border"
                  style={{ backgroundColor: "var(--surface)", borderColor: "var(--border)", color: "var(--text-dim)" }}>
                  {item}
                </span>
              ))}
            </div>
            <dl className="grid sm:grid-cols-2 gap-3 mt-8 max-w-3xl">
              {project.facts.map((fact) => (
                <div key={fact.label} className="rounded border p-3"
                  style={{ borderColor: "var(--border)", backgroundColor: "var(--surface)" }}>
                  <dt className="font-mono text-[10px] uppercase tracking-widest" style={{ color: "var(--accent)" }}>
                    {fact.label}
                  </dt>
                  <dd className="text-sm mt-1" style={{ color: "var(--text-dim)" }}>
                    {fact.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <aside className="glow-border rounded-lg p-5" style={{ backgroundColor: "var(--surface)" }}>
            <h2 className="font-mono text-xs uppercase tracking-widest mb-4" style={{ color: "var(--accent)" }}>
              contribution_notes
            </h2>
            <ul className="space-y-3">
              {project.contributions.map((item) => (
                <li key={item} className="text-sm flex gap-2 leading-relaxed" style={{ color: "var(--text-dim)" }}>
                  <span className="font-mono shrink-0" style={{ color: "var(--accent)" }}>{">"}</span>
                  {item}
                </li>
              ))}
            </ul>
            {project.github && (
              <a href={project.github} target="_blank" rel="noopener noreferrer"
                className="mt-6 inline-flex font-mono text-xs hover:underline" style={{ color: "var(--accent)" }}>
                open_repository();
              </a>
            )}
          </aside>
        </section>

        {project.image && (
          <section className="mb-16">
            <div className="relative w-full overflow-hidden rounded-lg border aspect-[16/8]"
              style={{ borderColor: "var(--border)", backgroundColor: "var(--surface)" }}>
              <Image
                src={project.image}
                alt={`${project.title} main screenshot`}
                fill
                priority
                sizes="100vw"
                className="object-cover"
              />
            </div>
          </section>
        )}

        {project.gallery.length > 0 && (
          <section>
            <div className="mb-8">
              <span className="section-label">project_gallery</span>
              <h2 className="text-2xl md:text-3xl font-sans font-semibold mt-2">
                Screens & Documentation
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-5">
              {project.gallery.map((image) => (
                <figure key={image.src} className="glow-border rounded-lg overflow-hidden" style={{ backgroundColor: "var(--surface)" }}>
                  <div className="relative aspect-[16/10]">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-contain"
                      style={{ backgroundColor: "var(--bg)" }}
                    />
                  </div>
                  <figcaption className="p-4 font-mono text-xs leading-relaxed" style={{ color: "var(--text-dim)" }}>
                    {image.caption}
                  </figcaption>
                </figure>
              ))}
            </div>
          </section>
        )}

        <nav className="grid sm:grid-cols-2 gap-4 mt-16 pt-8 border-t" style={{ borderColor: "var(--border)" }} aria-label="Project navigation">
          <Link href={`/projects/${previousProject.slug}`} className="glow-border rounded-lg p-4 transition-colors"
            style={{ backgroundColor: "var(--surface)" }}>
            <span className="font-mono text-[10px] uppercase tracking-widest" style={{ color: "var(--text-dim)" }}>
              previous_project
            </span>
            <p className="text-lg font-semibold mt-1" style={{ color: "var(--text)" }}>
              {previousProject.title}
            </p>
          </Link>
          <Link href={`/projects/${nextProject.slug}`} className="glow-border rounded-lg p-4 text-right transition-colors"
            style={{ backgroundColor: "var(--surface)" }}>
            <span className="font-mono text-[10px] uppercase tracking-widest" style={{ color: "var(--text-dim)" }}>
              next_project
            </span>
            <p className="text-lg font-semibold mt-1" style={{ color: "var(--text)" }}>
              {nextProject.title}
            </p>
          </Link>
        </nav>
      </div>
    </main>
  );
}
