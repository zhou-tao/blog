# 扁平数据构造树形结构 <Badge text="待优化" />

> 描述：将输入的数组组装成一颗树状的数据结构，时间复杂度越小越好。要求程序具有侦测错误输入的能力。

```js
Input:

[
    { id:1, name: 'i1' },
    { id:2, name:'i2', parentId: 1 },
    { id:4, name:'i4', parentId: 3 },
    { id:3, name:'i3', parentId: 2 },
    { id:8, name:'i8', parentId: 7 }
]
```

### 分析

- 首先构造根节点（唯一）
- 根据已有节点依次构造子节点，记录未匹配上的节点
- 每次成功插入节点进行二次检查（存在先出现子节点后出现父节点情况）
- 打印最终无效节点

### 实现
```js
// 工具函数：回溯构造节点
function deepInsert(id, inserted, noInsert) {
  if (id in noInsert) {
    inserted[id].children ? inserted[id].children.push(noInsert[id]) : inserted[id].children = [noInsert[id]]
    const insertedId = noInsert[id].id
    inserted[insertedId] = noInsert[id]
    delete noInsert[id]
    deepInsert(insertedId, inserted, noInsert)
  }
}

// 构造树
function createTree(data) {
  let tree = null
  const inserted = {}   // 成功插入的节点
  const noInsert = {}   // 未插入的节点
  for (let i = 0; i < data.length; i++) {
    const target = data[i]
    // 构造根节点
    if (!tree && !target.parentId) {
      tree = target
      inserted[target.id] = target
      continue
    }

    // 插入节点
    if (tree && target.parentId in inserted) {
      inserted[target.parentId].children ? inserted[target.parentId].children.push(target) : inserted[target.parentId].children = [target]
      inserted[target.id] = target
      // 递归清空之前未连接上的节点
      deepInsert(target.id, inserted, noInsert)
    } else {
      noInsert[target.parentId] = target
    }
  }

  // 无效节点
  for (const key in noInsert) {
    console.error(`此节点为无效节点：id: ${noInsert[key].id}, parentId: ${key}`)
  }
  return tree
}

```