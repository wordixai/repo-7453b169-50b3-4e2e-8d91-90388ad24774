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
      className="relative group flex items-start gap-4 rounded-xl border p-4 transition-colors border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05] dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
      {...(sponsor ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
    >
      <div className="flex-none">
        <span className="relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full">
          {avatar ? (
            <img className="aspect-square h-full w-full" alt={name} src={avatar} />
          ) : (
            <span className="flex h-full w-full items-center justify-center rounded-full bg-muted">
              {name.charAt(0).toUpperCase()}
            </span>
          )}
        </span>
      </div>
      <div className="min-w-0 flex-1">
        <div className="flex items-center gap-2">
          <h3 className="text-base text-sm font-semibold truncate">{name}</h3>
          <div className="flex-1"></div>
          {featured && <Star className="w-4 h-4 shrink-0 text-yellow-400 fill-current" />}
        </div>
        <p className="mt-1 text-xs text-muted-foreground line-clamp-2">{description}</p>
      </div>
      {sponsor && (
        <div className="absolute right-2 -top-3">
          <span className="px-2 py-1 rounded-md text-xs bg-primary text-primary-foreground font-medium">
            Sponsor
          </span>
        </div>
      )}
    </a>
  );
};