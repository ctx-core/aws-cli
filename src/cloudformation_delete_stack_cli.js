import { spawn } from 'child_process';
import { pipe_child_process } from '@ctx-core/child_process';
import { cloudformation_delete_stack_arg_a_fn } from './cloudformation_delete_stack_arg_a_fn';
export async function cloudformation_delete_stack_cli(arg_a, value_h_flag_dfn = {}, cancel_a = ['help']) {
    const pick_default_arg_a = cloudformation_delete_stack_arg_a_fn(arg_a, value_h_flag_dfn, cancel_a);
    return pipe_child_process(spawn('aws2', ['cloudformation', 'delete-stack', ...pick_default_arg_a]));
}
export { cloudformation_delete_stack_cli as cli__cloudformation_delete_stack };
//# sourceMappingURL=src/cloudformation_delete_stack_cli.js.map