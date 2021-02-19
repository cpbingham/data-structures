class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }    
}

class CircularList {
    constructor(head = null) {
        this.head = head;
        this.length = 0;
    }

    // Print Data
    toString() {
        let current = this.head,
        string = '';

        const temp = this.head.data;

        while (current) {
            if (temp === current.next.data) {
                string += current.data + (current.next ? '\n' : '');
                break;
            }

            string += current.data + (current.next ? '\n' : '');
            current = current.next;
        }

        return string;
    }

    // Get element at index
    getElementAt(index) {
        if (index >= 0 && index <= this.length) {
            let current = this.head;
            for (let i = 0; i < index && current !== null; i++)
                current = current.next;
            return current;
        }
        return undefined;
    }

    // Add new data to list
    append(data) {
        const node = new Node(data);
        let current;
        node
        if (!this.head)
            this.head = node;
        else {
            current = this.getElementAt(this.length - 1);
            current.next = node;
        }

        node.next = this.head;
        this.length++;
    }

    // Insert data at specific index
    insert(data, index) {
        if (index >= 0 && index <= this.length) {
            const node = new Node(data);
            let current = this.head;

            // Insert at head
            if (index === 0) {
                if (this.head === null) {
                    this.head = node;
                    node.next = this.head;
                } else {
                    node.next = current;
                    current = this.getElementAt(this.length -1);
                    this.head = node;
                    current.next = this.head;
                }
            } else {
                const previous = this.getElementAt(index - 1);
                node.next = previous.next;
                previous.next = node;
            }

            this.length++;
            return true;
        }
        return false;
    }

    // Remove node at index
    removeAt(index) {
        if (index >= 0 && index <= this.length) {
            let current = this.head;

            // Remove at head
            if (index === 0) {
                if (this.length === 1)
                    this.head = undefined;
                else {
                    const removed = this.head;
                    current = this.getElementAt(this.length - 1);
                    this.head = this.head.next;
                    current.next = this.head;
                    current = removed;
                }
            } else {
                const previous = this.getElementAt(index - 1);
                current = previous.next;
                previous.next = current.next 
            }

            this.length--;
            return current.data;
        }
        return undefined;
    }

    // Get index of data
    indexOf(data) {
        let current = this.head,
        index = 0;

        for (let i = 0; i < this.length; i++) {
            if (data === current.data)
                return index;

            index++;
            current = current.next;
        }

        return -1;
    }

    // Find data in list
    contains(data) {
        return this.indexOf(data) !== -1;
    }

    delete(data) {
        return this.removeAt(this.indexOf(data));
    }

    // Check if empty
    isEmpty() {
        return this.length === 0;
    }

    // Return size of list
    size() {
        return this.length;
    }
}

let list = new CircularList();
list.append(1);
list.append(2);
console.log(list.toString());

list.insert(1.5, 1);
console.log(list.toString());

list.insert(0, 0);
console.log(list.toString());

list.removeAt(2);
console.log(list.toString());

list.removeAt(0);
console.log(list.toString());

console.log(list.indexOf(2));
console.log(list.indexOf(3));

console.log(list.contains(2));
console.log(list.contains(3));

list.delete(2);
console.log(list.toString());