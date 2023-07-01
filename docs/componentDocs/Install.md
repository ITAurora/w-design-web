# 安装使用

本节将介绍如何在项目中使用 w-design

## 安装

使用 npm 或 yarn 安装

```
npm install w-design
yarn add w-design
```

## 引入 w-design

### 完整引入

#### 需要注意的是 css 样式文件需要单独引入。

在 main.js 中写入以下内容：

```js
import { createApp } from "vue";
import App from "./App.vue";
// 导入组件库
import Wdesign from "w-design";
import "w-design/style.css";

const app = createApp(App);
app.use(Wdesign);
app.mount("#app");

亦或是:

import Wdesign from "w-design";
import "w-design/style.css";
createApp(App).use(Wdesign).mount("#app");
```

<br/>

## 愉快开始

#### 至此 w-design 就引入完成并且可以使用了。

```html
<!-- html -->
<w-button>默认按钮</w-button>
<w-button type="primary">主要按钮</w-button>
```

<br/>

## 按需引用

#### 您可以根据个人需要使用按需引用组件，按需引用时不需要使用 `app.use()` 方法注册。

```js
/*js*/
import { wButton } from "w-design";
```

<br/>

```html
<!-- html -->
<w-button>点击</w-button>
```

<br/>
