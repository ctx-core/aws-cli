import { pipe__child_process } from '@ctx-core/child_process'
import { spawn } from "child_process"
import { _cloudformation_describe_stack_events_arg_a1 } from './_cloudformation_describe_stack_events_arg_a1'
export async function cloudformation_describe_stack_events_cli(
	arg_a1,
	value_h_flag_dfn_h = {},
	cancel_a1 = ['help']
) {
	const a1__arg__default__pick =
		_cloudformation_describe_stack_events_arg_a1(
			arg_a1, value_h_flag_dfn_h, cancel_a1
		)
	return pipe__child_process(
		spawn(
			'aws2',
			['cloudformation', 'describe-stack-events', ...a1__arg__default__pick]
		)
	)
}
export const cli__cloudformation_describe_stack_events = cloudformation_describe_stack_events_cli
