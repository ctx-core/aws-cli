import { _default_arg_a1, param_dfn_type, pick_arg_a1 } from '@ctx-core/cli-args'
export function _describe_log_groups_logs_arg_a1(
	arg_a1:string[],
	value_h_flag_dfn_h:Record<string, param_dfn_type> = {},
	cancel_a1:string[] = ['help']
) {
	return pick_arg_a1(
		_default_arg_a1(arg_a1, value_h_flag_dfn_h, cancel_a1),
		'--log-group-name',
		'--log-group-name-prefix',
		'--cli-input-json',
		'--starting-token',
		'--page-size',
		'--max-items',
		'--generate-cli-skeleton',
		'--no-paginate',
		'--output-text',
		'--query',
		'help',
	)
}
export {
	_describe_log_groups_logs_arg_a1 as _a1__arg__logs__describe_log_groups
}
