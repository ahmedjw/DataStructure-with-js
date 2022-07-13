class node {
  constructor(value) {
    this.value = value;
    this.priority = null;
    this.next = null;
  }
}
class priorityQueue {
  constructor() {
    this.length = 0;
    this.start = null;
    this.end = null;
  }
  enqueue(value, priority) {
    let newNode = new node(value, priority);
    if (!this.length) {
      this.start = newNode;
      this.end = newNode;
    }else if(this.length === 1){
        if(newNode.priority >this.start.priority)
    }
  }
}

function solution(n, a) {
  let arr = [];
  x = a[2]!==undefined?a[2]:"AAA";
  console.log(x)
  for(let i =0 ; i<n ; i++){
      arr[i] = (a[i-1]==undefined?0:a[i-1]) + (a[i]==undefined?0:a[i])+ (a[i+1]   ==undefined?0:a[i+1])
      console.log(a[i-1]!==undefined?a[i-1]:0)
  }
  return arr;
  }
  