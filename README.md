# eventmit [![Actions Status](https://github.com/azu/eventmit/workflows/test/badge.svg)](https://github.com/azu/eventmit/actions?query=workflow%3A"test")

A single event object per the event.

## Feature

- A single event object for the event
- Tiny code base - 20 LOC
- Written by TypeScript

## Install

Install with [npm](https://www.npmjs.com/):

    npm install eventmit

Requirement: ECMAScript 2015 - This library use `Set`.

## Usage

Create an eventmit object and register handler and invoke handlers.

```ts
import { eventmit } from "eventmit";
const event = eventmit<{ key: string }>();
// Register handler
event.on((value) => {
    console.log(1, value);
});
event.on((value) => {
    console.log(2, value);
});
// Invoke handler
event.emit({
    key: "value"
});
// Unregister handler
event.offAll();
```

## API

```ts
export declare type EventmitHandler<T> = (value: T) => any;
export declare const eventmit: <T>() => {
    /**
     * Register an event handler
     */
    on(handler: EventmitHandler<T>): void;
    /**
     * Remove an event handler
     */
    off(handler: EventmitHandler<T>): void;
    /**
     * Remove all event handlers
     */
    offAll(): void;
    /**
     * Invoke all handlers
     */
    emit(value: T): void;
};
```

## Changelog

See [Releases page](https://github.com/azu/eventmit/releases).

## Running tests

Install devDependencies and Run `npm test`:

    npm test

## Contributing

Pull requests and stars are always welcome.

For bugs and feature requests, [please create an issue](https://github.com/azu/eventmit/issues).

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## Author

- [github/azu](https://github.com/azu)
- [twitter/azu_re](https://twitter.com/azu_re)

## License

MIT © azu
