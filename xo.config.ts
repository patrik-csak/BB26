import e18e from '@e18e/eslint-plugin';
import packageJson from 'eslint-plugin-package-json/experimental';
import {type FlatXoConfig} from 'xo';

const config: FlatXoConfig = [
	// Global ignores must be in its own object
	// https://github.com/xojs/xo/tree/v3.0.1#ignores
	{
		ignores: ['distribution/', 'package-lock.json'],
	},

	e18e.configs.recommended,
	packageJson.configs.recommended,
	packageJson.configs.stylistic,
];

export default config;
