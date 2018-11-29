'use strict';

require('dotenv').config();

module.exports = {
  siteMetadata: {
    title: 'Django Meets Blockchain',
    sidebarTitle: 'Django Meets Blockchain',
    sidebarSubtext: 'Django Meets Blockchain',
    siteLastUpdated: new Date().toISOString(),
    description:
      "Documentation for Django Meets Blockchain",
    version: '1.0',
    siteUrl: 'TODO',
    keywords:
      'talio,blockchain,django',
    author: {
      name: 'Talio.io',
      url: 'https://talio.ai',
      email: 'info@talio.io'
    },
    socials: [
      {
        name: 'Twitter',
        imgpath: 'icon-twitter.svg',
        url: 'TODO'
      },
      {
        name: 'GitHub',
        imgpath: 'icon-github.svg',
        url: 'https://github.com/taliotech'
      },
      {
        name: 'LinkedIn',
        imgpath: 'icon-linkedin.svg',
        url: 'TODO'
      },
      {
        name: 'Medium',
        imgpath: 'icon-medium.svg',
        url: 'TODO'
      }
    ]
  },
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'content',
        path: `${__dirname}/docs`
      }
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-responsive-iframe',
            options: {
              wrapperStyle: 'margin-bottom: 1rem'
            }
          },
          'gatsby-remark-prismjs',
          'gatsby-remark-copy-linked-files',
          'gatsby-remark-autolink-headers',
          'gatsby-remark-smartypants',
          'gatsby-remark-responsive-iframe',
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 720,
              quality: 90,
              linkImagesToOriginal: false,
              wrapperStyle: 'margin-top: 1.5rem; margin-bottom: 1.5rem'
            }
          }
        ]
      }
    },
    'gatsby-transformer-json',
    {
      resolve: 'gatsby-plugin-canonical-urls',
      options: {
        siteUrl: 'https://docs.talio.io'
      }
    },
    'gatsby-plugin-styled-components',
    'gatsby-plugin-resolve-src',
    'gatsby-plugin-typescript',
    'gatsby-plugin-react-next',
    'gatsby-plugin-sharp',
    'gatsby-plugin-catch-links',
    'gatsby-transformer-sharp',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-nprogress',
      options: {
        color: '#006fe6', // talio-blue
        showSpinner: false
      }
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Django Meets Blockchain',
        short_name: 'Talio.io Docs',
        icons: [
          {
            src: '/android-chrome-192x192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: '/android-chrome-256x256.png',
            sizes: '256x256',
            type: 'image/png'
          }
        ],
        start_url: '/',
        display: 'standalone',
        theme_color: '#f8fcff',
        background_color: '#f6f7f8'
      }
    },
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: process.env.GATSBY_GA_TRACKING_ID
      }
    },
    'gatsby-plugin-netlify-cache',
    'gatsby-plugin-netlify'
  ]
};
