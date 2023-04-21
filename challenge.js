class Node {
  constructor(value, next_node = null) {
    this.value = value;
    this.next_node = next_node;
  }
}

class LinkedList {
  // setup head and tail
  constructor(){
    this.head = null;
    this.tail = null;
  }

  add(number) {
    // your code here
    const node = new Node(number);
    if (this.head === null) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next_node = node;
      this.tail = node;
    }   
    }
  

  get(index) {
    // your code here
    if(index < 0 || index >= this.length) return null;
        var counter = 0;
        var current = this.head;
        while(counter !== index){
            current = current.next_node;
            counter++;
        }
        return current.value;
    }
  }


const list = new LinkedList();

list.add(3);
list.add(5);
console.log(list.get(1));
// => 5

module.exports = LinkedList;