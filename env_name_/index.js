import { import_meta_env_ } from 'ctx-core/env'
import { flag_value_ } from '../flag_value_/index.js'
export function env_name_(arg_a) {
	const env_name =
		flag_value_(arg_a, '--env-name')
		|| import_meta_env_().NODE_ENV
		|| 'development'
	return env_name
}
export { env_name_ as _env_name, }
