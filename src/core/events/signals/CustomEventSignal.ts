import {CustomEvent} from "../CustomEvent";

export class CustomEventSignal<T> {
    private listeners: CustomEvent<T>[] = [];

    subscribe(callback: CustomEvent<T>) {
        this.listeners.push(callback);
    }

    unsubscribe(callback: CustomEvent<T>) {
        const index = this.listeners.indexOf(callback);
        if (index !== -1) {
            this.listeners.splice(index, 1);
        }
    }

    trigger(data: T) {
        for (const listener of this.listeners) {
            listener(data);
        }
    }
}