/**
 * @description
 * This Class will give some different ways to implement weighted random numbers
 * in Javascript programming language.
 * 
 */
class WeightedRandom {
  // for storing the input sample list, e.g. [2, 9, 3, 4].
  samples;

  // for storing the prefix sums, e.g. [2, 11, 14, 18], a sorted array by default.
  weights;

  // for recording sample length
  sampleLen;

  /**
   * @description
   * In constructor, ths input @param list will be stored in @member samples
   * and the @member weights will be initialized for prefix sums of sample list
   * 
   * @param { number[] } list elements with per own weight
   */
  constructor(list) {
    this.samples = list || [...list];
    this.sampleLen = this.samples.length;
    this.weights = new Array(this.sampleLen).fill(0);

    if (!this.sampleLen) {
      return;
    }

    this.weights[0] = this.samples[0];
    for (let i = 1; i < this.sampleLen; i++) {
      this.weights[i] = this.weights[i - 1] + this.samples[i];
    }
  }

  randomByBinary() {
    const weight = this.weights[this.sampleLen - 1];
    const random = Math.random();
    const target = Math.floor(random * weight) + 1;
    return this.#Inner_BinarySearch(0, this.sampleLen, target);
  }

  /**
   * 
   * @param { number } start
   * the start index in the list for searching 
   * @param { number } end 
   * the end index in the list for searching
   * @param { number} target
   * target value for searching
   * 
   * @returns { number }
   * returns the index of target value
   */
  #Inner_BinarySearch(start, end, target) {
    let lo = start;
    let hi = end;
    let mid = lo;

    // This below check covers all cases , so need to check
    // for mid = lo - (hi-lo) / 2
    while (hi - lo > 0) {
      let mid = Math.floor((hi + lo) / 2);
      if (this.weights[mid] < target) {
        lo = mid + 1;
      }
      else {
        hi = mid;
      }
    }

    if (this.weights[lo] >= target) {
      return lo;
    }

    if (this.weights[hi] >= target) {
      return hi;
    }

    return -1;
  }

  randomByIterate() {
    let res = 0;
    const weight = this.weights[this.sampleLen - 1];
    // 均匀随机数
    const randWeigt = Math.floor(Math.random() * weight) + 1;
    let sum = 0;
    while (res < this.sampleLen) {
      sum += this.samples[res];
      if (sum >= randWeigt) {
        break;
      }
      res++;
    }
    return res;
  }

  // https://www.educative.io/answers/what-is-the-weighted-random-selection-algorithm
  
  /**
   * @description
   * https://lotabout.me/2018/Weighted-Random-Sampling/
   * 
   * @returns { number }
   */
  A_ExpJ() {
    if (!this.sampleLen) {
      return 0;
    }
  
    // samples: [(item, weight), ...]
    // k: number of selected items
    // returns: [(item, weight), ...]
  
    const heap = []; // # [(new_weight, item), ...]
  
    let Tw = 0;
    let Xw = null;
    let w_acc = 0;
  
    for (const [index, num] of this.samples) {
      if (heap.length < 1) {
        wi = num;
        ui = Math.random(); // 0 - 1;
        ki = ui ** (1 / wi);
        heap.push([ki, index]);
        continue
      }
  
      if (w_acc == 0) {
        Tw = heap[0][0];
        r = Math.random();
        Xw = Math.log(r) / Math.log(Tw);
      }
  
      wi = num; // sample[1]
      if (w_acc + wi < Xw) {
        w_acc += wi
        continue
      }
  
      w_acc = 0;
      tw = Tw ** wi;
      r2 = Math.random();
      ki = r2 ** (1 / wi);
      heap.pop();
      heap.push([ki, index]);
    }
        
  
    return heap[0][1];
  }
}

const array = [5, 4, 3, 2, 1];
const vMap  = new Array(array.length).fill(0);
const vvMap = new Array(array.length).fill(0);
const rand = new WeightedRandom(array);
for (let i = 0; i < 10000; i++) {
  const random = rand.randomByBinary();
  vMap[random]++;

  const random2 = rand.randomByIterate();
  vvMap[random2]++;
}

console.log(vMap);
console.log(vvMap);
