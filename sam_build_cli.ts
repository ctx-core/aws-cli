import { pipe__child_process } from '@ctx-core/child_process'
import { spawn } from 'child_process'
import { _sam_build_arg_a1 } from './_sam_build_arg_a1'
export async function sam_build_cli(
	arg_a1,
	value_h_flag_dfn_h = {},
	cancel_a1 = ['--help']
):Promise<unknown> {
	const a1__arg__default__pick =
		_sam_build_arg_a1(
			arg_a1, value_h_flag_dfn_h, cancel_a1
		)
	return pipe__child_process(
		spawn(
			'sam',
			['build', ...a1__arg__default__pick]
		)
	)
}
export const cli__sam_build = sam_build_cli
