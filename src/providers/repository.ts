import { Injectable } from '@angular/core'

@Injectable()

export class Repository {
    save(key, value) {
        localStorage.setItem(key, value);
        console.log("Saved: " + key);
    }

    load(key) {
        let item = localStorage.getItem(key);
        console.log("Loaded: " + key);
        return item;
    }

    remove(key) {
        localStorage.removeItem(key);
    }
}
