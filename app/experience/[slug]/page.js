import ExperienceDetail from '@/components/ExperienceDetail';
import data from '@/data/portfolioData.json';
import { notFound } from 'next/navigation';

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const exp = data.experience.find((e) => e.slug === slug);
  return {
    title: exp ? `${exp.title} at ${exp.company} — Historical Record` : 'Experience Not Found',
    description: exp ? exp.description : 'Historical record not found in data.',
  };
}

export async function generateStaticParams() {
  return data.experience.map((exp) => ({
    slug: exp.slug,
  }));
}

export default async function ExperienceSlugPage({ params }) {
  const { slug } = await params;
  const item = data.experience.find(e => e.slug === slug);

  if (!item) {
    notFound();
  }

  return (
    <ExperienceDetail item={item} />
  );
}
