export async function cli_run(fn) {
    try {
        const code = await fn();
        process.exit(code);
    }
    catch (e) {
        console.error(e);
        process.exit(1);
    }
}
export { cli_run as _cli_run, cli_run as run_cli, };
//# sourceMappingURL=src/cli_run_fn.js.map