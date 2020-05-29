export type EventmitHandler<T> = (value: T) => any;
export const eventmit = <T>() => {
    const set = new Set<EventmitHandler<T>>();
    return {
        /**
         * Register an event handler
         */
        on(handler: EventmitHandler<T>) {
            if (!set.has(handler)) {
                set.add(handler);
            }
        },
        /**
         * Remove an event handler
         */
        off(handler: EventmitHandler<T>) {
            set.delete(handler);
        },
        /**
         * Remove all event handlers
         */
        offAll() {
            set.clear();
        },
        /**
         * Invoke all handlers
         */
        emit(value: T) {
            set.forEach((handler) => handler(value));
        },
    };
};
