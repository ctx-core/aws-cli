export async function _cli_run(fn:()=>number) {
	try {
		const code = await fn()
		process.exit(code)
	} catch (e) {
		console.error(e)
		process.exit(1)
	}
}
export {
	_cli_run as run_cli
}
