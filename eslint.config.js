import {defineConfig, globalIgnores} from 'eslint/config';
import xo from 'eslint-config-xo';

export default defineConfig([
	globalIgnores(['distribution/', 'package-lock.json']),

	...xo(),
]);
