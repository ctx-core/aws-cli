import { default_arg_a_, param_dfn_T, pick_arg_a } from '@ctx-core/cli-args'
export function cloudformation_deploy_arg_a_(
	arg_a:string[],
	value_h_flag_dfn:Record<string, param_dfn_T> = {},
	cancel_a:string[] = ['help']
):string[] {
	return pick_arg_a(
		default_arg_a_(arg_a, value_h_flag_dfn, cancel_a),
		'--template-file',
		'--stack-name',
		'--s3-bucket',
		'--force-upload',
		'--s3-prefix',
		'--kms-key-id',
		'--parameter-overrides',
		'--capabilities',
		'--no-execute-changeset',
		'--role-arn',
		'--notification-arns',
		'--fail-on-empty-changeset',
		'--tags',
		'help',
	)
}
export {
	cloudformation_deploy_arg_a_ as _cloudformation_deploy_arg_a1,
	cloudformation_deploy_arg_a_ as _a1__arg__cloudformation_deploy,
}
