import { _default_arg_a1, pick_arg_a1 } from '@ctx-core/cli-args'
export function _describe_log_groups_logs_arg_a1(
	arg_a1,
	value_h_flag_dfn_h = {},
	cancel_a1 = ['help']
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
export const _a1__arg__logs__describe_log_groups = _describe_log_groups_logs_arg_a1

