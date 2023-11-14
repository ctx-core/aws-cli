#!/usr/bin/env node
import { cli_run, sam_build_cli, } from '../index.js'
cli_run(async () => {
	const arg_a = process.argv.slice(2)
	return sam_build_cli(arg_a, {
		'--template': 'stack-template.yaml',
	})
}).then()
