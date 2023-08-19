# 扁平数据构造树形结构

> 描述：将输入的数组组装成一颗树状的数据结构，时间复杂度越小越好。要求程序具有侦测错误输入的能力。

```bash
Input:

[
  { id: 1, name: 'i1' },
  { id: 2, name: 'i2', parentId: 1 },
  { id: 4, name: 'i4', parentId: 3 },
  { id: 3, name: 'i3', parentId: 2 },
  { id: 8, name: 'i8', parentId: 7 }
]
```

### 分析

- 首先遍历一遍数组数据, 使用哈希表存储所有节点
- 判断是否存在 `parentId`, 不存在则为根节点
- 存在则将自身节点插入 `parentId` 对应的 `children` 中
- 若存在无对应 `parentId` 的节点, 则无效 

### 实现
```js
function createTree(list) {
  const map = new Map()
  const tree = []
  for (let i = 0; i < list.length; i++) {
    const item = list[i]
    item.children = []
    map.set(item.id, item)
  }
  for (const k of map.keys()) {
    const node = map.get(k)
    if (node.parentId !== undefined) {
      if (map.has(node.parentId)) {
        map.get(node.parentId).children.push(node)
      }
      else {
        console.error('存在无效节点', node)
      }
    }
    else {
      tree.push(node)
    }
  }
  return tree
}
```