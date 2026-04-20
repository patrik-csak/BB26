import {defineConfig, globalIgnores} from 'eslint/config';
import packageJson from 'eslint-plugin-package-json';
import xo from 'xo';

export default defineConfig([
	globalIgnores(['distribution/', '.tsimp/']),

	{
		files: ['**/*.{js,ts}'],
		extends: [
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
		rules: {
			'e18e/prefer-static-regex': 'off',
		},
	},
	{
		files: ['package.json'],
		extends: [packageJson.configs.recommended, packageJson.configs.stylistic],
	},
]);
