import { _default_arg_a1, param_dfn_T, pick_arg_a1 } from '@ctx-core/cli-args'
export function _cloudformation_delete_stack_arg_a1(
	arg_a1:string[],
	value_h_flag_dfn:Record<string, param_dfn_T> = {},
	cancel_a1:string[] = ['help']
) {
	return pick_arg_a1(
		_default_arg_a1(arg_a1, value_h_flag_dfn, cancel_a1),
		'--stack-name',
		'--retain-resources',
		'--role-arn',
		'--client-request-token',
		'--cli-input-json',
		'--generate-cli-skeleton',
		'help',
	)
}
export {
	_cloudformation_delete_stack_arg_a1 as _a1__arg__cloudformation_delete_stack
}
