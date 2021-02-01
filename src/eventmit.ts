type ToArgsType<T> = T extends Array<unknown> ? T : readonly [T];
export type EventmitHandler<T> = (...args: ToArgsType<T>) => unknown;

export type Eventmitter<T> = {
    /**
     * Register an event handler
     */
    on: (handler: EventmitHandler<T>) => void;
    /**
     * Remove an event handler
     */
    off: (handler: EventmitHandler<T>) => void;
    /**
     * Remove all event handlers
     */
    offAll: () => void;
    /**
     * Invoke all handlers
     */
    emit: (...value: ToArgsType<T>) => void;
};

export const eventmit = <T extends ReadonlyArray<unknown> | unknown = []>(): Eventmitter<T> => {
    const set = new Set<EventmitHandler<T>>();
    return {
        on(handler: EventmitHandler<T>) {
            set.add(handler);
        },
        off(handler: EventmitHandler<T>) {
            set.delete(handler);
        },
        offAll() {
            set.clear();
        },
        emit(...value: ToArgsType<T>) {
            set.forEach((handler) => handler(...value));
        },
    };
};
