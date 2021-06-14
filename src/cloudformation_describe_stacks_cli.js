import { spawn } from 'child_process';
import { pipe_child_process } from '@ctx-core/child_process';
import { cloudformation_describe_stacks_arg_a_ } from './cloudformation_describe_stacks_arg_a_';
export async function cloudformation_describe_stacks_cli(arg_a, value_h_flag_dfn = {}, cancel_a = ['help']) {
    const pick_default_arg_a = cloudformation_describe_stacks_arg_a_(arg_a, value_h_flag_dfn, cancel_a);
    return pipe_child_process(spawn('aws2', ['cloudformation', 'describe-stacks', ...pick_default_arg_a]));
}
export { cloudformation_describe_stacks_cli as cli__cloudformation_describe_stacks };
//# sourceMappingURL=src/cloudformation_describe_stacks_cli.js.map