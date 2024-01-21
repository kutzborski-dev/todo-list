class CacheHelper {
    static _prefix = "todo:";

    static get<T>(key: string): T {
        if(!key || key == '') throw new Error("Please pass a key to retrieve from the cache");
        return JSON.parse(localStorage.getItem(`${this._prefix}${key}`) ?? "null");
    }
    
    static set<T>(key: string, value: T) {
        if(!key || key == '') throw new Error("Please pass a key to add to the cache");
        localStorage.setItem(`${this._prefix}${key}`, JSON.stringify(value));
        return true;
    }

    static remove(key: string) {
        if(!key || key == '') throw new Error("Please pass a key to remove from the cache");
        localStorage.removeItem(`${this._prefix}${key}`);

        return true;
    }

    static clear() {
        localStorage.clear();
        return true;
    }
}

export default CacheHelper;