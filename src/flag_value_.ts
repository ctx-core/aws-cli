import { pick_flag_r_ } from '@ctx-core/cli-args'
export function flag_value_(arg_a:string[], ...flag_a:string[]):string|undefined {
	const flag_h = pick_flag_r_(arg_a, ...flag_a)
	for (let i = 0; i < flag_a.length; i++) {
		const value = flag_h[flag_a[i]]
		if (value) return value
	}
	return
}
export { flag_value_ as _flag_value }
