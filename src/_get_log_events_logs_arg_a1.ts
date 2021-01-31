import { _default_arg_a1, pick_arg_a1 } from '@ctx-core/cli-args'
export function _get_log_events_logs_arg_a1(
	arg_a1,
	value_h_flag_dfn_h = {},
	cancel_a1 = ['help']
) {
	return pick_arg_a1(
		_default_arg_a1(arg_a1, value_h_flag_dfn_h, cancel_a1),
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
export const _a1__arg__logs__get_log_events = _get_log_events_logs_arg_a1
