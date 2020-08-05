import { _default_arg_a1, pick_arg_a1 } from '@ctx-core/cli-args'
export function _cloudformation_deploy_arg_a1(
	arg_a1,
	value_h_flag_dfn_h = {},
	cancel_a1 = ['help']
) {
	return pick_arg_a1(
		_default_arg_a1(arg_a1, value_h_flag_dfn_h, cancel_a1),
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
export const _a1__arg__cloudformation_deploy = _cloudformation_deploy_arg_a1
