import type { NextConfig } from "next";

const isGitHubPages = process.env.GITHUB_PAGES === "true";

const nextConfig: NextConfig = {
  ...(isGitHubPages
    ? {
        output: "export" as const,
        basePath: "/eggs-",
        assetPrefix: "/eggs-",
        trailingSlash: true,
        images: { unoptimized: true },
        // The Cloudflare-only database module is not part of this static site.
        typescript: { ignoreBuildErrors: true },
      }
    : {}),
};

export default nextConfig;
