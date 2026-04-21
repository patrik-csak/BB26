import e18e from '@e18e/eslint-plugin';
import packageJson from 'eslint-plugin-package-json';
import perfectionist from 'eslint-plugin-perfectionist';
import {defineConfig, globalIgnores} from 'eslint/config';
import xo from 'xo';

export default defineConfig([
	globalIgnores(['distribution/', '.tsimp/']),

	{
		extends: [
			e18e.configs.recommended,
			perfectionist.configs['recommended-natural'],
			xo.xoToEslintConfig([
				{
					languageOptions: {
						parserOptions: {
							projectService: {
								// https://typescript-eslint.io/packages/parser/#allowdefaultproject
								allowDefaultProject: ['test/*.ts', 'vitest.config.ts'],
							},
						},
					},
					prettier: 'compat',
					rules: {
						'import-x/order': 'off',
					},
				},
			]),
		],
		files: ['**/*.{js,ts}'],
	},
	{
		extends: [packageJson.configs.recommended, packageJson.configs.stylistic],
		files: ['package.json'],
		rules: {
			'package-json/scripts-name-casing': 'off',
		},
	},
]);
