import { _default_arg_a1, pick_arg_a1 } from '@ctx-core/cli-args'
export function _sam_local_start_api_arg_a1(
	arg_a1,
	value_h_flag_dfn_h = {},
	cancel_a1 = ['--help']
) {
	return pick_arg_a1(
		_default_arg_a1(arg_a1, value_h_flag_dfn_h, cancel_a1),
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
export const _a1__arg__sam_local_start_api = _sam_local_start_api_arg_a1
