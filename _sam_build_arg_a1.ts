import { _default_arg_a1, pick_arg_a1 } from '@ctx-core/cli-args'
export function _sam_build_arg_a1(
	arg_a1,
	value_h_flag_dfn_h = {},
	cancel_a1 = ['--help']
) {
	return pick_arg_a1(
		_default_arg_a1(arg_a1, value_h_flag_dfn_h, cancel_a1),
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
