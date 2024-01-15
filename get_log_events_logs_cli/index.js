import { child_process__pipe } from '@ctx-core/child_process'
import { spawn } from 'node:child_process'
import { get_log_events_logs_arg_a_ } from '../get_log_events_logs_arg_a_/index.js'
export async function get_log_events_logs_cli(
	arg_a,
	value_R_flag_dfn = {},
	cancel_a = ['help'],
) {
	const pick_default_arg_a =
		get_log_events_logs_arg_a_(
			arg_a,
			value_R_flag_dfn,
			cancel_a)
	return child_process__pipe(
		spawn('aws2', [
			'logs',
			'get-log-events',
			...pick_default_arg_a
		]))
}
