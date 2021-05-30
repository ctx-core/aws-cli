import { default_arg_a_, param_dfn_T, pick_arg_a } from '@ctx-core/cli-args'
export function sam_build_arg_a_(
	arg_a:string[],
	value_h_flag_dfn:Record<string, param_dfn_T> = {},
	cancel_a:string[] = ['help']
):string[] {
	return pick_arg_a(
		default_arg_a_(arg_a, value_h_flag_dfn, cancel_a),
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
		'--help',
	)
}
export {
	sam_build_arg_a_ as _sam_build_arg_a1
}
