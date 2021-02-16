import { spawn } from 'child_process'
import { pipe_child_process } from '@ctx-core/child_process'
import type { param_dfn_type } from '@ctx-core/cli-args'
import { _get_log_events_logs_arg_a1 } from './_get_log_events_logs_arg_a1'
export async function get_log_events_logs_cli(
	arg_a1:string[],
	value_h_flag_dfn_h:Record<string, param_dfn_type> = {},
	cancel_a1:string[] = ['help']
) {
	const pick_default_arg_a1 =
		_get_log_events_logs_arg_a1(
			arg_a1, value_h_flag_dfn_h, cancel_a1
		)
	return pipe_child_process(
		spawn(
			'aws2',
			['logs', 'get-log-events', ...pick_default_arg_a1]
		)
	)
}
