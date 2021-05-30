import { default_arg_a_, param_dfn_T, pick_arg_a } from '@ctx-core/cli-args'
export function get_log_events_logs_arg_a_(
	arg_a:string[],
	value_h_flag_dfn:Record<string, param_dfn_T> = {},
	cancel_a:string[] = ['help']
) {
	return pick_arg_a(
		default_arg_a_(arg_a, value_h_flag_dfn, cancel_a),
		'--log-group-name',
		'--log-stream-name',
		'--start-time',
		'--end-time',
		'--next-token',
		'--limit',
		'--start-from-head',
		'--no-start-from-head',
		'--cli-input-json',
		'--generate-cli-skeleton',
		'help',
	)
}
export {
	get_log_events_logs_arg_a_ as _get_log_events_logs_arg_a1,
	get_log_events_logs_arg_a_ as _a1__arg__logs__get_log_events,
}
