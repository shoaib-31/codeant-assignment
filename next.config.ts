import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  webpack(config) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const fileLoaderRule = config.module.rules.find((rule: any) =>
      rule.test?.test?.(".svg")
    );

    config.module.rules.push(
      {
        ...fileLoaderRule,
        test: /\.svg$/i,
        resourceQuery: /url/, // Handles `import icon from './icon.svg?url'`
      },
      {
        test: /\.svg$/i,
        issuer: /\.(js|jsx|ts|tsx)$/, // Only for JS/TS imports
        resourceQuery: { not: [/url/] }, // Excludes `?url`
        use: ["@svgr/webpack"],
      }
    );

    fileLoaderRule.exclude = /\.svg$/i;

    return config;
  },
};

export default nextConfig;
