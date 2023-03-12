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

    let result;

    try {
      if (this.currentTaskCount >= this.maxTaskCount) {
        await new Promise((resolve) => {
          // just let the task pending, and resolve enqueue
          this.taskQueue.push(resolve);
        });
      }
  
      this.currentTaskCount++;
      const asyncTask = this.#executeTask(task, ...args);
      await new Promise((resolve, reject) => {
        asyncTask.then((valaue) => {
          resolve(valaue);
          result = valaue;
          this.#dequeue();
        }, (reason) => {
          result = reason;
          reject(reason);
          this.#dequeue();
        });
      });
    } catch(e) {
      throw e;
    }

    return result;
  }

  #dequeue = () => {
    // once resolve or reject the task
    // running task is removed
    this.currentTaskCount--;
    // dequeue the pending task and enqueue the new task
    if (this.taskQueue.length) {
      this.taskQueue.shift()();
    }
  }
}

module.exports = TaskManager;
