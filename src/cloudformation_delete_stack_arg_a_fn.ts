import { default_arg_a_, param_dfn_T, pick_arg_a } from '@ctx-core/cli-args'
export function cloudformation_delete_stack_arg_a_fn(
	arg_a:string[],
	value_h_flag_dfn:Record<string, param_dfn_T> = {},
	cancel_a:string[] = ['help']
) {
	return pick_arg_a(
		default_arg_a_(arg_a, value_h_flag_dfn, cancel_a),
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
	cloudformation_delete_stack_arg_a_fn as cloudformation_delete_stack_arg_a1_fn,
	cloudformation_delete_stack_arg_a_fn as _a1__arg__cloudformation_delete_stack,
}
