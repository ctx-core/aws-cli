import { child_process__pipe } from '@ctx-core/child_process'
import { spawn } from 'child_process'
import { cloudformation_describe_stack_events_arg_a_ } from '../cloudformation_describe_stack_events_arg_a_/index.js'
export async function cloudformation_describe_stack_events_cli(
	arg_a,
	value_R_flag_dfn = {},
	cancel_a = ['help']
) {
	const pick_default_arg_a =
		cloudformation_describe_stack_events_arg_a_(
			arg_a,
			value_R_flag_dfn,
			cancel_a)
	return child_process__pipe(
		spawn('aws2', [
			'cloudformation',
			'describe-stack-events',
			...pick_default_arg_a,
		]))
}
export { cloudformation_describe_stack_events_cli as cli__cloudformation_describe_stack_events }
