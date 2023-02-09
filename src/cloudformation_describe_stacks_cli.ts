import { spawn } from 'child_process'
import { child_process__pipe } from '@ctx-core/child_process'
import type { param_dfn_T } from '@ctx-core/cli-args'
import { cloudformation_describe_stacks_arg_a_ } from './cloudformation_describe_stacks_arg_a_.js'
export async function cloudformation_describe_stacks_cli(
	arg_a:string[],
	value_h_flag_dfn:Record<string, param_dfn_T> = {},
	cancel_a:string[] = ['help']
):Promise<number> {
	const pick_default_arg_a =
		cloudformation_describe_stacks_arg_a_(
			arg_a, value_h_flag_dfn, cancel_a
		)
	return child_process__pipe(
		spawn(
			'aws2',
			['cloudformation', 'describe-stacks', ...pick_default_arg_a]
		)
	)
}
export {
	cloudformation_describe_stacks_cli as cli__cloudformation_describe_stacks
}
