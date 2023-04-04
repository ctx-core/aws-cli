import { default_arg_a_, arg_a__pick } from '@ctx-core/cli-args'
export function sam_package_arg_a_(
	arg_a,
	value_R_flag_dfn = {},
	cancel_a = ['help'],
) {
	return arg_a__pick(
		default_arg_a_(arg_a, value_R_flag_dfn, cancel_a),
		'--s3-bucket',
		'--output-template',
		'--debug',
		'--help')
}
export {
	sam_package_arg_a_ as _sam_package_arg_a1,
	sam_package_arg_a_ as _a1__arg__sam_package,
}
