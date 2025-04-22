export class CustomEventSignal {
    constructor() {
        this.listeners = [];
    }
    subscribe(callback) {
        this.listeners.push(callback);
    }
    unsubscribe(callback) {
        const index = this.listeners.indexOf(callback);
        if (index !== -1) {
            this.listeners.splice(index, 1);
        }
    }
    trigger(data) {
        for (const listener of this.listeners) {
            listener(data);
        }
    }
}
