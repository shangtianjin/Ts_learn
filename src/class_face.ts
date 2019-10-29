interface Human {
  name: string;
  eat(): void;
}

class Asi implements Human {
  constructor(name: string) {
    this.name = name;
  }
  name: string;
  eat() {}
  sleep() {}
}

