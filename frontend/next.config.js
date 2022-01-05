const path = require('path');
module.exports = {
  reactStrictMode: true,
  images: { domains: ['res.cloudinary.com'] },
  sassOptions: {
    includePaths: [path.join(__dirname, 'src', 'styles')],
    prependData: `@import "main.scss";`,
  },
};
