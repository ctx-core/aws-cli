import { spawn } from 'child_process';
import { pipe_child_process } from '@ctx-core/child_process';
import { cloudformation_package_arg_a_ } from './cloudformation_package_arg_a_';
export async function cloudformation_package_cli(arg_a, value_h_flag_dfn = {}, cancel_a = ['help']) {
    const pick_default_arg_a = cloudformation_package_arg_a_(arg_a, value_h_flag_dfn, cancel_a);
    return pipe_child_process(spawn('aws2', ['cloudformation', 'package', ...pick_default_arg_a]));
}
//# sourceMappingURL=src/cloudformation_package_cli.js.map