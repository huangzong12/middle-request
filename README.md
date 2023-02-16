## Install

Using `npm` to install:

```bash
npm i middle-request
```

Using `yarn` or `pnpm`:

```bash
# with yarn
yarn add middle-request

# with pnpm
pnpm add middle-request
```

## Quickstart

```js
import axios from 'axios'
import request from 'middle-request'

request.init({
  fetcher: axios,
  config: {
    prefix: 'http://localhost:8000'
  }
})

request.delete({
  data: {
    id: '123456789',
  },
  url: "/order/delete",
});

request.post({
  data: {
    name: '张三',
  },
  url: "/order/add",
});
```

## 创建新的request实例

```js
import axios from 'axios'
import request from 'middle-request'

const newRequest = request.create({
  fetcher: axios,
  config: {
    prefix: (requestParam) => {
      if (requestParam.url.indexOf("/login")) {
        return 'http://api-login.test.com.cn'
      }
      return 'http://api.test.com.cn'
    }
  }
})

newRequest.fetch({
  data: {
    name: 'test',
  },
  url: "/",
});
```

## 中间件的使用

```js
import axios from 'axios'
import request from 'middle-request'

request.init({
  fetcher: ({ data, method, url, ...options }) => {
    return axios({ method, url, data, ...options })
  },
  config: {
    host: 'http://api.test.com.cn'
  }
})

function logMiddleware(next) {
  return async (a) => {
    console.log("中间件1-start");
    const res = await next(a);
    console.log("中间件1-end");
    return res
  };
}

function log2Middleware(next) {
  return async (a) => {
    console.log("中间件2-start");
    const res = await next(a);
    console.log("中间件2-end");
    return res;
  };
}

request.applyMiddleware(logMiddleware, log2Middleware);

request.fetch({
  data: {
    name: '李四',
  },
  url: "/search",
});

// 结果
// 中间件1-start
// 中间件2-start
// xhr post http://localhost:8000 { name: 'test'}
// 中间件2-end
// 中间件1-end
```

### 关于中间件

- 中间件的书写

```js
function log2Middleware(next) {
  // 可以是异步函数,但必须捕获异常并抛出
  return async (params) => {
    try {
      params.data = {};
      params.header['Content-Type'] = 'application/json';
      // next是下一个中间件或者是最终的fetch
      const res = await next(params);
      // 必须返回next函数执行结果,可以在此修改response的数据
      res = res.data
      return res;
    } catch(error){
      throw error
    }
  };
}
```

- 中间件模型参照redux设计, 不可卸载中间件. 但可以继续添加中间件. 但需要注意中间件执行顺序.

```js
  request.applyMiddleware(logMiddleware, log2Middleware);
  // 执行顺序为 logMiddleware, log2Middleware

```

```js
 request.applyMiddleware(logMiddleware, log2Middleware);
 request.applyMiddleware(log3Middleware);
  // 此时执行顺序为 log3Middleware, logMiddleware, log2Middleware
```

- 在中间件中获取this

最外层函数必须使用函数申明的方式去定义函数(除非在中间中你用不到`request`对象),内部函数不做要求.
在调用`request.applyMiddleware`方法会将最外层的函数自动`bind`在`request`对象上。

```js
function middleware (){
  const _this = this
  return () => {
    console.log(_this) // request对象,可以读取config
    // ...
  }
}
```
