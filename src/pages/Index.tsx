import { SidebarProvider, SidebarInset } from '@/components/ui/sidebar';
import { AppSidebar } from '@/components/AppSidebar';
import { SponsorBanner } from '@/components/SponsorBanner';
import { Header } from '@/components/Header';
import { HeroSection } from '@/components/HeroSection';
import { SearchSection } from '@/components/SearchSection';
import { TabNavigation } from '@/components/TabNavigation';
import { ServerCard } from '@/components/ServerCard';
import { SectionHeader } from '@/components/SectionHeader';
import { FAQSection } from '@/components/FAQSection';
import { Footer } from '@/components/Footer';

const featuredServers = [
  {
    name: "EdgeOne Pages MCP",
    description: "An MCP service designed for deploying HTML content to EdgeOne Pages and obtaining an accessible public URL.",
    avatar: "https://avatars.githubusercontent.com/u/176978739?v=4",
    author: "TencentEdgeOne",
    href: "/server/edgeone-pages-mcp/TencentEdgeOne",
    featured: true
  },
  {
    name: "SiliconFlow",
    description: "AI Infrastructure for LLMs & Multimodal Models",
    avatar: "https://r2.trys.ai/imgs/c619ba4be34ba6f2f9e1fa451e3874d3.png",
    author: "SiliconFlow",
    href: "https://www.siliconflow.com/?utm_source=mcp.so&utm_medium=referral&utm_campaign=202508&utm_id=000001&utm_term=web_project&utm_content=v2",
    featured: true,
    sponsor: true
  },
  {
    name: "Time",
    description: "A Model Context Protocol server that provides time and timezone conversion capabilities. This server enables LLMs to get current time information and perform timezone conversions using IANA timezone names, with automatic system timezone detection.",
    avatar: "https://r2.trys.ai/imgs/1htutybr5-1742188467049.png",
    author: "modelcontextprotocol",
    href: "/server/time/modelcontextprotocol",
    featured: true
  },
  {
    name: "Aiimagemultistyle",
    description: "A Model Context Protocol (MCP) server for image generation and manipulation using fal.ai's Stable Diffusion model.",
    author: "codecraftm",
    href: "/server/aiimagemultistyle/codecraftm",
    featured: true
  }
];

const featuredClients = [
  {
    name: "HyperChat",
    description: "HyperChat is a Chat client that strives for openness, utilizing APIs from various LLMs to achieve the best Chat experience, as well as implementing productivity tools through the MCP protocol.",
    avatar: "https://avatars.githubusercontent.com/u/175242978?v=4",
    author: "BigSweetPotatoStudio",
    href: "/client/HyperChat/BigSweetPotatoStudio",
    featured: true
  },
  {
    name: "SiliconFlow",
    description: "AI Infrastructure for LLMs & Multimodal Models",
    avatar: "https://r2.trys.ai/imgs/c619ba4be34ba6f2f9e1fa451e3874d3.png",
    author: "SiliconFlow",
    href: "https://www.siliconflow.com/?utm_source=mcp.so&utm_medium=referral&utm_campaign=202508&utm_id=000001&utm_term=web_project&utm_content=v2",
    featured: true,
    sponsor: true
  },
  {
    name: "Y Gui",
    description: "A web-based graphical interface for AI chat interactions with support for multiple AI models and MCP (Model Context Protocol) servers.",
    avatar: "https://avatars.githubusercontent.com/u/15189961?s=48&v=4",
    author: "luohy15",
    href: "/client/y-gui/luohy15",
    featured: true
  },
  {
    name: "DeepChat",
    description: "Your AI Partner on Desktop",
    avatar: "https://deepchat.thinkinai.xyz/logo.png",
    author: "ThinkInAI",
    href: "/client/deepchat/ThinkInAI",
    featured: true
  }
];

const latestServers = [
  {
    name: "Patent Downloader",
    description: "A Python SDK for downloading patents from Google Patents with Model Context Protocol (MCP) support.",
    author: "Edison-A-N",
    href: "/server/patent-downloader/Edison-A-N"
  },
  {
    name: "Weather",
    description: "",
    author: "chatmcp",
    href: "/server/weather/chatmcp"
  },
  {
    name: "Master Mcp Server",
    description: "Master MCP Server aggregates multiple MCP servers behind a single, secure endpoint. It provides configuration-driven module loading, unified capability discovery, request routing with resilience, and first-class OAuth flows for multi-backend authentication.",
    author: "Jakedismo",
    href: "/server/master-mcp-server/Jakedismo"
  },
  {
    name: "Data4library Mcp",
    description: "A comprehensive MCP server providing complete access to Korea's Library Information Naru API. Enables AI models to easily access all public library information, book searches, loan status, and reading statistics across South Korea.",
    avatar: "https://avatars.githubusercontent.com/u/53589758?v=4",
    author: "isnow890",
    href: "/server/data4library-mcp/isnow890"
  }
];

const latestClients = [
  {
    name: "GITHUB-MCP-SERVER",
    description: "",
    author: "",
    href: "/client/github-mcp-server"
  },
  {
    name: "MDTOWORD",
    description: "",
    author: "null",
    href: "/client/mdtoword/null"
  },
  {
    name: "Simtheory",
    description: "AI workspace platform that provides unified access to multiple frontier AI models, assistants with persistent memory, and integrated tools for web search, document analysis, code creation, and data visualization.",
    avatar: "https://res.cloudinary.com/dimqqmfx6/image/upload/v1753745677/website/new%20home/icon_1_jv9gqc.png",
    author: "Simtheory",
    href: "/client/simtheory/Simtheory"
  },
  {
    name: "Spring AI Playground",
    description: "Spring AI Playground is a self-hosted web UI that simplifies AI experimentation and testing. It provides Java developers with an intuitive interface for working with large language models (LLMs), vector databases, prompt engineering, and Model Context Protocol (MCP) integrations.",
    author: "JEMIN HUH",
    href: "/client/spring-ai-playground/JEMIN%20HUH"
  }
];

const Index = () => {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <SponsorBanner />
        <Header />
        <div className="flex-1 px-2 sm:px-4 md:px-6 pb-8 sm:pb-16 pt-2 sm:pt-4">
          <HeroSection />
          <SearchSection />
          <TabNavigation />
          
          <div className="flex flex-wrap items-start">
            <div className="flex-1 w-full max-w-full mx-auto">
              {/* Featured MCP Servers */}
              <div>
                <SectionHeader title="Featured MCP Servers" viewAllHref="/servers?tag=featured" />
                <div className="grid gap-3 sm:gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                  {featuredServers.map((server, index) => (
                    <ServerCard key={index} {...server} />
                  ))}
                </div>
              </div>

              {/* Featured MCP Clients */}
              <div>
                <SectionHeader title="Featured MCP Clients" viewAllHref="/clients?tag=featured" />
                <div className="grid gap-3 sm:gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                  {featuredClients.map((client, index) => (
                    <ServerCard key={index} {...client} />
                  ))}
                </div>
              </div>

              {/* Latest MCP Servers */}
              <div>
                <SectionHeader title="Latest MCP Servers" viewAllHref="/servers?tag=latest" />
                <div className="grid gap-3 sm:gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                  {latestServers.map((server, index) => (
                    <ServerCard key={index} {...server} />
                  ))}
                  <ServerCard
                    name="SiliconFlow"
                    description="AI Infrastructure for LLMs & Multimodal Models"
                    avatar="https://r2.trys.ai/imgs/c619ba4be34ba6f2f9e1fa451e3874d3.png"
                    author="SiliconFlow"
                    href="https://www.siliconflow.com/?utm_source=mcp.so&utm_medium=referral&utm_campaign=202508&utm_id=000001&utm_term=web_project&utm_content=v2"
                    sponsor={true}
                  />
                </div>
              </div>

              {/* Latest MCP Clients */}
              <div>
                <SectionHeader title="Latest MCP Clients" viewAllHref="/clients?tag=latest" />
                <div className="grid gap-3 sm:gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                  {latestClients.map((client, index) => (
                    <ServerCard key={index} {...client} />
                  ))}
                  <ServerCard
                    name="SiliconFlow"
                    description="AI Infrastructure for LLMs & Multimodal Models"
                    avatar="https://r2.trys.ai/imgs/c619ba4be34ba6f2f9e1fa451e3874d3.png"
                    author="SiliconFlow"
                    href="https://www.siliconflow.com/?utm_source=mcp.so&utm_medium=referral&utm_campaign=202508&utm_id=000001&utm_term=web_project&utm_content=v2"
                    sponsor={true}
                  />
                </div>
              </div>
            </div>
          </div>

          <FAQSection />
        </div>
        <Footer />
      </SidebarInset>
    </SidebarProvider>
  );
};

export default Index;