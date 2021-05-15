import { _default_arg_a1, param_dfn_T, pick_arg_a1 } from '@ctx-core/cli-args'
export function _cloudformation_package_arg_a1(
	arg_a1:string[],
	value_h_flag_dfn:Record<string, param_dfn_T> = {},
	cancel_a1:string[] = ['help']
) {
	return pick_arg_a1(
		_default_arg_a1(arg_a1, value_h_flag_dfn, cancel_a1),
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
export {
	_cloudformation_package_arg_a1 as _a1__arg__cloudformation_package
}
