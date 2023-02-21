# Pagination 分页

分页

## 代码演示

### 基本用法

<code src="../../src/pagination/demo/basic.tsx"></code>

### simple 模式

type = simple <code src="../../src/pagination/demo/simple.tsx"></code>

### 输入选择页码

showJumpInput 设置为 true，默认 false <code src="../../src/pagination/demo/input.tsx"></code>

### 自定义元素

页码的所有元素均支持自定义，内置 itemRender，传入对应的元素 dom

```javascript
itemRender={{
  prevNode(current) {
    return <div className="pager-prev">上一个</div>;
  },
  nextNode(current) {
    return <div className="pager-next">下一个</div>;
  },
  totalNode(totalPage) {
    return <div className="pager-total">总数: {totalPage}</div>;
  },
  pagerNode(num) {
    return <div className="pager-pager">{num}</div>;
  },
}}


```

<API src="../../src/pagination/index.tsx"></API>
