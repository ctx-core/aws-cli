import { default_arg_a_, arg_a__pick } from '@ctx-core/cli-args'
export function sam_local_start_api_arg_a_(
	arg_a,
	value_R_flag_dfn = {},
	cancel_a = ['help'],
) {
	return arg_a__pick(
		default_arg_a_(arg_a, value_R_flag_dfn, cancel_a),
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
		'--help')
}
export {
	sam_local_start_api_arg_a_ as _sam_local_start_api_arg_a1,
	sam_local_start_api_arg_a_ as _a1__arg__sam_local_start_api,
}
