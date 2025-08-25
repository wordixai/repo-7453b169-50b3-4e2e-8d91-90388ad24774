import { ArrowLeft } from 'lucide-react';

export const SearchSection = () => {
  return (
    <div className="w-full md:max-w-full mx-auto -mt-8">
      <section className="relative mt-8 mb-16">
        <div className="mx-auto w-full max-w-2xl px-6 text-center">
          <form className="flex items-center relative">
            <input 
              type="text" 
              className="text-sm md:text-md flex-1 px-4 py-3 border-2 border-primary focus:border-primary focus:ring-primary rounded-lg disabled:border-gray-300 disabled:text-gray-300" 
              placeholder="Search with keywords" 
            />
            <ArrowLeft className="absolute right-4 cursor-pointer h-4 w-4" />
          </form>
        </div>
      </section>
    </div>
  );
};