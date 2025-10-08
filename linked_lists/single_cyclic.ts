class CyclicListNode<T> {
    value: T
    next: CyclicListNode<T> | null
    // prev: CyclicListNode<T> | null

    constructor(value: T) {
        this.value = value
        this.next = null
        // this.prev = null
    }
}

class CyclicLinkedList<T> {
    head: CyclicListNode<T> | null
    // tail: CyclicListNode<T> | null
    // length: number

    constructor() {
        this.head = null
        // this.tail = null
        // this.length = 0
    }

    addNode(value: T) {
        const newNode = new CyclicListNode(value)

        if (this.head === null) {
            this.head = newNode
            // this.tail = newNode
            // this.length++
            // console.log();

        } else {
            let current = this.head
            while (current.next != null) {
                // this.length += 1
                current = current.next
            }
            // this.head = newNode
            current.next = newNode
            newNode.next = this.head
            // current.prev = newNode
            // this.length++
        }

    }

    removeNode(value: T) {
        const newNode = new CyclicListNode(value)

        if (this.head === null) {
            this.head = newNode
            // this.tail = newNode
            // this.length++
            // console.log();

        } else {
            // O(n) traversal
            let current = this.head

            while (current.next != null) {
                // this.length += 1
                current = current.next

                if (current.next && current.next.value === value) {
                    let next = current.next.next
                    current.next = next
                }
            }
            console.log('node not found');

            // current.next = newNode
            // newNode.prev = current
            // this.tail = newNode
        }
        // } else {
        //     let current = this.tail
        //     current.next = newNode
        //     newNode.prev = current
        //     this.tail = newNode
        // }    
    }
    insertInNPosition(pos: number, value: T) {
        const newNode = new CyclicListNode(value)



        if (this.head === null || pos < -1) {
            console.log('invalid operation');

            // console.log();

        } else if ((pos === (this.length - 1)) || pos === -1) {
            this.appendNodeToTail(value)
        } else {
            // O(n) traversal
            let current = this.head

            let index = 0
            while (current.next != null && index < pos) {
                index++
                current = current.next
            }
            current.next = newNode
            newNode.prev = current
            // this.tail = newNode
        }
    }

    reverseList() {
        if (this.length <= 1 || this.head === null) {
            console.log('invalid operation');
            return
        }

        let prev: CyclicListNode<T> | null = null
        let current: CyclicListNode<T> | null = this.head
        while (current != null) {
            // current = current.next
            let next: CyclicListNode<T> | null = current.next
            current.next = prev
            prev = current
            current = next
        }
        this.head = prev
        this.tail = current
        return prev

    }
}

const list = new LinkedList()
list.appendNodeToTail(1)
list.appendNodeToTail(2)
list.appendNodeToTail(3)
list.appendNodeToTail(4)
list.appendNodeToTail(5)
list.prependNodeToHead(3)

console.log(list);
