import { Search, Plus, ChevronDown } from 'lucide-react';
import { SidebarTrigger } from '@/components/ui/sidebar';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

export const Header = () => {
  return (
    <header className="flex py-2 shrink-0 items-center gap-2 transition-[width,height] ease-linear">
      <div className="w-full flex items-center gap-4 px-4">
        <SidebarTrigger className="-ml-1" />
        <div className="flex items-center gap-4"></div>
        <div className="flex-1"></div>
        <div className="flex gap-4">
          <a 
            className="flex items-center gap-1 text-sm font-medium text-primary rounded-full px-4 hover:bg-primary/10" 
            href="/submit"
          >
            <Plus className="w-4 h-4 shrink-0" />
            Submit
          </a>
          <div>
            <Select defaultValue="en">
              <SelectTrigger className="h-10 w-full justify-between rounded-md border-none text-muted-foreground outline-none hover:bg-transparent focus:ring-0 focus:ring-offset-0">
                <div className="flex items-center gap-x-2">
                  <div className="w-4 h-4 bg-gray-400 rounded-sm" />
                  <span className="hidden md:block">English</span>
                </div>
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="en">English</SelectItem>
                <SelectItem value="zh">中文</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>
    </header>
  );
};