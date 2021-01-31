import { pipe__child_process } from '@ctx-core/child_process'
import { spawn } from "child_process"
import { _describe_log_groups_logs_arg_a1 } from './_describe_log_groups_logs_arg_a1'
export async function describe_log_groups_logs_cli(
	arg_a1,
	value_h_flag_dfn_h = {},
	cancel_a1 = ['help']
) {
	const pick_default_arg_a1 =
		_describe_log_groups_logs_arg_a1(
			arg_a1,
			value_h_flag_dfn_h,
			cancel_a1)
	return pipe__child_process(
		spawn(
			'aws2',
			['logs', 'describe-log-groups', ...pick_default_arg_a1]
		)
	)
}
export const cli__logs__describe_log_groups = describe_log_groups_logs_cli
