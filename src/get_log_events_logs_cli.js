import { spawn } from 'child_process';
import { pipe_child_process } from '@ctx-core/child_process';
import { get_log_events_logs_arg_a_ } from './get_log_events_logs_arg_a_';
export async function get_log_events_logs_cli(arg_a, value_h_flag_dfn = {}, cancel_a = ['help']) {
    const pick_default_arg_a = get_log_events_logs_arg_a_(arg_a, value_h_flag_dfn, cancel_a);
    return pipe_child_process(spawn('aws2', ['logs', 'get-log-events', ...pick_default_arg_a]));
}
//# sourceMappingURL=src/get_log_events_logs_cli.js.map