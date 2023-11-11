import { arg_a__pick, default_arg_a_ } from '@ctx-core/cli-args'
export function sam_build_arg_a_(
	arg_a,
	value_R_flag_dfn = {},
	cancel_a = ['help']
) {
	return arg_a__pick(
		default_arg_a_(arg_a, value_R_flag_dfn, cancel_a),
		'-b, --build-dir',
		'-s, --base-dir',
		'-u, --use-container',
		'-m, --manifest',
		'-t, --template',
		'--parameter-overrides',
		'--skip-pull-image',
		'--docker-network',
		'--debug',
		'--profile',
		'--region',
		'--help')
}
export { sam_build_arg_a_ as _sam_build_arg_a1 }
