import e18e from '@e18e/eslint-plugin';
import {defineConfig, globalIgnores} from 'eslint/config';
import packageJson from 'eslint-plugin-package-json';
import xo from 'xo';

export default defineConfig([
	globalIgnores(['distribution/', '.tsimp/']),

	{
		files: ['**/*.{js,ts}'],
		extends: [
			e18e.configs.recommended,
			xo.xoToEslintConfig([
				{
					prettier: 'compat',
					languageOptions: {
						parserOptions: {
							projectService: {
								// https://typescript-eslint.io/packages/parser/#allowdefaultproject
								allowDefaultProject: ['test/*.ts', 'vitest.config.ts'],
							},
						},
					},
				},
			]),
		],
	},
	{
		files: ['package.json'],
		extends: [packageJson.configs.recommended, packageJson.configs.stylistic],
		rules: {
			'package-json/scripts-name-casing': 'off',
		},
	},
]);
