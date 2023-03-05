/**
 * @description
 * This module is designed to manage some tasks by asynchronous
 */

class TaskManager {
  taskQueue = null;
  maxTaskCount = null;
  currentTaskCount = null;

  /**
   * 
   * @param { number } taskCount Maximum tasks can be running
   */
  constructor(taskCount) {
    this.taskQueue = [];
    this.maxTaskCount = taskCount;
    this.currentTaskCount = 0;
  }

  /**
   * 
   * @param { <T, R>(...args: R[]) => T | Promise<T>} task 
   */
  addTask(task) {
    if (typeof task !== 'function') {
      return;
    }
    
    this.taskQueue.push(task);
  }

  runTask() {

  }

  endTask() {
    
  }
}

new TaskManager();
