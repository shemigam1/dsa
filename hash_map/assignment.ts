class CollisionHashMap<T> {
    private buckets: Array<T | null>;
    private size: number

    constructor(size: number) {
        this.size = size
        if (this.size <= 0) {
            this.buckets = new Array(10).fill(null)
        } else {
            this.buckets = new Array(this.size).fill(null)
        }
    }

    private hashinator(key: T) {
        const token = String(key)
        let hashira = 0

        for (let i = 0; i < token.length; i++) {
            hashira = (hashira + token.charCodeAt(i) * i) % this.size
        }

        return hashira
    }

    set(key: T, val: T) {
        const hashVal = this.hashinator(key)
        this.buckets[hashVal] = val
    }

    get(key: T) {
        let hashVal = this.hashinator(key)
        return this.buckets[hashVal]
    }

    remove(key: T) {
        const hashVal = this.hashinator(key)
        this.buckets[hashVal] = null
        return
    }
}