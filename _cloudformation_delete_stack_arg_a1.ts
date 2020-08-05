import { _default_arg_a1, pick_arg_a1 } from '@ctx-core/cli-args'
export function _cloudformation_delete_stack_arg_a1(
	arg_a1,
	value_h_flag_dfn_h = {},
	cancel_a1 = ['help']
) {
	return pick_arg_a1(
		_default_arg_a1(arg_a1, value_h_flag_dfn_h, cancel_a1),
		'--stack-name',
		'--retain-resources',
		'--role-arn',
		'--client-request-token',
		'--cli-input-json',
		'--generate-cli-skeleton',
		'help',
	)
}
export const _a1__arg__cloudformation_delete_stack = _cloudformation_delete_stack_arg_a1
