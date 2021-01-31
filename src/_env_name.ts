import { _flag_value } from './_flag_value'
export function _env_name(arg_a1) {
	const env_name =
		_flag_value(arg_a1, '--env-name')
		|| process.env.NODE_ENV
		|| 'development'
	return env_name
}
