import { import_meta_env_ } from '@ctx-core/env'
import { flag_value_ } from '../flag_value_/index.js'
export function stage_(arg_a) {
	const stage =
		flag_value_(arg_a, '--stage')
		|| import_meta_env_().NODE_ENV
		|| 'development'
	return stage
}
export { stage_ as _stage, }

