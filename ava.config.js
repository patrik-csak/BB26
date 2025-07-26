const config = {
	typescript: {
		compile: 'tsc',
		rewritePaths: {
			'source/': 'distribution/source/',
			'test/': 'distribution/test/',
		},
	},
};

export default config;
