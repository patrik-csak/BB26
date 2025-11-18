import {defineConfig, globalIgnores} from 'eslint/config';
import packageJson from 'eslint-plugin-package-json';
import xo from 'xo';

export default defineConfig([
	globalIgnores(['distribution/', '.tsimp/']),
	packageJson.configs.recommended,
	packageJson.configs.stylistic,
	...xo.xoToEslintConfig([{prettier: 'compat'}]),
]);
