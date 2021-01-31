export async function _cli_run(fn) {
	try {
		const code = await fn()
		process.exit(code)
	} catch (e) {
		console.error(e)
		process.exit(1)
	}
}
export const run_cli = _cli_run
