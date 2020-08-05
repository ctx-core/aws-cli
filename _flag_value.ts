import { _pick_flag_h } from '@ctx-core/cli-args'
export function _flag_value(arg_a1, ...a1__flag) {
	const h__flag = _pick_flag_h(arg_a1, ...a1__flag)
	for (let i = 0; i < a1__flag.length; i++) {
		const value = h__flag[a1__flag[i]]
		if (value) return value
	}
	return
}
