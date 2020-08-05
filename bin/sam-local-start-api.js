#!/usr/bin/env node
import {
	cli_run,
	sam_local_start_api_cli,
} from '@ctx-core/aws-cli'
cli_run(async () => {
	const arg_a1 = process.argv.slice(2)
	return sam_local_start_api_cli(arg_a1, {
		'--template': 'stack-template.yaml',
		'--port': process.env.PORT,
	})
})
