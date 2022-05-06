// Task 1
const concat = (left: string, right: string): string => {
  return left + right;
}
concat('Hello', 'World');
console.log(concat('Hello', 'World'));

// Task 2
interface IMyHometask {
  howIDoIt: string;
  simeArray: (string|number)[];
  withData: {
    howIDoIt: string;
    simeArray: (string|number)[];
  }[];
};

const MyHometask: IMyHometask = {
  howIDoIt: "I Do It Wel",
  simeArray: ["string one", "string two", 42],
  withData: [{ howIDoIt: "I Do It Wel", simeArray: ["string one", 23] }],
};

// Task 3

const myArray: IMyArray<number> = [1,2,3];

interface IMyArray<T> {
  [N: number]: T

  reduce(fn: (accumulator:T, value: T, initialValue: T, array: IMyArray<T>) => T): T
};

myArray.reduce((acc, val) => acc + val);


// Task 4

interface IHomeTask {
  data: string;
  numbericData: number;
  date: Date;
  externalData: {
      basis: number;
      value: string;
  };
};

type MyPartial<T> = {
  [N in keyof T]?: T[N] extends object ? MyPartial<T[N]> : T[N]
}

const homeTask: MyPartial<IHomeTask> = {
  externalData: {
      value: 'win'
  }
}
