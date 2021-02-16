import { spawn } from 'child_process'
import { pipe_child_process } from '@ctx-core/child_process'
import type { param_dfn_type } from '@ctx-core/cli-args'
import { _sam_build_arg_a1 } from './_sam_build_arg_a1'
export async function sam_build_cli(
	arg_a1:string[],
	value_h_flag_dfn_h:Record<string, param_dfn_type> = {},
	cancel_a1:string[] = ['help']
):Promise<unknown> {
	const pick_default_arg_a1 =
		_sam_build_arg_a1(
			arg_a1, value_h_flag_dfn_h, cancel_a1
		)
	return pipe_child_process(
		spawn(
			'sam',
			['build', ...pick_default_arg_a1]
		)
	)
}
export {
	sam_build_cli as cli__sam_build
}