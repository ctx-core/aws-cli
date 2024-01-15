import { child_process__pipe } from '@ctx-core/child_process'
import { spawn } from 'node:child_process'
import { cloudformation_deploy_arg_a_ } from '../cloudformation_deploy_arg_a_/index.js'
export async function cloudformation_deploy_cli(
	arg_a,
	value_R_flag_dfn = {},
	cancel_a = ['help'],
) {
	const pick_default_arg_a =
		cloudformation_deploy_arg_a_(
			arg_a,
			value_R_flag_dfn,
			cancel_a)
	return child_process__pipe(
		spawn('aws2', [
			'cloudformation',
			'deploy',
			...pick_default_arg_a
		]))
}
