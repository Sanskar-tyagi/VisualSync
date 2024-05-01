/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [{
            protocol: "https",
            hostname: "img.clerk.com"
        },
        {
            protocol: "https",
            hostname: "static.vecteezy.com"
        }]
    }, output: "standalone", experimental: {
        outputStandalone: true,
    },
};

export default nextConfig;
