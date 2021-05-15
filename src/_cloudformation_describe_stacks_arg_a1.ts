import { _default_arg_a1, param_dfn_T, pick_arg_a1 } from '@ctx-core/cli-args'
export function _cloudformation_describe_stacks_arg_a1(
	arg_a1:string[],
	value_h_flag_dfn:Record<string, param_dfn_T> = {},
	cancel_a1:string[] = ['help']
) {
	return pick_arg_a1(
		_default_arg_a1(arg_a1, value_h_flag_dfn, cancel_a1),
		'--stack-name',
		'--cli-input-json',
		'--starting-token',
		'--max-items',
		'--generate-cli-skeleton',
		'--no-paginate',
		'--output-text',
		'--query',
		'help',
	)
}
export {
	_cloudformation_describe_stacks_arg_a1 as _a1__arg__cloudformation_describe_stacks
}
