import { child_process__pipe } from '@ctx-core/child_process'
import { spawn } from 'child_process'
import { sam_package_arg_a_ } from '../sam_package_arg_a_/index.js'
export async function sam_package_cli(
	arg_a,
	value_R_flag_dfn = {},
	cancel_a = ['help'],
) {
	const pick_default_arg_a =
		sam_package_arg_a_(
			arg_a,
			value_R_flag_dfn,
			cancel_a)
	return child_process__pipe(
		spawn('sam', [
			'package',
			...pick_default_arg_a
		]))
}
