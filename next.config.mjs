/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                hostname: 'img.clerk.com',
            },
        ],
        domains: ['supabase.co', 'pgydaebwtxsghaoslyhm.supabase.co'],
    },
}

export default nextConfig
