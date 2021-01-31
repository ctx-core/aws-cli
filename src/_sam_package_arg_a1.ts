import { _default_arg_a1, pick_arg_a1 } from '@ctx-core/cli-args'
export function _sam_package_arg_a1(
	arg_a1,
	value_h_flag_dfn_h = {},
	cancel_a1 = ['--help']
) {
	return pick_arg_a1(
		_default_arg_a1(arg_a1, value_h_flag_dfn_h, cancel_a1),
		'--s3-bucket',
		'--output-template',
		'--debug',
		'--help',
	)
}
export const _a1__arg__sam_package = _sam_package_arg_a1
