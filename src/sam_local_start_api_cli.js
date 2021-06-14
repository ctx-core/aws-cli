import { spawn } from 'child_process';
import { pipe_child_process } from '@ctx-core/child_process';
import { sam_local_start_api_arg_a_ } from './sam_local_start_api_arg_a_';
export async function sam_local_start_api_cli(arg_a, value_h_flag_dfn = {}, cancel_a = ['help']) {
    const pick_default_arg_a = sam_local_start_api_arg_a_(arg_a, value_h_flag_dfn, cancel_a);
    return pipe_child_process(spawn('sam', ['local', 'start-api', ...pick_default_arg_a]));
}
//# sourceMappingURL=src/sam_local_start_api_cli.js.map