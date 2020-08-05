import { pipe__child_process } from '@ctx-core/child_process'
import { spawn } from 'child_process'
import { _get_log_events_logs_arg_a1 } from './_get_log_events_logs_arg_a1'
export async function get_log_events_logs_cli(
	arg_a1,
	value_h_flag_dfn_h = {},
	cancel_a1 = ['help']
) {
	const a1__arg__default__pick =
		_get_log_events_logs_arg_a1(
			arg_a1, value_h_flag_dfn_h, cancel_a1
		)
	return pipe__child_process(
		spawn(
			'aws2',
			['logs', 'get-log-events', ...a1__arg__default__pick]
		)
	)
}
