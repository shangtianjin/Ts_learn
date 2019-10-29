

// ts class
// class Dog {
//   constructor(name: string) {
//     this.name = name;
//   }
//   public name: string
//   run() {}
//   private pri() {}
//   protected pro() {}
//   readonly legs: number = 3
//   static food: string = 'b'
// }

// console.log(Dog.food)

// let dog = new Dog('wang')
// // dog.legs = 1
// // console.log(dog.food)

// class Hus extends Dog {
//   constructor(name: string, public color: string) {
//     super(name)
//     this.color = color
//     // this.pri()
//     this.pro()
//     // this.legs = 2
//   }
//   // color: string
// }
// console.log(Hus.food, "hus")


abstract class Animal {
  eat() {
    console.log('eat')
  }
  abstract sleep(): void
}

// let ani = new Animal();
class Dog extends Animal {
  constructor(public name: string) {
    super()
    this.name = name;
  }
  run() {}
  sleep() {
    console.log('dog sleep')
  }
}
let dog = new Dog('wang')
// dog.eat()
// dog.sleep()

class Cat extends Animal {
  sleep() {
    console.log('cat sleep')
  }
}
let cat = new Cat()

let animal: Animal[] = [dog, cat]
animal.forEach(fn => {
  fn.sleep()
})