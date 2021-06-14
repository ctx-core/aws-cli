import { default_arg_a_, pick_arg_a } from '@ctx-core/cli-args';
export function cloudformation_describe_stacks_arg_a_(arg_a, value_h_flag_dfn = {}, cancel_a = ['help']) {
    return pick_arg_a(default_arg_a_(arg_a, value_h_flag_dfn, cancel_a), '--stack-name', '--cli-input-json', '--starting-token', '--max-items', '--generate-cli-skeleton', '--no-paginate', '--output-text', '--query', 'help');
}
export { cloudformation_describe_stacks_arg_a_ as _cloudformation_describe_stacks_arg_a1, cloudformation_describe_stacks_arg_a_ as _a1__arg__cloudformation_describe_stacks, };
//# sourceMappingURL=src/cloudformation_describe_stacks_arg_a_.js.map