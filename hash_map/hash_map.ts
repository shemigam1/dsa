class LinkNode<K, V> {
    key: K;
    val: V;
    next: LinkNode<K, V> | null;

    constructor(key: K, val: V, next: LinkNode<K, V> | null) {
        this.key = key,
            this.val = val,
            this.next = next
    }
}


class HashMap<K, V> {
    private buckets: Array<LinkNode<K, V> | null>;
    private size: number

    constructor(size: number) {
        this.size = size
        if (this.size <= 0) {
            this.buckets = new Array(10).fill(null)
        } else {
            this.buckets = new Array(this.size).fill(null)
        }
    }

    private hashinator(key: K) {
        const token = String(key)
        let hashira = 0

        for (let i = 0; i < token.length; i++) {
            hashira = (hashira + token.charCodeAt(i) * i) % this.size
        }

        return hashira
    }

    set(key: K, val: V) {
        const hashVal = this.hashinator(key)
        let head = this.buckets[hashVal]

        let curr = head

        while (curr) {
            if (curr.key === key) {
                curr.val = val
                return
            }

            curr = curr.next
        }

        let newNode = new LinkNode(key, val, head)
        this.buckets[hashVal] = newNode
    }

    get(key: K, val: V) {
        let hashVal = this.hashinator(key)
        let head = this.buckets[hashVal]

        let curr = head
        while (curr) {
            if (curr.key === key) {
                return curr.val
            }
            curr = curr.next
        }

        return
    }

    remove(key: K, val: V) {
        const hashVal = this.hashinator(key)
        let curr = this.buckets[hashVal]
        let prev: LinkNode<K, V> | null = null


        while (curr) {
            if (curr.key == key) {
                if (prev) {
                    prev.next = curr.next
                } else {
                    this.buckets[hashVal] = curr.next
                }
                return
            }
            prev = curr
            curr = curr.next
        }
        return
    }
}