

// 原始类型
let bool: boolean = true
let num: number | null = 12
let str: string = 'as'

// str = 212

let arr1: number[] = [1, 2, 3]

const arr2: Array<number | string> = [1, 2, 3, '2', '2']

let tuple: [number, string] = [2, '2']
tuple.push(1)
// console.log(tuple)
// tuple[2]

const add = (x: number, y: number): number => x + y;

let compute: (x: number, y: number) => number;

compute = (a, b) => a + b

let un: undefined = undefined
let nu: null = null

num = nu

// void
let noRt = () => {}

// never
const error = () => {
  throw new Error('s')
}
