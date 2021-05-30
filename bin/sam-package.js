#!/usr/bin/env node
import {
	cli_run,
	sam_package_cli,
} from '@ctx-core/aws-cli'
cli_run(async () => {
	const arg_a = process.argv.slice(2)
	return sam_package_cli(arg_a, {
		'--template-file': 'stack-template.yaml',
		'--s3-bucket': process.env.AWS_SAM_BUCKET,
		'--output-template': 'packaged-template.yaml',
	})
})
