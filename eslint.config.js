import {defineConfig, globalIgnores} from 'eslint/config';
import xo from 'eslint-config-xo';

// https://github.com/sindresorhus/eslint-plugin-unicorn/issues/3813
// eslint-disable-next-line unicorn/no-top-level-side-effects
export default defineConfig([
	globalIgnores(['distribution/']),

	...xo(),
]);
