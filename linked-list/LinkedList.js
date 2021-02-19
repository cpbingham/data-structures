class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }    
}

class LinkedList {
    constructor(head = null) {
        this.head = head;
        this.length = head ? 1 : 0;
    }

    // Print Data
    toString() {
        let current = this.head,
        string = '';

        while (current) {
            string += current.data + '\n';
            current = current.next;
        }

        return string;
    }

    // Get element at index
    getElementAt(index) {
        if (index >= 0 && index <= this.length) {
            let current = this.head;
            for (let i = 0; i < index && current; i++)
                current = current.next;
            return current;
        }
        return undefined;
    }

    // Add new data to list
    append(data) {
        const node = new Node(data);
        let current;
        if (!this.head)
            this.head = node;
        else {
            current = this.getElementAt(this.length - 1);
            current.next = node;
        }

        this.length++;
    }

    // Insert data at specific index
    insert(data, index) {
        if (index >= 0 && index <= this.length) {
            const node = new Node(data);
            let current = this.head;

            // Insert at head
            if (index === 0) {
                if (this.head === null)
                    this.head = node;
                else {
                    node.next = current;
                    this.head = node;                
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
                else 
                    this.head = this.head.next;
            } else {
                const previous = this.getElementAt(index - 1);
                current = previous.next;
                previous.next = current.next;
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

        while (current) {
            if (data === current.data)
                return 1;
            
            current = current.next;
        }

        return -1;
    }

    // Find data in list
    contains(data) {
        return this.indexOf(data) !== -1;
    }

    // Delete data by value
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

let list = new LinkedList();
list.append(1);
list.append(2)
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