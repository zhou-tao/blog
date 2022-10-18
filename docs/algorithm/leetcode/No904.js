
// [3,3,3,1,2,1,1,2,3,3,4]
/**
 * 水果成篮
 * 计算最长包含两种数字的连续子序列长度
 * eg: [1,2,1,3,1,3] => [1,3,1,3] => 4
 * eg: [3,3,3,1,2,1,1,2,3,3,4] => [1,2,1,1,2] => 5
 */
var totalFruit = function(fruits) {
  let max = 0, p1 = 0, p2 = 0, queue = []
  for (let i = 0; i < fruits.length; i++) {
    const item = fruits[i]
    if (item !== queue[0] && item !== queue[1]) queue.push(item)
    if (queue.length === 2 && item !== fruits[i-1]) p2 = i
    if (queue.length > 2) {
      p1 = p2
      p2 = i
      queue.shift()
    }
    max = Math.max(max, i - p1 + 1)
  }
  return max
};

const max = totalFruit([3,3,3,1,2,1,1,2,3,3,4])
console.log(max)
