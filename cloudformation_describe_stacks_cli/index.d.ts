import type { param_dfn_T } from 'ctx-core/cli-args'
export declare function cloudformation_describe_stacks_cli(
	arg_a:string[],
	value_R_flag_dfn?:Record<string, param_dfn_T>,
	cancel_a?:string[]
):Promise<number>
export { cloudformation_describe_stacks_cli as cli__cloudformation_describe_stacks }
