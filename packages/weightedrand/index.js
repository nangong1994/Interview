/**
 * 
 * @description
 * 
 * @param { number[] } list elements with per own weight
 *  
 * @param { number } returns the index of elment in list
 */
function WeightedRandom(list) {
  if (!list || !list.length) {
    return 0;
  }

  // samples: [(item, weight), ...]
  // k: number of selected items
  // returns: [(item, weight), ...]

  const heap = []; // # [(new_weight, item), ...]

  let Tw = 0;
  let Xw = null;
  let w_acc = 0;

  for (const [index, num] of list.entries()) {
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

// function createWeightedRandom(input) {
//   if (!input || !input.length) {
//     return () => { return 0; };
//   }

//   const samples = [...input];
//   // 该方法算法复杂度为O(N)
//   // 时间复杂度为 O(log(N))的算法为A-ExpJ(检索出来的), 鉴于是检索出来的，这里并没有追加
//   const weight = samples.reduce((a, b) => { return a + b; });
//   return () => {
//     let res = 0;
//     // 均匀随机数
//     const randWeigt = Math.floor(Math.random() * weight) + 1;
//     let sum = 0;
//     while (res < samples.length) {
//       sum += samples[res];
//       if (sum >= randWeigt) {
//         break;
//       }
//       res++;
//     }
//     return res;
//   }
// }

// const array = [4, 5, 2, 3, 2, 10, 6, 5, 0];
// const vMap = new Array(array.length).fill(0);
// const vvMap = new Array(array.length).fill(0);
// const randNormal = createWeightedRandom(array);

// for (let i = 0; i < 1000; i++) {
//   const random = WeightedRandom(array);
//   vMap[random]++;

//   const rand = randNormal();
//   vvMap[rand]++;
// }

// console.log(vMap);
// console.log(vvMap);