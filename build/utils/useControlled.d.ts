interface UseControlledProps<T> {
    controlled?: T;
    default?: T;
    name: string;
    state?: string;
}
export default function useControlled<T>({ controlled, default: defaultProp, name, state, }: UseControlledProps<T>): (T | ((newValue: T) => void) | undefined)[];
export {};
