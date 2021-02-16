import { _pick_flag_h } from '@ctx-core/cli-args'
export function _flag_value(arg_a1:string[], ...flag_a1:string[]) {
	const flag_h = _pick_flag_h(arg_a1, ...flag_a1)
	for (let i = 0; i < flag_a1.length; i++) {
		const value = flag_h[flag_a1[i]]
		if (value) return value
	}
	return
}
