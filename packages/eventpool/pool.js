/**
 * @description
 * This module is designed to manage some tasks by asynchronous
 */

class TaskManager {
  taskQueue = [];
  maxTaskCount = null;
  currentTaskCount = null;

  /**
   * 
   * @param { number } taskCount Maximum tasks can be running
   */
  constructor(maxTaskCount) {
    this.taskQueue = [];
    this.maxTaskCount = maxTaskCount;
    this.currentTaskCount = 0;
  }

  /**
   * @description
   * private function for creating async task
   * 
   * @param { Function } task
   * @param { any[] } args
   */
  #executeTask(task, ...args) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(task.call(null, ...args));
      })
    });
  }

  /**
   * 
   * @param { <T, R>(...args: R[]) => T | Promise<T>} task 
   * @param { R[] } args
   */
  async addTask(task, ...args) {
    if (typeof task !== 'function') {
      return;
    }

    if (this.currentTaskCount >= this.maxTaskCount) {
      await new Promise((resolve) => {
        // just let the task pending, and resolve enqueue
        this.taskQueue.push(resolve);
      });
    }

    this.currentTaskCount++;

    const result = await this.#executeTask(task, ...args);

    this.currentTaskCount--;
    
    if (this.taskQueue.length) {
      this.taskQueue.shift()();
    }

    return result;
  }
}

module.exports = TaskManager;
