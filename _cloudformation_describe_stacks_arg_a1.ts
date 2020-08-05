import { _default_arg_a1, pick_arg_a1 } from '@ctx-core/cli-args'
export function _cloudformation_describe_stacks_arg_a1(
	arg_a1,
	value_h_flag_dfn_h = {},
	cancel_a1 = ['help']
) {
	return pick_arg_a1(
		_default_arg_a1(arg_a1, value_h_flag_dfn_h, cancel_a1),
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
export const _a1__arg__cloudformation_describe_stacks = _cloudformation_describe_stacks_arg_a1
