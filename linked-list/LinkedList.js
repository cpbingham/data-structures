class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }    
}

class LinkedList {
    constructor(head = null) {
        this.head = head;
    }

    printList() {
        let x = this.head;
        while (x) {
            console.log(x.data);
            x = x.next;
        }
    }

    search(data) {
        let x = this.head;
        while (x !== null && x.data !== data) {
            x = x.next;
        }
        return x;
    }

    insert(newNode) {
        newNode.next = this.head;
        this.head = newNode;
    }

    delete(data) {
        let x = this.head;
        if (x.data === data) {
            this.head = x.next;
            return;
        }

        let prev;
        while (x !== null && x.data !== data) {
            prev = x;
            x = x.next;
        }

        if (x === null) {
            return;
        }

        prev.next = x.next;
    }
}

let node1 = new Node(2);
let list = new LinkedList(node1);

let node2 = new Node(4);
list.insert(node2);
list.printList();

console.log(list.search(4));
console.log(list.search(3));

let node3 = new Node(11);
list.insert(node3);
list.printList();

console.log('')

list.delete(2);
list.printList();