import { spawn } from 'child_process';
import { pipe_child_process } from '@ctx-core/child_process';
import { describe_log_groups_logs_arg_a_ } from './describe_log_groups_logs_arg_a_';
export async function describe_log_groups_logs_cli(arg_a, value_h_flag_dfn = {}, cancel_a = ['help']) {
    const pick_default_arg_a = describe_log_groups_logs_arg_a_(arg_a, value_h_flag_dfn, cancel_a);
    return pipe_child_process(spawn('aws2', ['logs', 'describe-log-groups', ...pick_default_arg_a]));
}
export { describe_log_groups_logs_cli as cli__logs__describe_log_groups };
//# sourceMappingURL=src/describe_log_groups_logs_cli.js.map