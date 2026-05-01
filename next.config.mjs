/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'static.vecteezy.com',
        pathname: '**'
      },
      {
        protocol: 'https',
        hostname: 'thumbs.dreamstime.com',
        pathname: '**'
      },
      {
        protocol: 'https',
        hostname: 'cdn.vectorstock.com',
        pathname: '**'
      },
      {
        protocol: 'https',
        hostname: 'i5.walmartimages.com',
        pathname: '**'
      },
      {
        protocol: 'https',
        hostname: 'st2.depositphotos.com',
        pathname: '**'
      },
      {
        protocol: 'https',
        hostname: 'gh.jumia.is',
        pathname: '**'
      },
      {
        protocol: 'https',
        hostname: 'media.gettyimages.com',
        pathname: '**'
      },
      {
        protocol: 'https',
        hostname: 'premeditatedleftovers.com',
        pathname: '**'
      },
      {
        protocol: 'https',
        hostname: 'i.pinimg.com',
        pathname: '**'
      },
      {
        protocol: 'https',
        hostname: 'm.media-amazon.com',
        pathname: '**'
      },
      {
        protocol: 'https',
        hostname: 'img.magnific.com',
        pathname: '**'
      },
      {
        protocol: 'https',
        hostname: 'www.flojos.com',
        pathname: '**'
      },
    ],
  }
};

export default nextConfig;
