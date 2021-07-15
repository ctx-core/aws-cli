import { default_arg_a_, param_dfn_T, pick_arg_a } from '@ctx-core/cli-args'
export function cloudformation_describe_stack_events_arg_a_(
	arg_a:string[],
	value_h_flag_dfn:Record<string, param_dfn_T> = {},
	cancel_a:string[] = ['help']
):string[] {
	return pick_arg_a(
		default_arg_a_(arg_a, value_h_flag_dfn, cancel_a),
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
	cloudformation_describe_stack_events_arg_a_ as _cloudformation_describe_stack_events_arg_a1,
	cloudformation_describe_stack_events_arg_a_ as _a1__arg__cloudformation_describe_stack_events,
}
