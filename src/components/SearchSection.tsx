import { ArrowLeft } from 'lucide-react';

export const SearchSection = () => {
  return (
    <div className="w-full mx-auto -mt-4 sm:-mt-8">
      <section className="relative mt-4 sm:mt-8 mb-8 sm:mb-16">
        <div className="mx-auto w-full max-w-2xl px-4 sm:px-6 text-center">
          <form className="flex items-center relative">
            <input 
              type="text" 
              className="text-sm md:text-md flex-1 px-3 sm:px-4 py-2 sm:py-3 border-2 border-primary focus:border-primary focus:ring-primary rounded-lg disabled:border-gray-300 disabled:text-gray-300" 
              placeholder="Search with keywords" 
            />
            <ArrowLeft className="absolute right-3 sm:right-4 cursor-pointer h-4 w-4" />
          </form>
        </div>
      </section>
    </div>
  );
};