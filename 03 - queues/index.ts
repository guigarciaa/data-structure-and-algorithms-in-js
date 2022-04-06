export interface IQueue<T> {
  /**
   * @description add element in last position at queue  */
  enquete(element: T): void;
  /**
   * @description remove the first element in queue and return this */
  dequeue(): T;
  /**
   * @description return first element at queue */
  peek(): T;
  /**
   * @description shows if the queue is empty  */
  isEmpty(): boolean;
  /**
   * @description return size at queue  */
  size(): number;
  /**
   * @description clear this queue  */
  clear(): void;
  /**
   * @description return queue content in string  */
  toString(): string;
}

export default class Queue<T> implements IQueue<T> {
  private count: number;
  private lowestCount: number;
  private items: T | {};

  constructor() {
    this.count = 0;
    this.lowestCount = 0;
    this.items = {};
  }

  enquete(element: T): void {
    this.items[this.count] = element;
    this.count++;
  }

  dequeue(): T {
    if (this.isEmpty()) {
      return undefined;
    }
    const result = this.items[this.lowestCount];
    delete this.items[this.lowestCount];
    this.lowestCount++;
    return result;
  }

  peek(): T {
    if (this.isEmpty()) {
      return undefined;
    }
    return this.items[this.lowestCount];
  }

  isEmpty(): boolean {
    return this.size() === 0;
  }

  size(): number {
    return this.count - this.lowestCount;
  }

  clear(): void {
    this.items = {};
    this.count = 0;
    this.lowestCount = 0;
  }

  toString(): string {
    if (this.isEmpty()) {
      return '';
    }
    let objString = `${this.items[this.lowestCount]}`;
    for (let i = this.lowestCount + 1; i < this.count; i++) {
      objString = `${objString},${this.items[i]}`;
    }
    return objString;
  }
}
