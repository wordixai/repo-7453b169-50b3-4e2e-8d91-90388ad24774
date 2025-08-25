import { ArrowLeft } from 'lucide-react';

export const HeroSection = () => {
  return (
    <section className="px-4 md:px-8 py-4">
      <div className="container">
        <div className="text-center">
          <h1 className="mx-auto mb-3 mt-4 w-full text-balance text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold lg:mb-7">
            Find Awesome <span className="bg-gradient-to-r from-primary via-primary to-primary bg-clip-text text-transparent">MCP</span> Servers and Clients
          </h1>
          <p className="my-4 mx-auto max-w-3xl text-sm sm:text-base lg:text-xl text-muted-foreground px-2">
            MCP.so is a third-party MCP Marketplace with <span className="text-primary font-bold">16389</span> MCP Servers collected.
          </p>
          <div className="my-4 text-sm lg:text-md text-medium text-muted-foreground px-2">
            <p>
              <a 
                href="https://www.siliconflow.com/?utm_source=mcp.so&utm_medium=referral&utm_campaign=202508&utm_id=000001&utm_term=web_center&utm_content=v2" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-[#6E29F6] underline font-medium"
              >
                SiliconFlow
              </a>
              : Ready-to-use model APIs for MCP tools — plus $1 bonus for you!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};