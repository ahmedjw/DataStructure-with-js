class hashTable {
  constructor() {
    this.table = new Array(127);
    this.size = 0;
  }
  hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash += key.charCodeAt(i);
    }
    return hash % this.table.length;
  }
  get(key) {
    let Index = this.hash(key);
    return this.table[Index];
  }
  set(key, value) {
    let Index = this.hash(key);
    this.table[Index] = [key, value];
    this.size++;
  }
  remove(key) {
    let Index = this.hash(key);
    if (this.table[Index] && this.table[Index].length > 0) {
      this.table[Index] = undefined;
      this.size--;
    } else return null;
  }
}
