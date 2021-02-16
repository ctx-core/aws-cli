import { spawn } from 'child_process'
import { pipe_child_process } from '@ctx-core/child_process'
import type { param_dfn_type } from '@ctx-core/cli-args'
import { _describe_log_groups_logs_arg_a1 } from './_describe_log_groups_logs_arg_a1'
export async function describe_log_groups_logs_cli(
	arg_a1:string[],
	value_h_flag_dfn_h:Record<string, param_dfn_type> = {},
	cancel_a1:string[] = ['help']
) {
	const pick_default_arg_a1 =
		_describe_log_groups_logs_arg_a1(
			arg_a1,
			value_h_flag_dfn_h,
			cancel_a1)
	return pipe_child_process(
		spawn(
			'aws2',
			['logs', 'describe-log-groups', ...pick_default_arg_a1]
		)
	)
}
export {
	describe_log_groups_logs_cli as cli__logs__describe_log_groups
}