class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

export class List {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0; 
    }

    prepend(item) {
        let node = new Node(item);
        if (this.length === 0) {
            this.head = this.tail = node;
        } else{
            node.next = this.head;
            this.head = node;
        }
        this.length++;
    }

    insertAt(item, idx) {
        if (idx > this.length) {
            console.error("can't, out of range");
        } else if (idx === 0) {
            this.prepend(item);
        } else if (idx === this.length-1) {
            this.append(item);
        } else {
        let node = new Node(item);
        let nodeBrev = this.getAt(idx-1);
        node.next = nodeBrev.next;
        nodeBrev.next = node
        this.length++;
        }
    }

    append(item) {
        let node = new Node(item);
        if (this.length === 0) {
            this.head = this.tail = node;
        } else{
            this.tail.next = node;
            this.tail = node;
        }
        this.length++;
    }

    pop() {
        if (this.length === 0) {
            return
        }
        if (this.length === 1) {
            this.head = this.tail = null
            this.length--;
            return
        }
        let node = this.head
        for (let i = 0; i < this.length -2; i++) {
            node = node.next
        }
        node.next = undefined;
        this.tail = node;
        this.length--;
    }

    contains(item){
        if(this.find(item) === -1){
            return false
        }
        return true
    }

    getAt(idx) {
        let node = this.head;
        for (let i = 1; i <= idx; i++) {
            node = node.next;
        }
        return node
    }

    find(value){
        if (node.value === value) {
            return 0
        } else if (this.tail === value) {
            return this.length -1
        }
        let node = this.head;
        for (let i = 1; i < this.length - 1; i++) {
            node = node.next;
            if (node.value === value) {
                return i
            }
        }
        return -1
    }
    removeAt(idx) {
        let nodeAt = this.getAt(ind);
        let nodeBrev = this.getAt(ind -1);
        nodeBrev.next = nodeAt.next;
        nodeAt.next = null;
        this.length--;
    }

    toString(){
        let node = this.head;
        let string = `( ${node.value} )`;
        for (let i = 0; i < this.length -2; i++) {
            string += " --> ";
            node = node.next;
            string += `( ${node.value} )`;
        }
        return string
    }
}