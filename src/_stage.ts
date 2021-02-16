import { _flag_value } from './_flag_value'
export function _stage(arg_a1:string[]):string {
	const stage =
		_flag_value(arg_a1, '--stage')
		|| process.env.NODE_ENV
		|| 'development'
	return stage
}
