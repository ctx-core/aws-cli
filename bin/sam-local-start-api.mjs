#!/usr/bin/env node
import { cli_run, sam_local_start_api_cli, } from '../dist/index.mjs'
cli_run(async () => {
	const arg_a = process.argv.slice(2)
	return sam_local_start_api_cli(arg_a, {
		'--template': 'stack-template.yaml',
		'--port': process.env.PORT,
	})
})
