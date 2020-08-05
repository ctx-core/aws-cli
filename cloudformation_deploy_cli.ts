import { pipe__child_process } from '@ctx-core/child_process'
import { spawn } from 'child_process'
import { _cloudformation_deploy_arg_a1 } from './_cloudformation_deploy_arg_a1'
export async function cloudformation_deploy_cli(
	arg_a1,
	value_h_flag_dfn_h = {},
	cancel_a1 = ['help']
) {
	const pick_default_arg_a1 =
		_cloudformation_deploy_arg_a1(
			arg_a1, value_h_flag_dfn_h, cancel_a1
		)
	return pipe__child_process(
		spawn(
			'aws2',
			['cloudformation', 'deploy', ...pick_default_arg_a1]
		)
	)
}
