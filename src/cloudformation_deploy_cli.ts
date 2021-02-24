import { spawn } from 'child_process'
import { pipe_child_process } from '@ctx-core/child_process'
import type { param_dfn_T } from '@ctx-core/cli-args'
import { _cloudformation_deploy_arg_a1 } from './_cloudformation_deploy_arg_a1'
export async function cloudformation_deploy_cli(
	arg_a1:string[],
	value_h_flag_dfn_h:Record<string, param_dfn_T> = {},
	cancel_a1:string[] = ['help']
) {
	const pick_default_arg_a1 =
		_cloudformation_deploy_arg_a1(
			arg_a1, value_h_flag_dfn_h, cancel_a1
		)
	return pipe_child_process(
		spawn(
			'aws2',
			['cloudformation', 'deploy', ...pick_default_arg_a1]
		)
	)
}
