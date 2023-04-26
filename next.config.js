/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "th.bing.com",
      "fotos.jornaldocarro.estadao.com.br",
      "pt.vecteezy.com",
      "image.webmotors.com.br",
      "www.volvocars.com",
    ],
  },
};

module.exports = nextConfig;
