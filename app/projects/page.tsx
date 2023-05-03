import Card from '@/components/Card';
import projectsData from '@/data/projectsData';

export default function Page() {
  return (
    <div>
      <Card {...projectsData[0]} />
    </div>
  );
}
