import { ArrowRight } from 'lucide-react';

interface SectionHeaderProps {
  title: string;
  viewAllHref: string;
}

export const SectionHeader = ({ title, viewAllHref }: SectionHeaderProps) => {
  return (
    <div className="w-full max-w-full mx-auto flex items-center gap-4 mt-6 sm:mt-8 mb-3 sm:mb-4 px-2 sm:px-0">
      <h2 className="text-sm sm:text-md md:text-lg font-medium">{title}</h2>
      <div className="flex-1"></div>
      <a className="text-primary text-xs sm:text-sm flex items-center gap-1 sm:gap-2" href={viewAllHref}>
        <span className="hidden sm:inline">View All</span>
        <span className="sm:hidden">All</span>
        <ArrowRight className="h-3 w-3 sm:h-4 sm:w-4" />
      </a>
    </div>
  );
};