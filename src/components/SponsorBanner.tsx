import { X, ArrowRight } from 'lucide-react';

export const SponsorBanner = () => {
  return (
    <a 
      href="https://www.siliconflow.com/?utm_source=mcp.so&utm_medium=referral&utm_campaign=202508&utm_id=000001&utm_term=web_banner&utm_content=v2" 
      target="_blank" 
      rel="noopener noreferrer"
      className="relative isolate flex items-center gap-x-6 overflow-hidden bg-[#1C1C1C] px-6 py-3 sm:px-3.5 sm:before:flex-1 border-b border-gray-800 cursor-pointer hover:bg-[#2C2C2C]"
    >
      <div className="absolute left-[max(-7rem,calc(50%-52rem))] top-1/2 -z-10 -translate-y-1/2 transform-gpu blur-2xl" aria-hidden="true">
        <div 
          className="aspect-[577/310] w-[36.125rem] bg-gradient-to-r from-[#6E29F6] to-[#6366f1] opacity-20"
          style={{
            clipPath: 'polygon(74.8% 41.9%, 97.2% 73.2%, 100% 34.9%, 92.5% 0.4%, 87.5% 0%, 75% 28.6%, 58.5% 54.6%, 50.1% 56.8%, 46.9% 44%, 48.3% 17.4%, 24.7% 53.9%, 0% 27.9%, 11.9% 74.2%, 24.9% 54.1%, 68.6% 100%, 74.8% 41.9%)'
          }}
        />
      </div>
      
      <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
        <p className="text-sm leading-6 text-gray-200">
          <span className="mx-1 rounded-md bg-[#6E29F6] px-2 py-1 font-bold text-white">SiliconFlow</span>
          <span className="hidden md:inline text-sm">: Get GPT‑OSS, Deepseek R1&V3, Qwen3 up and running — fully MCP‑ready.</span>
          <ArrowRight className="w-5 h-5 ml-2 inline-block bg-[#6E29F6] text-white rounded-full p-1" />
        </p>
      </div>
      
      <div className="flex flex-1 justify-end">
        <button type="button" className="-m-3 p-3 cursor-pointer focus-visible:outline-offset-4">
          <span className="sr-only">Dismiss</span>
          <X className="h-5 w-5 text-gray-400 hover:text-gray-200" />
        </button>
      </div>
    </a>
  );
};