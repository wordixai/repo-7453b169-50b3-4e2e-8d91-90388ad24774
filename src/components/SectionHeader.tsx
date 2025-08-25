import { ArrowRight } from 'lucide-react';

interface SectionHeaderProps {
  title: string;
  viewAllHref: string;
}

export const SectionHeader = ({ title, viewAllHref }: SectionHeaderProps) => {
  return (
    <div className="w-full max-w-full mx-auto flex items-center gap-4 mt-8 mb-4">
      <h2 className="text-md md:text-lg font-medium">{title}</h2>
      <div className="flex-1"></div>
      <a className="text-primary text-sm flex items-center gap-2" href={viewAllHref}>
        View All
        <ArrowRight className="h-4 w-4" />
      </a>
    </div>
  );
};