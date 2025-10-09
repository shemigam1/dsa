class Stack<T = number | string> {
    stack_array: T[]
    constructor() {
        this.stack_array = []
    }

    public push(value: any) {
        if (this.checkEmpty()) {
            return null
        }
        this.stack_array.push(value)
    }
    public pop() {
        if (this.checkEmpty()) {
            // return this.stack_array[this.stack_array.length - 1]
            return null
        }
        this.stack_array.pop()
    }
    public peek() {
        if (this.checkEmpty()) {
            return null
        }
        return this.stack_array[this.stack_array.length - 1]
    }

    private checkEmpty() {
        if (this.stack_array.length === 0) {
            return true
        }
        return false
    }
}

const stack_overflow = new Stack<string>()
stack_overflow.push('Hello')
stack_overflow.push('World')
stack_overflow.pop()
console.log(stack_overflow.peek())