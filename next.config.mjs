import nextra from "nextra";

const nextraOptions = {
  mdxOptions: {
    rehypePrettyCodeOptions: {
      showTitle: true,
      theme: "dark-plus",
      codeBlocks: {
        lineNumbers: true,
        title: true,
      },
    },
  },
};

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  eslint: {
    ignoreDuringBuilds: true,
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });
    return config;
  },
};

export default nextra(nextraOptions)(nextConfig);
