"use client";

interface Person {
  name: string;
  age: number;
  email: string | undefined;
}

class Employee implements Person {
  constructor(
    public name: string,
    public age: number,
    public email?: string
  ) { }

  displayInfo(): void {
    console.log(`Employee: ${this.name}, Age: ${this.age}, Email: ${this.email}`);
  }
}

class Box<T> {
  value: T;

  constructor(initialValue: T) {
    this.value = initialValue;
  }

  getValue(): T {
    return this.value;
  }

  setValue(newValue: T): void {
    this.value = newValue;
  }
}

export default function App() {
  const runAssignment = () => {
    const myNum: number = 5;
    const myStr: string = "Hello";
    const myBool: boolean = true;
    const arr1: number[] = [1, 2];
    const arr2: Array<number> = [3, 4];
    const myTuple: [string, number] = ["Score", 100];

    console.log(myNum, myStr, myBool, arr1, arr2, myTuple);
    const emp = new Employee("Jane Doe", 30, "jane@example.com");
    emp.displayInfo();

    const myBox = new Box<string>("Initial Box Value");
    console.log("Got value:", myBox.getValue());

    myBox.setValue('New Box Value');
    console.log('Updated value: ', myBox.getValue());
  };

  return (
    <div>
      <h1>TypeScript Fundamentals - Assignment Class 8</h1>
      <button onClick={runAssignment}>Run Code</button>
    </div>
  );
}