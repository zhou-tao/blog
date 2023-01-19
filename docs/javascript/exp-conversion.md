# 表达式转换 <Badge text="进阶" />
> 掌握这些表达式转换技巧，让你的代码简洁而优雅！

## `falsy`值
常用于代码中条件判断，利用好`falsy`值有利于高效处理业务逻辑判断，而不熟练掌握要么代码臃肿要么经常产出判断BUG（一般这种条件判断的bug都挺严重的😄），如下列举常见的一些`falsy`值：
```js
''
0
null
false
undefined

// **常见误区
-1  // 只有0为falsy
[]  // 数组时一个对象
' ' // 非空
```

## `()`的作用
括号在js语法中用作函数标识符或者运算优先级标识符但在有些地方可以被当做转义表达式使用。

```js
const func = () => { return {} }

// 使用括号简化 用等于以上结果
const func = () => ({})
```

这里使用小括号包住的作用就是相当于告诉js编译器，括号里面是一段表达式而不是常规的语法。 

使用这个技巧的好处的可以在做数据转换时，简化代码：
```js
const users = [{ name: 'tom' }, { name: 'jerry' }]

// => [{ studentName: 'tom' }, ...]
const students = users.map(u => ({
  studentName: u.name
}))

// 而不需要如此
const students = users.map(u => {
  return {
    studentName: u.name
  }
})
```

## 类型转换

类型转换有很多种方法，这里介绍几种不常见但是非常简洁的方式。

```js
const str = '1'
// 字符串 转为 数字
+str //1
str*1 //1

// 任意类型 转为 boolean
!!str // true
```