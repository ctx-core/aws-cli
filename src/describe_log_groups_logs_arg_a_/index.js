import { default_arg_a_, arg_a__pick } from '@ctx-core/cli-args'
export function describe_log_groups_logs_arg_a_(
	arg_a,
	value_R_flag_dfn = {},
	cancel_a = ['help']
) {
	return arg_a__pick(
		default_arg_a_(arg_a, value_R_flag_dfn, cancel_a),
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
		'help')
}
export {
	describe_log_groups_logs_arg_a_ as _describe_log_groups_logs_arg_a1,
	describe_log_groups_logs_arg_a_ as _a1__arg__logs__describe_log_groups,
}
