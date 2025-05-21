import type { NextConfig } from "next";
import withFlowbiteReact from "flowbite-react/plugin/nextjs";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'raw.githubusercontent.com',
        // Opcional: restringir a caminhos específicos
        pathname: '/DavyDevcosmo/tkd-shop/**',
      },
      // Adicione mais domínios conforme necessário
    ],
    // Configurações adicionais recomendadas:
    formats: ['image/webp'], // Prioriza WebP para melhor performance
    minimumCacheTTL: 60, // Tempo mínimo de cache em segundos
  },
  // Outras configurações globais do Next.js podem vir aqui
};

export default withFlowbiteReact(nextConfig);