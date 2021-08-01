module.exports = {
    reactStrictMode: false,
    images: {
        loader: 'imgix',
    },
    eslint: {
        dirs: [],
    },
    async redirects() {
        return [
            {
                source: '/dashboard/signout',
                destination: '/signout',
                permanent: true,
            },
        ]
    },
}
