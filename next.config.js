// next.config.js
module.exports = {
    async redirects() {
      return [
        {
          source: '/',
          destination: '/index-2',
          permanent: true, // SEO-friendly 301 redirect
        },
      ];
    },
  };