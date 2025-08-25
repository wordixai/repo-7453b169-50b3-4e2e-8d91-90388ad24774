export const Footer = () => {
  const links = [
    { name: 'Explore', href: '/explore' },
    { name: 'Playground', href: '/playground' },
    { name: 'Blog', href: '/posts' },
    { name: 'Cases', href: '/usercases' },
    { name: 'DXT', href: '/dxt' },
    { name: 'Partners', href: '/partners' },
  ];

  const legalLinks = [
    { name: 'Privacy', href: '/privacy-policy' },
    { name: 'Terms', href: '/terms-of-service' },
  ];

  return (
    <div className="bg-background px-4 sm:px-6 py-6 sm:py-4 flex flex-col justify-between gap-4 border-t text-center text-xs sm:text-sm font-normal text-muted-foreground lg:flex-row lg:items-center lg:text-left">
      <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-1 sm:gap-2 text-center sm:text-left">
        <span className="whitespace-nowrap">© 2025 MCP.so. All rights reserved.</span>
        <p className="text-center sm:text-left">
          Recommended: Run GPT‑OSS on{' '}
          <a 
            href="https://www.siliconflow.com/models/openai-gpt-oss-120b?utm_source=mcp.so&utm_medium=referral&utm_campaign=202508&utm_id=000001&utm_term=web_footer&utm_content=v2" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-[#6E29F6] underline font-medium"
          >
            SiliconFlow
          </a>
          .
        </p>
      </div>
      <ul className="flex flex-wrap justify-center gap-2 sm:gap-4 lg:justify-start">
        {links.map((link) => (
          <li key={link.name} className="hover:text-primary">
            <a href={link.href}>{link.name}</a>
          </li>
        ))}
      </ul>
      <ul className="flex justify-center gap-2 sm:gap-4 lg:justify-start">
        {legalLinks.map((link) => (
          <li key={link.name} className="hover:text-primary">
            <a href={link.href}>{link.name}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};