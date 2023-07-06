//Task 1 & Task 4

interface Person {
    name: String; 
    age: number; 
    email: string; 
}
class Student implements Person {
    constructor(public name: string, 
        public age: number, 
        public email: string){}

    introduce(){
        console.log('Good day, ${this.name}');
    }
}
const student = new Student("Nice Cailie", 22, "nicecailie@gmail.com"); 
student.introduce(); 


//task2 & task 5
type Coordinate = [number, number]; 
function calculateDistance(coord1: Coordinate, coord2: Coordinate): number{
    const [x1, y1] = coord1; 
    const [x2, y2] = coord2; 
    const dx = x2-x1;
    const dy = y2-y1; 
    const distance = Math.sqrt(dx ** 2 + dy ** 2);
    return distance;
}
const point1: Coordinate = [0, 0];
const point2: Coordinate = [3, 4];
const distance = calculateDistance(point1, point2);
console.log(distance);


//task3 & task 7
function reverseArray<T>(arr: T[]): T[] {
    const reversed:T[] = [];
    for (let i = arr.length - 1; i >= 0; i--) {
      reversed.push(arr[i]);
    }
    return reversed;
}

const myArray: string[] = ['You', 'see', 'me'];
const reversedArray = reverseArray(myArray);
console.log(reversedArray);


//task 6

function mergeArrays<T>(arr1: T[], arr2: T[]): T[] {
    return [...arr1, ...arr2];
  }
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const mergedArray = mergeArrays(arr1, arr2);
console.log(mergedArray);


