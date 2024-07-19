import { NodeStorage } from "./libs/storage.js";

console.log(NodeStorage.getItem('name'))

NodeStorage.setItem('name', 'Mowtwo')

NodeStorage.setItem('age', '21')

console.log(NodeStorage.getItem('name'))
console.log(NodeStorage.getItem('age'))

console.log(NodeStorage.length)

NodeStorage.removeItem('age')

console.log(NodeStorage.length)

console.log(NodeStorage.key(0))

NodeStorage.setItem('age', '26')

console.log(NodeStorage.getItem('age'))

console.log(NodeStorage.length)

NodeStorage.clear()


console.log(NodeStorage.length)