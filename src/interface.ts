// let addFace: (x: number, b: number) => number

// interface addFace {
//   (x: number, y: number): number
// }

// type AddFace = (x: number, y: number) => number

// let Add: AddFace = (a, b) => a + b

// interface Lib {
//   (): void;
//   version: string;
//   doSomething(): void;
// }

// const getLib = () => {
//   let lib: Lib = (() => { }) as Lib;
//   lib.version = '1.0'
//   lib.doSomething = () => { }
//   return lib
// }

// let lib1 = getLib()
// lib1()
// lib1.doSomething()
// let lib2 = getLib()
