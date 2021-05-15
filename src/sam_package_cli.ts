import { spawn } from 'child_process'
import { pipe_child_process } from '@ctx-core/child_process'
import type { param_dfn_T } from '@ctx-core/cli-args'
import { _sam_package_arg_a1 } from './_sam_package_arg_a1'
export async function sam_package_cli(
	arg_a1:string[],
	value_h_flag_dfn:Record<string, param_dfn_T> = {},
	cancel_a1:string[] = ['help']
) {
	const pick_default_arg_a1 =
		_sam_package_arg_a1(
			arg_a1, value_h_flag_dfn, cancel_a1
		)
	return pipe_child_process(
		spawn(
			'sam',
			['package', ...pick_default_arg_a1]
		)
	)
}
