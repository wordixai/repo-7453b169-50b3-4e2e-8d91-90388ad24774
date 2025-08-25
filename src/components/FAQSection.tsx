const faqs = [
  {
    id: 1,
    question: "What is MCP (Model Context Protocol)?",
    answer: "MCP is an open-source protocol developed by Anthropic that enables AI systems like Claude to securely connect with various data sources. It provides a universal standard for AI assistants to access external data, tools, and prompts through a client-server architecture."
  },
  {
    id: 2,
    question: "What is MCP Server?",
    answer: "MCP Server is a system that provides context, tools, and prompts to AI clients. It can expose data sources like files, documents, databases, and API integrations, allowing AI assistants to access real-time information in a secure way."
  },
  {
    id: 3,
    question: "How do MCP Server work?",
    answer: "MCP Server work through a simple client-server architecture. They expose data and tools through a standardized protocol, maintaining secure 1:1 connections with clients inside host applications like Claude Desktop."
  },
  {
    id: 4,
    question: "What can MCP Server provide?",
    answer: "MCP Server can share resources (files, docs, data), expose tools (API integrations, actions), and provide prompts (templated interactions). They control their own resources and maintain clear system boundaries for security."
  },
  {
    id: 5,
    question: "How does Claude use MCP?",
    answer: "Claude can connect to MCP server to access external data sources and tools, enhancing its capabilities with real-time information. Currently, this works with local MCP servers, with enterprise remote server support coming soon."
  },
  {
    id: 6,
    question: "Is MCP Server secure?",
    answer: "Yes, security is built into the MCP protocol. Server controls its own resources, there's no need to share API keys with LLM providers, and the system maintains clear boundaries. Each server manages its own authentication and access control."
  },
  {
    id: 7,
    question: "What is mcp.so?",
    answer: "mcp.so is a community-driven platform that collects and organizes third-party MCP Servers. It serves as a central directory where users can discover, share, and learn about various MCP Servers available for AI applications."
  },
  {
    id: 8,
    question: "How can I submit my MCP Server to mcp.so?",
    answer: "You can submit your MCP Server by creating a new issue in our GitHub repository. Click the 'Submit' button in the navigation bar or visit our GitHub issues page directly. Please provide details about your server including its name, description, features, and connection information."
  }
];

export const FAQSection = () => {
  return (
    <section className="py-8 sm:py-12 md:py-16 px-4 sm:px-6">
      <div className="container">
        <div className="text-center">
          <h2 className="mt-4 text-2xl sm:text-3xl md:text-4xl font-semibold">FAQ</h2>
          <p className="mt-4 sm:mt-6 font-medium text-muted-foreground text-sm sm:text-base">Frequently Asked Questions about MCP Server</p>
        </div>
        <div className="mx-auto mt-8 sm:mt-14 grid gap-6 sm:gap-8 md:grid-cols-2 md:gap-12">
          {faqs.map((faq) => (
            <div key={faq.id} className="flex gap-3 sm:gap-4">
              <span className="flex size-5 sm:size-6 shrink-0 items-center justify-center rounded-sm border border-primary font-mono text-xs text-primary">
                {faq.id}
              </span>
              <div>
                <div className="mb-2 flex items-center justify-between">
                  <h3 className="font-semibold text-sm sm:text-base">{faq.question}</h3>
                </div>
                <p className="text-sm sm:text-md text-muted-foreground leading-relaxed">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};