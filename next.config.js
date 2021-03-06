module.exports = {
  i18n: {
    locales: ['en-US'],
    defaultLocale: 'en-US',
  },
  target: 'serverless',
  distDir: 'out',
  images: {
    loader: 'cloudinary',
    path: 'https://res.cloudinary.com/duf9ddqhl/image/upload',
  },
  future: {
    webpack5: true,
  },
};
