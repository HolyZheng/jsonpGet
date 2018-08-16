[中文教程Chinese](https://github.com/HolyZheng/jsonpGet#chinese)


[![NPM](https://nodei.co/npm/jsonp-get.png?mini=true)](https://nodei.co/npm/jsonp-get/)
## jsonpGet
![version](https://img.shields.io/badge/jsonpGet-v0.0.6-brightgreen.svg)
![license](https://img.shields.io/badge/License-MIT-blue.svg)

A simple lib for Jsonp Cross-domain Request, it returns a promise
## Installation
install by using npm:
```
$ npm install jsonp-get
```
## Usage
### jsonpGet(url, params?, callback?)
- `url` (`string`), the address we want to visit
- `params` (`object`), for example, `{a: 1, b:2}`, it will make up the `parameters` of url, like `?a=1&b=2`
- `callback` (`string`), a key, used to pass callback function, its default value is `callback`
### demo
get data from [douban api](https://developers.douban.com/wiki/?title=movie_v2)。
```js
import jsonpGet from 'jsonp-get'

let url = 'https://api.douban.com/v2/movie/search'
let params = { tag: '喜剧' }

jsonpGet(url, params)
  .then(res => {
    console.log(res)
  })
  .catch(err => {
    console.log(err)
  })

/* Network
*
* Request URL: https://api.douban.com/v2/movie/search?tag=%E5%96%9C%E5%89%A7&callback=myback
* Request Method: GET
* Status Code: 200 OK
*/

/* Console
*
*  {count: 20, start: 0, total: 200, subjects: Array(20), title: "带有标签 "喜剧" 的条目"}
*/
```
***
## Chinese
## jsonpGet
简单易用的jsonp跨域请求插件，返回一个promise。
## 安装
通过npm进行安装:
```
$ npm install jsonp-get
```
## 用法
### jsonpGet(url, params?, callback?)
- `url` (`string`) 要请求的地址
- `params` (`object`) 参数，组成`url`的参数部分如：`{a: 1, b: 2}` 转为 `?a=1&b=2`
- `callback` (`string`) 前后端约定的字段名，默认值为callback（通常为此值），用来携带回调。

### demo
比如，向[豆瓣公开api](https://developers.douban.com/wiki/?title=movie_v2)发送请求。
```js
import jsonpGet from 'jsonp-get'

let url = 'https://api.douban.com/v2/movie/search'
let params = { tag: '喜剧' }

jsonpGet(url, params)
  .then(res => {
    console.log(res)
  })
  .catch(err => {
    console.log(err)
  })

/* Network
*
* Request URL: https://api.douban.com/v2/movie/search?tag=%E5%96%9C%E5%89%A7&callback=myback
* Request Method: GET
* Status Code: 200 OK
*/

/* Console
*
*  {count: 20, start: 0, total: 200, subjects: Array(20), title: "带有标签 "喜剧" 的条目"}
*/
```
