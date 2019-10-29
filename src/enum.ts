// 数字枚举
enum Role {
  Rep = 12,
  Dev,
  Main
}

// console.log(Role)

enum E {a, b}
enum F {a = 0, b = 1}
enum G {a = 'apple', b = 'banana'}

// console.log(E)
// console.log(F)
// console.log(G)

let e: E = 33
let f: F = 33

// console.log(e)

let e1: E.a = 1
let e3: E.a = 1
e1 === e3

let g1: G = G.b
let g2: G = G.a


// 对象类型接口
interface List {
  readonly id: number;
  name: string;
  // [x: string]: any
  sex?: number
}
interface Result {
  data: List[]
}
const render = (result: Result) => {
  result.data.forEach((val) => {
    console.log(val.id, val.name)
    if (val.sex) {
      console.log(val.sex)
    }
    // val.id++
  })
}

let result = {
  data: [
    {id: 1, name: 'A', age: 12},
    {id: 2, name: 'B', sex: 12}
  ]
}
render(result)

interface StringArr {
  [index: string]: any;
  [x: number]: string
}
let charts: StringArr = ["1", '2']
console.log(charts)