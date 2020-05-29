import { eventmit } from "./src/eventmit";

const event = eventmit<{ key: string }>();
event.on((value) => {
    console.log(1, value);
});
event.on((value) => {
    console.log(2, value);
});
event.emit({
    key: "value",
});
