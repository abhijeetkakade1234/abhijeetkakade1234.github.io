import SundaySupplement from '@/components/SundaySupplement';
import data from '@/data/portfolioData.json';

export const metadata = {
  title: "Sunday Supplement — Arts & Leisure",
  description: "A curated examination of mobile photography and visual perspectives.",
};

export default function PhotographyPage() {
  const { photography } = data;

  return (
    <SundaySupplement photography={photography} />
  );
}
