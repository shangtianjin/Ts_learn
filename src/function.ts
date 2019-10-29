function add1(x: number, y: number) {
  return x + y
}
let add2: (x: number, y: number) => number;
type add3 = (x: number, y: number) => number;

interface add4 {
  (x: number, y: number): number
}
// add1(1,3,3)

function add5(x: number, y?: number) {
  return y ? x + y : x;
}
add5(1,2)

function add6(x: number, y = 1, z: number, q = 1) {
  return x + y + z + q;
}

add6(1, undefined, 2)

function add7(x: number, ...rest: number[]) {
  return x + rest.reduce((pre, cur) => pre + cur)
}
// console.log(add7(1,2,3,4,5)

function add8(...rest: number[]): number;
function add8(...rest: string[]): string;
function add8(...rest: any[]): any {
  const first = rest[0]
  if (typeof first === 'string') {
    return rest.join('');
  }
  if (typeof first === 'number') {
    return rest.reduce((pre, cur) => pre + cur)
  }
}

// console.log(add8(1, 2, 3, 4))
// console.log(add8('1', '2', 'w'))
