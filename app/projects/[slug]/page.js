import ProjectDetail from '@/components/ProjectDetail';
import data from '@/data/portfolioData.json';
import { notFound } from 'next/navigation';

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = data.projects.find((p) => p.slug === slug);
  return {
    title: project ? `${project.title} — The Portfolio Gazette` : 'Project Not Found',
    description: project ? project.impact : 'Historical record not found in archives.',
  };
}

export async function generateStaticParams() {
  return data.projects.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectSlugPage({ params }) {
  const { slug } = await params;
  const project = data.projects.find(p => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <ProjectDetail project={project} />
  );
}
