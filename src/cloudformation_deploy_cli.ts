import { spawn } from 'child_process'
import { pipe_child_process } from '@ctx-core/child_process'
import type { param_dfn_T } from '@ctx-core/cli-args'
import { cloudformation_deploy_arg_a_ } from './cloudformation_deploy_arg_a_.js'
export async function cloudformation_deploy_cli(
	arg_a:string[],
	value_h_flag_dfn:Record<string, param_dfn_T> = {},
	cancel_a:string[] = ['help']
) {
	const pick_default_arg_a =
		cloudformation_deploy_arg_a_(
			arg_a, value_h_flag_dfn, cancel_a
		)
	return pipe_child_process(
		spawn(
			'aws2',
			['cloudformation', 'deploy', ...pick_default_arg_a]
		)
	)
}
