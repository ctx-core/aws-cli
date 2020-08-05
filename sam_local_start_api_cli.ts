import { pipe__child_process } from '@ctx-core/child_process'
import { spawn } from 'child_process'
import { _sam_local_start_api_arg_a1 } from './_sam_local_start_api_arg_a1'
export async function sam_local_start_api_cli(
	arg_a1,
	value_h_flag_dfn_h = {},
	cancel_a1 = ['--help']
) {
	const a1__arg__default__pick =
		_sam_local_start_api_arg_a1(
			arg_a1,
			value_h_flag_dfn_h,
			cancel_a1)
	return pipe__child_process(
		spawn(
			'sam',
			['local', 'start-api', ...a1__arg__default__pick]
		)
	)
}
