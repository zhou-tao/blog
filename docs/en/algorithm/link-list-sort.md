# 链表排序 <Badge text="待优化" />

> 描述：根据输入的数组中每项的 **before/after/first/last** 规则，输出一个新排好序的数组或者链表。要求，多解的情况可以只求一解，如果无解要求程序能检测出来。

```bash
Input:

[
  { id: 1 },
  { id: 2, before: 1 },
  { id: 3, after: 1 },
  { id: 5, first: true },
  { id: 6, last: true },
  { id: 7, after: 8 },
  { id: 8 },
  { id: 9 }
]
```

## 分析

- 排序规则
  1. 有first、last前后单独处理
  2. 有before、after的情况，需要排序
  3. 无before、after的情况，直接插入
  
- 无解情况
  1. first 前面插入  
  2. last 后面插入  
  3. before 相同  
  4. after 相同  
  5. 相邻的 前 after 与 后 before 不同 

## 实现

```js
function sortArray(arr) {
  const sortedArr = []
  const befores = {}
  const afters = {}
  let first = null
  let last = null
  for (let i = 0; i < arr.length; i++) {
    const item = arr[i]
    if (item.before) {
      if (last && last.id === item.before) {
        throw new Error('不能在first元素前插入')
      }
      if (item.before in befores) {
        throw new Error('存在相同before')
      }
      befores[item.before] = item
    }
    else if (item.after) {
      if (first && first.id === item.after) {
        throw new Error('不能在last元素后插入')
      }
      if (item.after in afters) {
        throw new Error('存在相同after')
      }
      afters[item.after] = item
    }
    else if (item.first) {
      first = item
      sortedArr.unshift(item)
    }
    else if (item.last) {
      last = item
    }
    else {
      if (item.id in afters) {
        sortedArr.push(afters[item.id])
        delete afters[item.id]
      }
      sortedArr.push(item)
      if (item.id in befores) {
        sortedArr.push(befores[item.id])
        delete befores[item.id]
      }
    }
  }
  if (last.id in befores) {
    throw new Error('不可在last元素之后插入新元素')
  }
  if (first.id in afters) {
    throw new Error('不可在first元素之前插入新元素')
  }
  for (let i = 1; i < sortedArr.length; i++) {
    const item = sortedArr[i]
    if (item.id in afters) {
      if (sortedArr[i - 1].after && sortedArr[i - 1].after !== item.id) {
        throw new Error('待插入元素的before与上一元素after冲突')
      }
      sortedArr.splice(i, 0, afters[item.id])
      delete afters[item.id]
      i++
    }
    if (item.id in befores) {
      if (sortedArr[i + 1].before && sortedArr[i + 1].before !== item.id) {
        throw new Error('待插入元素的after与下一元素before冲突')
      }
      sortedArr.splice(i + 1, 0, befores[item.id])
      delete befores[item.id]
      i++
    }
  }
  sortedArr.push(last)
  return sortedArr
}
```