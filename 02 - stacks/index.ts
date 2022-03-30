export interface IStack<T> {
  push(element: T): void;
  pop(): T;
  peek(): T;
  isEmpty(): boolean;
  clear(): void;
  size(): number;
  toString(): string;
}

export default class Stack<T> implements IStack<T> {
  private items: {};
  private count: number;

  constructor() {
    this.count = 0;
    this.items = {};
  }

  push(element: T): void {
    this.items[this.count] = element;
    this.count++;
  }

  pop(): T {
    if (this.isEmpty()) {
      return undefined;
    }
    this.count--;
    const result = this.items[this.count];
    delete this.items[this.count];
    return result;
  }

  peek(): T {
    if (this.isEmpty()) {
      return undefined;
    }
    return this.items[this.count - 1];
  }

  isEmpty(): boolean {
    return this.count === 0;
  }

  clear(): void {
    this.count = 0;
    this.items = {};
  }

  size(): number {
    return this.count;
  }

  toString(): string {
    if (this.isEmpty()) {
      return '';
    }
    let objString = `${this.items[0]}`;
    for (let i = 1; i < this.count; i++) {
      objString = `${objString},${this.items[i]}`;
    }
    return objString;
  }
}
