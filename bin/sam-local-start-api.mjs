#!/usr/bin/env node
import { import_meta_env_ } from '@ctx-core/env'
import { cli_run, sam_local_start_api_cli, } from '../src/index.js'
cli_run(async () => {
	const arg_a = process.argv.slice(2)
	return sam_local_start_api_cli(arg_a, {
		'--template': 'stack-template.yaml',
		'--port': import_meta_env_().PORT,
	})
}).then()
