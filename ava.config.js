// https://github.com/avajs/ava/blob/v5.2.0/docs/recipes/typescript.md#for-packages-with-type-module
//
// doesn't work with node.js v20
// see https://github.com/TypeStrong/ts-node/issues/1997
const config = {
	extensions: {
		ts: 'module',
	},
	nodeArguments: ['--loader=ts-node/esm'],
};

export default config;
