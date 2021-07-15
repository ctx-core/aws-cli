import { flag_value_ } from './flag_value_.js'
export function stage_(arg_a:string[]):string {
	const stage =
		flag_value_(arg_a, '--stage')
		|| process.env.NODE_ENV
		|| 'development'
	return stage
}
export {
	stage_ as _stage,
}
