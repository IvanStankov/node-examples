const EventsEmitter = require("events");
const uuid = require("uuid");

class Logger extends EventsEmitter {
    log(msg) {
        this.emit("message", {
            id: uuid.v4(),
            msg
        });
    }
}

module.exports = Logger;