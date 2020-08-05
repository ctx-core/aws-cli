#!/usr/bin/env node
import {
	cli_run,
	sam_build_cli,
} from '@ctx-core/aws-cli'
cli_run(async () => {
	const arg_a1 = process.argv.slice(2)
	return sam_build_cli(arg_a1, {
		'--template': 'stack-template.yaml',
	})
})
