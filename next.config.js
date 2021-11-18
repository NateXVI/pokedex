module.exports = {
	reactStrictMode: true,
	async redirects() {
		return [
			{
				source: '/',
				destination: '/1',
				permanent: true,
			},
		];
	},
};
