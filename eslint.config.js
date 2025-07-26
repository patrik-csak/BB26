import {defineConfig, globalIgnores} from 'eslint/config';
import xo from 'xo';

export default defineConfig([
	globalIgnores(['distribution/', '.tsimp/']),
	...xo.xoToEslintConfig([{prettier: 'compat'}]),
]);
