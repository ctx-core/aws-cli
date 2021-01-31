import { _default_arg_a1, pick_arg_a1 } from '@ctx-core/cli-args'
export function _cloudformation_package_arg_a1(
	arg_a1,
	value_h_flag_dfn_d = {},
	cancel_a1 = ['help']
) {
	return pick_arg_a1(
		_default_arg_a1(arg_a1, value_h_flag_dfn_d, cancel_a1),
		'--template-file',
		'--s3-bucket',
		'--s3-prefix',
		'--kms-key-id',
		'--output-template-file',
		'--use-json',
		'--force-upload',
		'--metadata',
		'help',
	)
}
export const _a1__arg__cloudformation_package = _cloudformation_package_arg_a1
