import { Calendar, Star, Clock, Users, Cloud, Award } from 'lucide-react';

const tabs = [
  { name: 'Today', icon: Calendar, href: '/', active: true },
  { name: 'Featured', icon: Star, href: '/?tab=featured' },
  { name: 'Latest', icon: Clock, href: '/?tab=latest' },
  { name: 'Clients', icon: Users, href: '/?tab=clients' },
  { name: 'Hosted', icon: Cloud, href: '/?tab=hosted' },
  { name: 'Official', icon: Award, href: '/?tab=official' },
];

export const TabNavigation = () => {
  return (
    <div className="w-full mx-auto px-2 sm:px-0">
      <nav className="max-w-full justify-center mx-auto flex items-center space-x-1 sm:space-x-2 overflow-x-auto no-scrollbar py-2 sm:py-4 scrollbar-hide">
        {tabs.map((tab) => (
          <a
            key={tab.name}
            className={`text-xs sm:text-sm font-medium transition-colors rounded-full px-2 sm:px-3 py-1 sm:py-1.5 flex items-center gap-1 whitespace-nowrap ${
              tab.active 
                ? 'bg-primary text-primary-foreground' 
                : 'text-muted-foreground hover:text-foreground'
            }`}
            href={tab.href}
          >
            <tab.icon className="h-3 w-3 sm:h-4 sm:w-4 shrink-0" />
            <span className="block">{tab.name}</span>
          </a>
        ))}
      </nav>
    </div>
  );
};