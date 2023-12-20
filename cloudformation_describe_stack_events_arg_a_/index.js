import { arg_a__pick, default_arg_a_ } from 'ctx-core/cli-args'
export function cloudformation_describe_stack_events_arg_a_(
	arg_a,
	value_R_flag_dfn = {},
	cancel_a = ['help']
) {
	return arg_a__pick(
		default_arg_a_(arg_a, value_R_flag_dfn, cancel_a),
		'--stack-name',
		'--cli-input-json',
		'--starting-token',
		'--max-items',
		'--generate-cli-skeleton',
		'--no-paginate',
		'--output-text',
		'--query',
		'help')
}
export {
	cloudformation_describe_stack_events_arg_a_ as _cloudformation_describe_stack_events_arg_a1,
	cloudformation_describe_stack_events_arg_a_ as _a1__arg__cloudformation_describe_stack_events,
}
