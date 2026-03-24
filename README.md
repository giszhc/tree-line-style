# @giszhc/tree-line-style

一个扩展 Element Plus `el-tree` 树组件连接线样式的 CSS 库，让树组件的层级关系更加清晰美观。

## ✨ 特性

- 🎨 自定义连接线颜色、宽度、样式
- 🔧 可配置的节点缩进和横线长度
- 📱 支持 dashed 和 solid 两种线型
- 🚀 开箱即用，无需复杂配置
- 💡 优化叶子节点的图标占位

## 📦 安装

```bash
npm install @giszhc/tree-line-style
# 或
pnpm add @giszhc/tree-line-style
# 或
yarn add @giszhc/tree-line-style
```

## 🚀 快速使用

在项目中引入样式后，直接在 `el-tree` 组件上添加类名即可：

```html
<el-tree class="normal-tree-line-style" :data="data" />
```

## ⚙️ 自定义配置

通过 CSS 变量来自定义连接线的样式：

```html
<el-tree 
  class="normal-tree-line-style"
  style="--tree-line-color: #409EFF; --tree-line-width: 2px;"
  :data="data" 
/>
```
```

### 可用的 CSS 变量

| 变量名 | 默认值 | 说明 |
|--------|--------|------|
| `--tree-line-color` | `#DCDFE6` | 连接线颜色 |
| `--tree-line-width` | `1px` | 连接线宽度 |
| `--tree-line-style` | `dashed` | 线条类型：`dashed` / `solid` |
| `--tree-node-padding` | `16px` | 节点缩进距离 |
| `--tree-horizontal-line-width` | `20px` | 横线长度 |
| `--tree-line-top` | `18px` | 横线距离节点顶部距离 |
| `--tree-line-left-offset` | `-2px` | 连接线左偏移 |
| `--tree-no-icon-placeholder-size` | `4px` | 叶子节点图标占位大小 |

## 📝 完整示例

```html
<el-tree 
  class="normal-tree-line-style"
  style="
    --tree-line-color: #67C23A;
    --tree-line-width: 2px;
    --tree-line-style: solid;
    --tree-node-padding: 20px;
  "
  :data="treeData" 
  :expand-on-click-node="false"
/>
```

## 🎯 注意事项

1. **直接使用**：直接在 `el-tree` 组件上添加 `normal-tree-line-style` 类名即可
2. **Element Plus 依赖**：本库基于 Element Plus 的 `el-tree` 组件，请确保已安装并引入 Element Plus
3. **样式优先级**：如果与其他样式冲突，可以通过提高选择器优先级或使用 `!important` 解决

## 📄 许可证

MIT License

## 🤝 贡献

欢迎提交 Issue 和 Pull Request！

---

Made with ❤️ for Element Plus users
