var ListNode = /** @class */ (function () {
    function ListNode(value) {
        this.value = value;
        this.next = null;
        this.prev = null;
    }
    return ListNode;
}());
var LinkedList = /** @class */ (function () {
    function LinkedList() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    LinkedList.prototype.prependNodeToHead = function (value) {
        var newNode = new ListNode(value);
        if (this.head === null) {
            this.head = newNode;
            this.tail = newNode;
            this.length++;
            // console.log();
        }
        else {
            var current = this.head;
            this.head = newNode;
            newNode.next = current;
            current.prev = newNode;
            this.length++;
        }
    };
    LinkedList.prototype.appendNodeToTail = function (value) {
        var newNode = new ListNode(value);
        if (this.head === null) {
            this.head = newNode;
            this.tail = newNode;
            this.length++;
            // console.log();
        }
        else {
            // O(n) traversal
            var current = this.head;
            while (current.next != null) {
                this.length += 1;
                current = current.next;
            }
            current.next = newNode;
            newNode.prev = current;
            this.tail = newNode;
        }
        // } else {
        //     let current = this.tail
        //     current.next = newNode
        //     newNode.prev = current
        //     this.tail = newNode
        // }    
    };
    LinkedList.prototype.insertInNPosition = function (pos, value) {
        var newNode = new ListNode(value);
        if (this.head === null || pos < -1) {
            console.log('invalid operation');
            // console.log();
        }
        else if ((pos === (this.length - 1)) || pos === -1) {
            this.appendNodeToTail(value);
        }
        else {
            // O(n) traversal
            var current = this.head;
            var index = 0;
            while (current.next != null && index < pos) {
                index++;
                current = current.next;
            }
            current.next = newNode;
            newNode.prev = current;
            // this.tail = newNode
        }
    };
    return LinkedList;
}());
var list = new LinkedList();
list.appendNodeToTail(1);
list.appendNodeToTail(2);
list.appendNodeToTail(3);
list.appendNodeToTail(4);
list.appendNodeToTail(5);
list.prependNodeToHead(3);
console.log(list);
