# `app-base-web`
web development common base package.
## 安装环境
# 切换node版本
sudo n 11.0.0
# 安装包
npm i
npm audit fix
npm audit fix --force
# 编译js
npm run build
# 编辑css
gulp build

##### 平时编译并复制到对应的工程
npm run build && gulp build
##### 发布时
npm run build && gulp build && npm publish












## 项目应用

npm i app-base-web
//or
yarn add app-base-web
```

####  `modules`
```
import utils from 'app-base-web'
//or
import utils from 'app-base-web/utils'

let arr = ['fengguoqu','patrick','somebody']
let num = 'string'
let date = new Date()

console.log(utils.array.remove(arr,'somebody'))
console.log(utils.check.isNumber(num))
console.log(utils.date.format(date,'YYYY-MM-DD hh:mm'))

// [ 'fengguoqu', 'patrick' ]
// false
// 2019-04-25 21:40

//or
import {array as arrayUtil,check as checkUtil,date as dateUtil} from 'app-base-web'

console.log(arrayUtil.remove(arr,'somebody'))
console.log(checkUtil.isNumber(num))
console.log(dateUtil.format(date,'YYYY-MM-DD hh:mm'))

//dependency module
import numeral from 'app-base-web/numeral'

let num = numeral('1,000')
console.log(num.value())  //1000

import _ from 'app-base-web/lodash'
_.chunk(['a', 'b', 'c', 'd'],2) //[['a', 'b'], ['c', 'd']]
```

## `css`
```
import 'app-base-web/css/base.css'

<div class="hide">You can't see me!</div>
//display:none;

<div class="flex-row-sb">
  <div>left</div>
  <div>middle</div>
  <div>right</div>
</div>
//check out the result!
```
`Note:` include reset.css, common.css, grid.css, visibility.css

## API

For Utils Documentation, visit [document](http://fengguoquzzz.coding.me/app-base-web-api)

#### `utils`

- string
    - uuid `生成uuid`
    - randomCode `生成数字字符随机组合`
    - encrypt `编码`
    - decrypt `解码`
    - checkPwd `检测密码强度`
    - remove `移除字符`
    - replace `替换字符`
    - ellipsis `省略号`
    - filterTag `过滤html代码(把<>转换)`
    - filterScript `过滤<script></script>转换`
    - getRandomColor `获取十六进制随机颜色`
    - domToString `DOM转字符串`
    - stringToDom `字符串转DOM`
- number
    - random `随机数`
    - randomGoods `抽奖概率`
    - randomCode `随机验证码`
    - formatSmallChinese `将数字转换成对应的中文小写`
    - formatMoney `数字金钱表示`
    - formatBigMoney `中文大写金钱表示`
    - numberUnit `数字单位`
- array
    - remove `移除元素`
    - sort `排序`
    - unique `去重`
    - union `并集`
    - intersect `交集`
    - complement `补集`
    - minus `差集`
    - max `最大值`
    - min `最小值`
    - sum `求和`
    - average `平均值`
    - isRepeat `判断数组是否有重复的项`
    - getItemByRandom `随机获取元素`
    - getIndexByItem `通过元素获取下标`
    - getItemByIndex `通过下标获取元素`
    - setItemByIndex `通过下标设置元素`
    - removeByItem `移除元素`
    - removeByIndex `通过下标移除元素`
- check
    - isBrowser `检查是什么浏览器`
    - isMobile `返回手机操作系统`
    - isPC `检查是否为PC`
    - isString
    - isNumber
    - isBoolean
    - isFunction
    - isNull
    - isUndefined
    - isObj
    - isArray
    - isDate
    - isError
    - isSymbol
    - isPromise
    - isSet
    - isEmpty
    - isFalse
    - isInt
    - isPhone
    - isTel
    - isUsername
    - isPassword
    - isPostal
    - isQQ
    - isEmail
    - isMoney
    - isURL
    - isIP
    - isEnglish
    - isChinese
    - isLower
    - isUpper
    - isHTML
    - isSpace
    - isIdCard
    - isBankCard
    - isChineseIdCard
- date
    - format `日期格式化 默认如：YYYY-MM-DD hh:mm:ss`
    - countTime `计算时间的year,month,day,hour,minute,seconds,week,daytime,when 如：早晨，25秒以前等等`
    - countDown `倒计时`
    - getHMS `根据秒数返回时分秒格式 如：getHMS(3610) -> 1小时0分10秒`
    - countMillisecond `计算毫秒数`
    - formatMillisecond `转换毫秒数`
    - getTime `当天当前时间距离1970年1月1日的毫秒数`
    - getMilliseconds `当天当前时间的毫秒数`
    - getSeconds `当天当前时间的秒数`
    - getMinutes `当天当前时间的分钟数`
    - getHours `当天几点`
    - getHours12 `当天几点（12小时制时）`
    - getDay `当月多少号`
    - getWeek `当月星期几`
    - getMonth `当年几月`
    - getPeriod `当年第几季度`
    - getYear `获取年份`
    - daysOfYear `当年有多少天`
    - daysOfMonth `当月有多少天`
    - dayOfYear `当年中的第几天`
    - dayOfMonth `当月中的第几天`
    - weekOfYear `当年的第几周`
    - weekOfMonth `当月中的星期几`
    - firstDayOfYear `当年的第一天`
    - lastDayOfYear `当年的最后一天`
    - firstDayOfMonth `当月的第一天`
    - lastDayOfMonth `当月最后一天`
    - firstTimeOfDay `当天的开始时间`
    - lastTimeOfDay `当天的结束时间`
    - firstDayOfWeek `当周的第一天`
    - lastDayOfWeek `当周的最后一天`
    - firstDayOfNextMonth `下个月的第一天`
    - betweenMillSecond `获取两个时间间隔毫秒数`
    - betweenSecond `获取两个时间间隔秒数`
    - betweenMinute `获取两个时间间隔分钟数`
    - betweenHour `获取两个时间间隔小时数`
    - betweenDay `获取两个时间间隔天数`
    - betweenMonth `获取两个时间间隔月数`
    - betweenYear `获取两个时间间隔年数`
    - plusMillisSeconds `在一个时间上加上多少毫秒`
    - plusSeconds `在一个时间上加上多少秒`
    - plusMinutes `在一个时间上加上多少分钟`
    - plusHours `在一个时间上加上小时数`
    - plusDays `在一个时间上加上天数`
    - plusMonths `在一个时间上加上多少个月,这里是按照一个月30天来计算天数的`
    - plusYears `在一个时间上加上多少年,这里是按照一年365天来计算天数的，isLoop是否闰年`
    - minusMillisSeconds `在一个时间上减去多少毫秒`
    - minusSeconds `在一个时间上减去多少秒`
    - minusMinutes `在一个时间上减去多少分钟`
    - minusHours `在一个时间上减去小时数`
    - minusDays `在一个时间上减去天数`
    - minusMonths `在一个时间上减去多少个月,这里是按照一个月30天来计算天数的`
    - minusYears `在一个时间上减去多少年,这里是按照一年365天来计算天数的，isLoop是否闰年`
    - isEq `判断两个时间是否一样`
    - isAfter `判断date2是否晚于date1`
    - isBefore `判断date2是否早于date1`
- event
    - debounce `空闲控制`
    - throttle `频率控制`
    - hit `检测两个物体是否相撞`
    - frequency `随机间歇执行`
- file
    - formatSize `格式文件大小单位`
    - getExt `获取文件的后缀名`
    - getName `获取文件名称`
    - getFileName `根据路径获取文件全名`
    - isImageFile   `gif|jpg|jpeg|png|GIF|JPG|PNG`
    - isVideoFile   `mp4|mp3|flv|wav`
    - isDocumentFile    `doc|docx|xls|xlsx|pdf|txt|ppt|pptx|rar|zip|html|jsp|sql|htm|shtml|xml`
    - isOfficeFile  `doc|docx|xls|xlsx|pdf|txt|ppt|pptx`
- net
    - getBreadcrumbs `获取path数组`
    - getParam `获取url参数`
    - getParams `获取所有url参数`
    - ajax `http请求`
    - fetch `fetch请求`
    - request `dependency superagent` see [superagent](http://visionmedia.github.io/superagent)
    - cookie `dependency js-cookie` see [js-cookie](https://www.npmjs.com/package/js-cookie)
        - parse `转换字符串cookie`
        - getFromString `从headrs中获取cookie值`
        - getJSON 
        - get 
        - set 
        - remove 
    - localStorage
        - set
        - get
        - remove
        - clear
    - sessionStorage
        - set
        - get
        - remove
        - clear
- xlsx
    - read
    - write
    
#### `dependency module`

- moment `dependency moment` see [momentjs](http://momentjs.cn/docs/#/parsing)
- numeral `dependency numeral` see [numeraljs](http://numeraljs.com)
- math `dependency mathjs` see [mathjs](https://mathjs.org)
- anime `dependency animejs` see [animejs](https://animejs.com/documentation)
- interact `dependency interactjs` see [interactjs](https://interactjs.io)
- jquery `dependency jquery` see [jquery](https://oscarotero.com/jquery)
- lodash `dependency lodash` see [lodash](https://www.lodashjs.com)
- d3 `dependency d3` see [d3](https://github.com/d3/d3/blob/master/API.md)
- Mock `dependency mockjs` see [mockjs](http://mockjs.com/examples.html)
- Sortable `dependency sortablejs` see [sortablejs](http://sortablejs.github.io/Sortable)
- Two `dependency two.js` see [two.js](https://two.js.org)
- Three `dependency threejs` see [threejs](https://threejs.org)
- Web3 `dependency web3` see [web3](https://web3js.readthedocs.io)

#### `common.css class`

- show `display: none;`
- hide  `display: none;`
- invisible `visibility: hidden;`
- transparent `opacity: 0;`
- usn `user-select: none;`
- mask `create a mask`
    - -cover `background-size: cover;`
    - -cover-all `background-size: 100% 100%;`
- font
    - -indent `text-indent: 2em;`
    - -bold `font-weight: bold;`
    - -normal `font-weight: normal;`
    - -fz12 `font-size: 12px;`
    - -fz14 `font-size: 14px;`
    - -fz16 `font-size: 16px;`
    - -fz18 `font-size: 18px;`
    - -fz20 `font-size: 20px;`
    - -fz24 `font-size: 24px;`
    - -fz26 `font-size: 26px;`
    - -fz28 `font-size: 28px;`
    - -fz32 `font-size: 32px;`
- text
    - -tal `text-align: left;`
    - -tar `text-align: right;`
    - -tac `text-align: center;`
    - -taj `text-align: justify;`
    - -ellipsis `overflow: hidden;text-overflow: ellipsis;white-space: nowrap;`
        - -clamp `height: inherit; /*必须设置高度才生效*/`
- menu
    - -icon `width: 16px;height: 16px;...`
    - -text `vertical-align: middle;`
- fixed `position: fixed;`
    - -tl `top: 0;left: 0;`
    - -tr `top: 0;right: 0;`
    - -tc `top: 0;left: 50%;`
    - -bl `bottom: 0;left: 0;`
    - -br `bottom: 0;right: 0;`
    - -bc `bottom: 0;left: 50%;`
    - -cc `bottom: 50%;left: 50%;`
- float
    - -l `float: left;`
    - -r `float: right;`
    - -c `clear: both;...`
- flex
    - -b-half `flex-basis: 50%;`
    - -b-quarter `flex-basis: 25%;`
    - -b-fifth `flex-basis: 20%;`
    - -auto `flex-grow: 1;`
    - -shrink `flex-shrink: 1;`
    - -row `flex-flow: row wrap;...`
    - -row-sa `justify-content: space-around;`
    - -row-sb `justify-content: space-between;`
    - -row-c `justify-content: center;`
    - -row-end `justify-content: flex-end;`
    - -col `flex-flow: column nowrap;`
    - -col-sa `justify-content: space-around;`
    - -col-sb `justify-content: space-between;`
    - -col-c `justify-content: center;`
    - -col-end `justify-content: flex-end;`
    - -center `align-items: center;`
    - -center-sa `justify-content: space-around;`
    - -center-sb `justify-content: space-between;`
    - -center-c `justify-content: center;`
- grid
    - -row `display: grid;`
    - -inline `display: inline-grid;`
- margin
    - -center `position: absolute;left: 0;right: 0;bottom: 0;top: 0;margin: auto;`
- transform
    - -center `position: absolute;left: 50%;top: 50%;transform: translate(-50%, -50%);`
- vertical
    - -center `display: inline-block;text-align: center;`
    - -inner-center `width: inherit;height: inherit;text-align: center;display: table-cell;vertical-align: middle;`

`Note:` 
- grid.css see [Foundation XY Grid](https://foundation.zurb.com/sites/docs/xy-grid.html)	
- visibility.css see [Foundation Visibility Classes](https://foundation.zurb.com/sites/docs/visibility.html)