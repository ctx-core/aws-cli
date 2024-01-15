import { child_process__pipe } from '@ctx-core/child_process'
import { spawn } from 'node:child_process'
import { cloudformation_delete_stack_arg_a_fn } from '../cloudformation_delete_stack_arg_a_fn/index.js'
export async function cloudformation_delete_stack_cli(
	arg_a,
	value_R_flag_dfn = {},
	cancel_a = ['help']
) {
	const pick_default_arg_a =
		cloudformation_delete_stack_arg_a_fn(
			arg_a,
			value_R_flag_dfn,
			cancel_a)
	return child_process__pipe(
		spawn(
			'aws2', [
				'cloudformation',
				'delete-stack',
				...pick_default_arg_a
			]))
}
export { cloudformation_delete_stack_cli as cli__cloudformation_delete_stack }
