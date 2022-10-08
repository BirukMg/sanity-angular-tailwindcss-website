const PROXY_CONFIG = [
  {
    context: ['/api'],
    target: 'https://lwjr6u3r.api.sanity.io',
    changeOrigin: true,
    pathRewrite: { '^/api': '' },
    secure: false,
  },
];

module.exports = PROXY_CONFIG;