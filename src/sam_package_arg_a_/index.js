import { default_arg_a_, pick_arg_a } from '@ctx-core/cli-args'
export function sam_package_arg_a_(
	arg_a,
	value_h_flag_dfn = {},
	cancel_a = ['help'],
) {
	return pick_arg_a(
		default_arg_a_(arg_a, value_h_flag_dfn, cancel_a),
		'--s3-bucket',
		'--output-template',
		'--debug',
		'--help')
}
export {
	sam_package_arg_a_ as _sam_package_arg_a1,
	sam_package_arg_a_ as _a1__arg__sam_package,
}
