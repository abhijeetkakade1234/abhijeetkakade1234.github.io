import ProjectArchives from '@/components/ProjectArchives';
import data from '@/data/portfolioData.json';

export const metadata = {
  title: "The Project Archives — Volume III",
  description: "A comprehensive index of decentralised systems and engineering records.",
};

export default function ArchivesPage() {
  const { projects } = data;

  return (
    <ProjectArchives projects={projects} />
  );
}
