/** @type {import('next').NextConfig} */
const { i18n } = require('./next-i18next.config');

const nextConfig = {
    trailingSlash: true,
    reactStrictMode: true,
    swcMinify: true,
    i18n: {
        ...i18n,
        localeDetection: false, // THIS IS KEY
    }
}

module.exports = nextConfig
