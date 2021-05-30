import { spawn } from 'child_process'
import { pipe_child_process } from '@ctx-core/child_process'
import type { param_dfn_T } from '@ctx-core/cli-args'
import { get_log_events_logs_arg_a_ } from './get_log_events_logs_arg_a_'
export async function get_log_events_logs_cli(
	arg_a:string[],
	value_h_flag_dfn:Record<string, param_dfn_T> = {},
	cancel_a:string[] = ['help']
) {
	const pick_default_arg_a =
		get_log_events_logs_arg_a_(
			arg_a, value_h_flag_dfn, cancel_a
		)
	return pipe_child_process(
		spawn(
			'aws2',
			['logs', 'get-log-events', ...pick_default_arg_a]
		)
	)
}
