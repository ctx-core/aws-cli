import { spawn } from 'child_process'
import { child_process__pipe } from '@ctx-core/child_process'
import { sam_build_arg_a_ } from '../sam_build_arg_a_/index.js'
export async function sam_build_cli(
	arg_a,
	value_h_flag_dfn = {},
	cancel_a = ['help'],
) {
	const pick_default_arg_a = sam_build_arg_a_(arg_a, value_h_flag_dfn, cancel_a)
	return child_process__pipe(spawn('sam', [
		'build',
		...pick_default_arg_a
	]))
}
export { sam_build_cli as cli__sam_build }
