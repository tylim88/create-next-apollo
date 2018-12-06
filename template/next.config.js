const withCSS = require('@zeit/next-css')
const withSASS = require('@zeit/next-sass')
const withImages = require('next-images')

module.exports = withImages(
  withSASS(
    withCSS({
      serverRuntimeConfig: {
        // https://github.com/zeit/next.js#exposing-configuration-to-the-server--client-side
        // Will only be available on the server side
        secret: process.env.SECRET, // Pass through env variables
      },
      publicRuntimeConfig: {
        // Will be available on both server and client
        notSecret: process.env.NOT_SECRET,
      },
    })
  )
)
