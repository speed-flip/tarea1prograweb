import { v4 as uuidv4 } from 'uuid';

const randomId = uuidv4();

// console.log(randomId);

function isPar(num) {
  if(num % 2 == 0) {
    return `El numero ${num} SI es par`;
  }

  return `El numero ${num} NO es par`;
}

console.log(isPar(202));
