class QueueNode<T> {
    value: T
    next: QueueNode<T> | null

    constructor(value: T) {
        this.value = value
        this.next = null
    }
}


class Queue<T> {
    first: QueueNode<T> | null
    last: QueueNode<T> | null
    length: number

    constructor() {
        this.first = null
        this.last = null
        this.length = 0
    }

    public enque(value: T) {
        const newNode = new QueueNode(value)
        if (this.checkEmpty()) {
            this.first = newNode
            this.last = newNode
            this.length++
        } else {
            if (this.last) {
                this.last.next = newNode
                this.last = newNode
            }
            this.length++
        }
    }

    public deque() {
        if (this.checkEmpty()) {
            return null
        }
        const holder = this.first
        if (holder) {
            this.first = holder.next
            this.length--
        }
    }

    checkEmpty() {
        return (this.length === 0)
    }
}