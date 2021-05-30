import { default_arg_a_, param_dfn_T, pick_arg_a } from '@ctx-core/cli-args'
export function sam_local_start_api_arg_a_(
	arg_a:string[],
	value_h_flag_dfn:Record<string, param_dfn_T> = {},
	cancel_a:string[] = ['help']
) {
	return pick_arg_a(
		default_arg_a_(arg_a, value_h_flag_dfn, cancel_a),
		'--host',
		'-p, --port',
		'-s, --static-dir',
		'-t, --template',
		'-n, --env-vars',
		'--parameter-overrides',
		'-d, --debug-port',
		'--debugger-path',
		'--debug-args',
		'-v, --docker-volume-basedir',
		'-l, --log-file',
		'--layer-cache-basedir',
		'--skip-pull-image',
		'--docker-network',
		'--force-image-build',
		'--debug',
		'--profile',
		'--region',
		'--help',
	)
}
export {
	sam_local_start_api_arg_a_ as _sam_local_start_api_arg_a1,
	sam_local_start_api_arg_a_ as _a1__arg__sam_local_start_api,
}
