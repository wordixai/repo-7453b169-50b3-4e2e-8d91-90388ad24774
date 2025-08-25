import { Star } from 'lucide-react';

interface ServerCardProps {
  name: string;
  description: string;
  avatar?: string;
  author: string;
  href: string;
  featured?: boolean;
  sponsor?: boolean;
}

export const ServerCard = ({ name, description, avatar, author, href, featured = false, sponsor = false }: ServerCardProps) => {
  return (
    <a
      href={href}
      className="relative group flex items-start gap-3 sm:gap-4 rounded-xl border p-3 sm:p-4 transition-colors border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05] dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
      {...(sponsor ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
    >
      <div className="flex-none">
        <span className="relative flex h-8 w-8 sm:h-10 sm:w-10 shrink-0 overflow-hidden rounded-full">
          {avatar ? (
            <img className="aspect-square h-full w-full" alt={name} src={avatar} />
          ) : (
            <span className="flex h-full w-full items-center justify-center rounded-full bg-muted text-xs sm:text-sm">
              {name.charAt(0).toUpperCase()}
            </span>
          )}
        </span>
      </div>
      <div className="min-w-0 flex-1">
        <div className="flex items-center gap-2">
          <h3 className="text-xs sm:text-sm font-semibold truncate">{name}</h3>
          <div className="flex-1"></div>
          {featured && <Star className="w-3 h-3 sm:w-4 sm:h-4 shrink-0 text-yellow-400 fill-current" />}
        </div>
        <p className="mt-1 text-xs text-muted-foreground line-clamp-2 leading-relaxed">{description}</p>
      </div>
      {sponsor && (
        <div className="absolute right-1 sm:right-2 -top-2 sm:-top-3">
          <span className="px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-md text-xs bg-primary text-primary-foreground font-medium">
            Sponsor
          </span>
        </div>
      )}
    </a>
  );
};