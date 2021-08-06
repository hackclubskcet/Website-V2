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
            {
                source: '/register',
                destination: '/signup',
                permanent: true,
            },
            {
                source: '/signin',
                destination: '/login',
                permanent: true,
            },
        ]
    },
}
