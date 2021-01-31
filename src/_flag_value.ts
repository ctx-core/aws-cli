import { _pick_flag_h } from '@ctx-core/cli-args'
export function _flag_value(arg_a1, ...a1__flag) {
	const flag_h = _pick_flag_h(arg_a1, ...a1__flag)
	for (let i = 0; i < a1__flag.length; i++) {
		const value = flag_h[a1__flag[i]]
		if (value) return value
	}
	return
}
