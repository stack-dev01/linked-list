import { LinkedList } from "./linkedList.js";

const list = new LinkedList();
list.append(1);
list.append(2);
list.append(3);
console.log(list.toString()); // ( 1 ) -> ( 2 ) -> ( 3 ) -> null

list.insertAt(1, 10, 11);
console.log(list.toString()); // ( 1 ) -> ( 10 ) -> ( 11 ) -> ( 2 ) -> ( 3 ) -> null

list.insertAt(0, 0);
console.log(list.toString()); // ( 0 ) -> ( 1 ) -> ( 10 ) -> ( 11 ) -> ( 2 ) -> ( 3 ) -> null

list.insertAt(list.size(), 99);
console.log(list.toString()); // ... -> ( 3 ) -> ( 99 ) -> null

list.removeAt(0);
list.removeAt(2);
console.log(list.toString()); // ( 1 ) -> ( 10 ) -> ( 2 ) -> ( 3 ) -> ( 99 ) -> null

try {
  list.insertAt(50, "x");
} catch (e) {
  console.log(e instanceof RangeError, e.message); // true Index out of bounds
}

try {
  list.removeAt(-1);
} catch (e) {
  console.log(e instanceof RangeError, e.message); // true Index out of bounds
}