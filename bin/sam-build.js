#!/usr/bin/env node
import {
	run__cli,
	cli__sam_build,
} from '@ctx-core/aws-cli'
run__cli(async () => {
	const a1__arg = process.argv.slice(2)
	return cli__sam_build(a1__arg, {
		'--template': 'stack-template.yaml',
	})
})
