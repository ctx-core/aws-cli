import { default_arg_a_, pick_arg_a } from '@ctx-core/cli-args';
export function sam_build_arg_a_(arg_a, value_h_flag_dfn = {}, cancel_a = ['help']) {
    return pick_arg_a(default_arg_a_(arg_a, value_h_flag_dfn, cancel_a), '-b, --build-dir', '-s, --base-dir', '-u, --use-container', '-m, --manifest', '-t, --template', '--parameter-overrides', '--skip-pull-image', '--docker-network', '--debug', '--profile', '--region', '--help');
}
export { sam_build_arg_a_ as _sam_build_arg_a1 };
//# sourceMappingURL=src/sam_build_arg_a_.js.map