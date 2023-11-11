#!/usr/bin/env node
import { import_meta_env_ } from '@ctx-core/env'
import { cli_run, sam_package_cli, } from '../index.js'
cli_run(async () => {
	const arg_a = process.argv.slice(2)
	return sam_package_cli(arg_a, {
		'--template-file': 'stack-template.yaml',
		'--s3-bucket': import_meta_env_().AWS_SAM_BUCKET,
		'--output-template': 'packaged-template.yaml',
	})
}).then()
