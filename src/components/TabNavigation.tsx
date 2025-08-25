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
    <div className="w-full md:max-w-full mx-auto">
      <nav className="max-w-full justify-center mx-auto flex items-center space-x-2 lg:space-x-2 overflow-x-auto no-scrollbar py-4">
        {tabs.map((tab) => (
          <a
            key={tab.name}
            className={`text-xs md:text-sm font-medium transition-colors rounded-full px-2 md:px-3 py-1 flex items-center gap-1 ${
              tab.active 
                ? 'bg-primary text-primary-foreground' 
                : 'text-muted-foreground'
            }`}
            href={tab.href}
          >
            <tab.icon className="h-4 w-4" />
            <span className="block">{tab.name}</span>
          </a>
        ))}
      </nav>
    </div>
  );
};