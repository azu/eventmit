export type EventmitHandler<T> = (value: T) => any;

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
    emit: (value: T) => void;
};

export const eventmit: <T>() => Eventmitter<T> = <T>() => {
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
        emit(value: T) {
            set.forEach((handler) => handler(value));
        },
    };
};
