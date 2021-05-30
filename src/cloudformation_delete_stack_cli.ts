import { spawn } from 'child_process'
import { pipe_child_process } from '@ctx-core/child_process'
import type { param_dfn_T } from '@ctx-core/cli-args'
import { cloudformation_delete_stack_arg_a_fn } from './cloudformation_delete_stack_arg_a_fn'
export async function cloudformation_delete_stack_cli(
	arg_a:string[],
	value_h_flag_dfn:Record<string, param_dfn_T> = {},
	cancel_a:string[] = ['help']
) {
	const pick_default_arg_a =
		cloudformation_delete_stack_arg_a_fn(
			arg_a, value_h_flag_dfn, cancel_a
		)
	return pipe_child_process(
		spawn(
			'aws2',
			['cloudformation', 'delete-stack', ...pick_default_arg_a]
		)
	)
}
export {
	cloudformation_delete_stack_cli as cli__cloudformation_delete_stack
}
