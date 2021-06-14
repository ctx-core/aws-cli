import { spawn } from 'child_process';
import { pipe_child_process } from '@ctx-core/child_process';
import { sam_build_arg_a_ } from './sam_build_arg_a_';
export async function sam_build_cli(arg_a, value_h_flag_dfn = {}, cancel_a = ['help']) {
    const pick_default_arg_a = sam_build_arg_a_(arg_a, value_h_flag_dfn, cancel_a);
    return pipe_child_process(spawn('sam', ['build', ...pick_default_arg_a]));
}
export { sam_build_cli as cli__sam_build };
//# sourceMappingURL=src/sam_build_cli.js.map