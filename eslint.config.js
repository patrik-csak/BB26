import e18e from '@e18e/eslint-plugin';
import packageJson from 'eslint-plugin-package-json';
import {defineConfig, globalIgnores} from 'eslint/config';
import xo from 'xo';

export default defineConfig([
	globalIgnores(['distribution/']),

	e18e.configs.recommended,
	...xo.xoToEslintConfig([
		{
			prettier: 'compat',
		},
	]),

	{
		files: ['package.json'],
		extends: [packageJson.configs.recommended, packageJson.configs.stylistic],
	},
]);
