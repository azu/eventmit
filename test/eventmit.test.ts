import { eventmit, EventmitHandler } from "../src/eventmit";
import assert from "assert";

describe("eventmit", function () {
    it("emit payload and handler receive the payload", () => {
        const caller: [number, string][] = [];
        const event = eventmit<string>();
        event.on((value) => caller.push([1, value]));
        event.on((value) => caller.push([2, value]));
        const payload = "payload value";
        event.emit(payload);
        assert.deepStrictEqual(caller, [
            [1, payload],
            [2, payload],
        ]);
    });
    it("unregister handler", () => {
        const caller: [number, string][] = [];
        const event = eventmit<string>();
        const handler: EventmitHandler<string> = (value) => caller.push([1, value]);
        event.on(handler);
        event.emit("payload 1");
        assert.deepStrictEqual(caller, [[1, "payload 1"]]);
        event.off(handler);
        event.emit("payload 2");
        assert.deepStrictEqual(caller, [[1, "payload 1"]]);
    });
    it("unregister all handler", () => {
        const caller: [number, string][] = [];
        const event = eventmit<string>();
        const handler1: EventmitHandler<string> = (value) => caller.push([1, value]);
        const handler2: EventmitHandler<string> = (value) => caller.push([2, value]);
        event.on(handler1);
        event.on(handler2);
        event.emit("payload");
        assert.deepStrictEqual(caller, [
            [1, "payload"],
            [2, "payload"],
        ]);
        event.offAll();
        event.emit("payload 2");
        assert.deepStrictEqual(caller, [
            [1, "payload"],
            [2, "payload"],
        ]);
    });
});
