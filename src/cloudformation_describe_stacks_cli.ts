import { spawn } from 'child_process'
import { pipe_child_process } from '@ctx-core/child_process'
import { _cloudformation_describe_stacks_arg_a1 } from './_cloudformation_describe_stacks_arg_a1'
import type { param_dfn_type } from '@ctx-core/cli-args'
export async function cloudformation_describe_stacks_cli(
	arg_a1:string[],
	value_h_flag_dfn_h:Record<string, param_dfn_type> = {},
	cancel_a1:string[] = ['help']
) {
	const pick_default_arg_a1 =
		_cloudformation_describe_stacks_arg_a1(
			arg_a1, value_h_flag_dfn_h, cancel_a1
		)
	return pipe_child_process(
		spawn(
			'aws2',
			['cloudformation', 'describe-stacks', ...pick_default_arg_a1]
		)
	)
}
export {
	cloudformation_describe_stacks_cli as cli__cloudformation_describe_stacks
}