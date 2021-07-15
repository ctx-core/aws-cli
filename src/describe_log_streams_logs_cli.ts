import { spawn } from 'child_process'
import { pipe_child_process } from '@ctx-core/child_process'
import type { param_dfn_T } from '@ctx-core/cli-args'
import { describe_log_streams_logs_arg_a_ } from './describe_log_streams_logs_arg_a_'
export async function describe_log_streams_logs_cli(
	arg_a:string[],
	value_h_flag_dfn:Record<string, param_dfn_T> = {},
	cancel_a:string[] = ['help']
) {
	const pick_default_arg_a =
		describe_log_streams_logs_arg_a_(
			arg_a, value_h_flag_dfn, cancel_a
		)
	return pipe_child_process(
		spawn(
			'aws2',
			['logs', 'describe-log-streams', ...pick_default_arg_a]
		)
	)
}
export {
	describe_log_streams_logs_cli as cli__logs__describe_log_streams
}
