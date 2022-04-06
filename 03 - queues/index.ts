export interface IQueue<T> {
  /**
   * @description add element in first position at queue  */
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
    throw new Error('Method not implemented.');
  }
  dequeue(): T {
    throw new Error('Method not implemented.');
  }
  peek(): T {
    throw new Error('Method not implemented.');
  }

  isEmpty(): boolean {
    throw new Error('Method not implemented.');
  }
}
