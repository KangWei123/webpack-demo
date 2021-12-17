### HTML新标签
```html
</footer></header></main></nav></time></dialog></progress>
```
#### BFC
> BFC(块级格式换上下文，用于清楚浮动，防止margin重叠)
### 事件委托
> 事件委托指的是不在事件发生地（直接dom）上设置监听函数， 
而是在其父元素上设置监听函数，通过事件冒泡，父元素可以监听到子元素上的事件触发，通过判定事件发生元素的DOM类型，来做出不同的响应。
### 事件代理
> 子元素触发事件的时候，会冒泡到父元素上，给父元素添加事件，有父组件代为执行事件。
### 事件循环
> 先执行宏任务,然后执行该宏任务产生的微任务,若微任务执行过程中产生新的微任务,则就行执行微任务,执行完毕后,再回到宏任务进行下一轮循环.
### 重绘重排
> 重绘:某些元素的外观被改变, *改变背景颜色,文字颜色,投影,描边等*
重排:重新生成布局,重新排列元素, *改变元素宽高、位置,改变元素margin、padding等* ,

> **重绘不一定会出现重排，重排必然会出现重绘。**
### 判断数据类型
```js
typeof(data) // 返回数据类型

data instanceof Array // 返回Boolean值

Object.prototype.toString(data) // 返回[object 数据类型]

```
### new做了哪些事情
- 创建一个空白对象
- 创建一个指向构造函数的指针
- 将这个对象的this传递到构造函数中，并执行构造函数
### JavaScript原型、原型链
> js中每个函数都存在原型对象属性Prototype，所有函数的默认原型都是Object的实列。

> 原型链，简单理解就是原型组成的链，__proto__是对象的原型，原型也是一个对象，也有__prote__属性，原型的__proto__又是原型的原型，一直通过__proto__向上找，就形成了原型链。当找到顶层Object的原型的时候，就找到头了。Object的原型为null。
- 原型链继承：
```js
// 改变prototype指针给需要继承的对象。
Person.prototype = new Animal();
//将原型的原型对象指向自己的构造函数（修正constructor）
Person.prototype.constructor = Person;
```
### this指向
- 函数在对象中调用，this指向对象
- 函数通过call，apply调用，或者使用biad生成新函数，this指向所指定的对象
- 函数在某个上下文中调用，this指向当前上下文对象
- 如果是箭头函数，this指向外层代码块的this
- **定时器中，this指向windows，严格模式下指向undefined**
### call、apply、bind
1. 第一个参数为 新指向对象
2. apply 第二个参数为数组 
3. call，bind 参数逗号分割
4. bind不会直接调用，返回的是新函数，需要再次调用，call、apply会直接调用。
### 箭头函数和普通函数的区别
- 箭头函数没有this（使用外部作用域的this），不能通过call、apply、bind绑定this
- 箭头函数不能通过new创建实列
- 回头函数没有arguments，可以通过rest参数代替
### js监听对象属性的改变
```js
Object.defineProperty(对象，属性值，()=>{
    //缺点：需要指定对象的属性，后期添加对象内的属性无法监听。
    get(){

    },
    set(){

    }
})
let user = new Proxy(新对象，{
    //优点：可监听对象的所有操作，实现高性能监听。
    //监听逻辑
    get(){

    },
    set(){

    }
})
```
### HTTP状态码
- 301 永久重定向
- 307 临时重定向
- 304 资源缓存（cache-control）
- 401 没有访问权限
- 404 资源不存在（地址错误）
- 500 服务器内部错误
- 503 服务不可用（服务超载、停机维护）
### get请求和post请求的区别
> get获取，post新增，put更新，detel删除
- get请求参数在地址栏，post在请求体
- get请求传输数据量小，post请求数据量大些
- post比get安全性高，地址栏不可见
- get请求浏览器回退不会再次发起请求，post会再次发起请求
- get请求会被浏览器主动缓存，post不会
### ES6新增语法
> const let promise async await 解构赋值、扩展运算符、参数默认值、
暴露语法（默认暴露，分别暴露），动态导入模块（import函数），箭头函数，
模板字符串，数组方法（set，map等等）
### 防抖节流
- 防抖：重复点击，重置计数器，到点执行
- 节流：一段时间才可执行一次（案列：钉钉打卡）
### Ajax 简写版
```js
//1.创建XHR对象
const xhr = new XMLHttpRequest()
//2.初始化异步请求
xhr.open（'GET',url,true）
//3.监听请求是否响应成功
xhr.onreadstatechange=(()=>{
    if(xhr.readyState != 4) return //状态不为4，请求为结束
    if(xhr.state>=200 && xhr<=300){
        //响应码在200-299之间，请求成功，return数据
        return (JSON.parse(xhr.responseText))
    }else{
        //响应码不在200-299之间，请求失败，return错误
        return (new Error(reuquest.status))
    }
})
```
### 跨域
- 由于浏览器的同源策略，要求协议域名端口号三者相同
- 地址=协议+域名+端口号+请求路径+参数
- Ajax请求，浏览器要求当前网页和server必须同源（安全），否则讲抛出跨域错误
- </img></link></script>标签不受同源策略现在
> 解决方案：
1. jsonp：利用</script>标签实现get请求
2. CORS：利用白名单特性，服务端设置响应头Access-Control-Allow-Origin字段，实现跨域。
3. 代理：正向代理（devServer-proxy）,反向代理（Nginx）
### 用户输入URL到渲染页面的整个过程
> 根据URL查询DNS,查找服务器，简历TCP链接，发送请求，服务器响应。
### VUE上面周期
- beforeCreate() 在实例化初始后调用，此时data和methods还没有初始化完成，通过this访问不到data里的数据，也访问不到computed和methods。
- created() 此时data和methods都已经初始化完成，可以通过this访问到data里的数据和methods里的方法。
- beforeMount() 此时模板已经在内存编译，但还无法通过ref访问dom对象
- mounted() 此时页面已经挂载完，可以通过ref找到dom对象。
- beforeUpdate() 在页面更新之前调用，此时只能访问原有的页面。
- updated() 在页面更新之后调用，此时可以访问到最新的页面。
- beforeDestroy() 在实列销毁之前调用，此时实列还可以正常工作
- destroyed() 在实列销毁后调用，此时实列也就无法正常工作
### 路由模式
- hash模式和history模式区别
1. hash是无刷新跳转，不会触发页面重新加载，只能修改#后面的部分，所以只能跳转到与当前URL同文档的URL。
2. hash是通过window.onhashchange事件监听URL的改变实现无刷新跳转。
3. history跳转会重新发起请求，页面会重新加载，也可通过pushState、replaceState实现无刷新跳转
### 路由传参方式
- params：传递在/后，需要在路径后声明变量接收，否则刷新会丢失。
- query：？后拼接，key-value形式。&链接
### 路由守卫
- 全局守卫（针对任意路由跳转）：全局前置守卫，全局后置守卫
- 组件守卫：只针对当前组件的路由跳转
### VUE组件通信
1. props、自定义事件、全局事件总线、发布订阅、vuex、v-model、.sync、自定义指令、插槽、$attrs、$listeners、$children、$parent。
2. 浏览器存储：localstorage永久存储，存储大小5M。sessionstorage临时存储，存储大小5M(网页关闭清空)。cookei，存储大小4K(常用与存储token)
### VUEX
- vuex的5大属性-：state、 mutations、 actions、getters、modules
- vuex中的状态数据的响应式的原理?
1. 创建了一个vm对象
2. state中的数据都是vm的data数据(是响应式的)
3. 组件中读取的state数据本质读取的就是data中的数据
4. 一旦更新了state中的数据, 所有用到这个数据的组件就会自动更新
> vuex数据刷新丢失的问题，通过绑定页面刷新事件监听，在卸载前保存当前数据，在初始时读取保存数据作为状态的初始值。
```js
window.addEventListener('hashchange',()=>{console.log('页面刷新')})
```
### VUE双向绑定原理
- 通过v-model来实现双向数据绑定
- v-model的本质
1. 将动态的data数据通过value属性传给input显示  ==> data到view的绑定
2. 给input标签绑定input监听, 一旦输入改变读取最新的值保存到data对应的属性上 ==> view到data的绑定
3. 双向数据绑定是在单向数据绑定(data-->view)的基础, 加入input事件监听(view ==> data)
### vue响应式原理
- VUE是利用了Object.defineProperty的方法里面的setter 与getter方法的观察者模式来实现。这个方法就是在一个对象上定义一个新的属性，或者改变一个对象现有的属性，并且返回这个对象。里面有两个字段 set,get。顾名思义，set都是取设置属性的值，而get就是获取属性的值。

1. init 阶段：
 VUE 的 data的属性都会被reactive化，也就是加上 setter/getter函数。
2. mount 阶段：
mount 阶段的时候，会创建一个Watcher类的对象。这个Watcher实际上是连接Vue组件与Dep的桥梁。
每一个Watcher对应一个vue component。
Dep就是一个观察者类，每一个data的属性都会有一个dep对象。当getter调用的时候，去dep里注册函数，
setter的时候，就是去通知执行刚刚注册的函数。
每次render一个vue 组件的时候，如果这个组件用到了blogTitle（数据），那么这个组件相对应的Watcher对象都会被注册到blogTitle的Dep中。
这个过程就叫做依赖收集。
收集完所有依赖blogTitle属性的组件所对应的Watcher之后，当它发生改变的时候，就会去通知Watcher更新关联的组件。
3. 更新阶段：
当blogTitle 发生改变的时候，就去调用Dep的notify函数,然后通知所有的Watcher调用update函数更新。
### Vue3.0 里为什么要用 Proxy API 替代 defineProperty API？
- 响应式优化
1. defineProperty API 的局限性最大原因是它只能针对单例属性做监听。
Vue2.x 中的响应式实现正是基于 defineProperty 中的 descriptor，对 data 中的属性做了遍
历 + 递归，为每个属性设置了 getter、setter。
这也就是为什么 Vue 只能对 data 中预定义过的属性做出响应的原因，在 Vue 中使用
下标的方式直接修改属性的值或者添加一个预先不存在的对象属性是无法做到 setter 监
听的，这是 defineProperty 的局限性。
2. Proxy API 的监听是针对一个对象的，那么对这个对象的所有操作会进入监听操作，这
就完全可以代理所有属性，将会带来很大的性能提升和更优的代码。
Proxy 可以理解成，在目标对象之前架设一层“拦截”，外界对该对象的访问，都必须
先通过这层拦截，因此提供了一种机制，可以对外界的访问进行过滤和改写。
3. Proxy 响应式是惰性的
在 Vue.js 2.x 中，对于一个深层属性嵌套的对象，要劫持它内部深层次的变化，就需要
递归遍历这个对象，执行 Object.defineProperty 把每一层对象数据都变成响应式的，这
无疑会有很大的性能消耗。
在 Vue.js 3.0 中，使用 Proxy API 并不能监听到对象内部深层次的属性变化，它的处理方式是在 getter 中去递归响应式，这样的好处是真正访问到的内部属性才会变成响应式，简单的可以说是按需实现响应式，减少性能消耗。
### VUE key
> 为了给 Vue 一个提示，以便它能跟踪每个节点的身份，从而重用和重新排序现有元素，你需要为每项提供一个唯一 key 属性。理想的 key 值是每项都有的唯一 id。
key的作用主要是为了高效的更新虚拟DOM

- 我们老的数据转为新的数据时 [a,b,c,d] --> [a,e,b,c,d]
- 如果我们没有使用一个正确的key，可能除了a数据可以复用以外，后面的四个数据都要重新渲染
- 而如果使用了一个正确的key的时候，就可以实现要更改的只有一处，也就是新增数据 e,其他的就会继续对应复用。
### VUE项目优化
- v-for 遍历列表，指定非下标的唯一key，不同时使用 v-if
- 图片资源懒加载v-lazyload
- 路由组件懒加载const Home = () => import('./pages/Home')
- 第三方插件的按需引入
- 资源预加载(prefetch)
- 生产环境时不生成 SourceMap //productionSourceMap: false
- 开启 Gzip
- 静态资源(css/js/img)使用CND引入
- 减少 HTTP 请求
- 添加本地缓存
- 压缩资源文件
### Webpack
- 核心：
1. entry 入口，output 输出，loader 加载器，plugins 插件，mode模式
- 常见基本配置：
1. 处理JS文件（eslint-loader，babel-loader）
2. 处理Vue文件（vue-loader）
3. 处理JSX文件（babel-loader）
4. 处理CSS文件（style-loader，css-loader，postcss-loader，less-loader / sass-loader / stylus-loader）
5. 处理HTML文件（html-webpack-plugin）
6. 处理图片/字体/音视频文件（url-loader / file-loader，limit: 10000 小于10kb一下的图片会被base64处理）
- 优化：
1. preload 和 prefetch 预加载
2. 浏览器cache/缓存
3. code split 代码分割 / lazy loading 懒加载
4. tree shaking( 摇树)
### webpack如何判断环境的？
> 利用node.js的process全局对象，提供信息，命令行启动不同命令执行不同配置文件，修改process.env.NODE_ENV = devlopment/production

> 或者利用webpack的DefinePlugin插件定义可全局访问的环境变量，命令行启动不同命令执行不同配置文件，值不同devlopment/production ，从而判断当前环境





