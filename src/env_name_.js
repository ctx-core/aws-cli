import { flag_value_ } from './flag_value_';
export function env_name_(arg_a) {
    const env_name = flag_value_(arg_a, '--env-name')
        || process.env.NODE_ENV
        || 'development';
    return env_name;
}
export { env_name_ as _env_name, };
//# sourceMappingURL=src/env_name_.js.map