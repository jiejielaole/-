const express = require('express')

const bodyParser = require('body-parser')

const app = express()

const router = require('./router/index')

//用use去挂在路劲，是从上到下，只要一个匹配了就不会往下匹配了
//回调函数又被称为中间件

//中间件栈

// app.use('/', (req, res, next) => {
//   console.log(0)
//   // res.send('<h1>hello</h1>')
//   next()
// }, (req, res) => {
//   console.log(1)
//   // res.send('<h1>world</h1>')
// })


// app.use('/api', (req, res) => {
//   // console.log(0)
//   res.send('<h1>world</h1>')
// })



app.use(bodyParser.urlencoded({extended:false}))

app.use(bodyParser.json())

app.use('/',router)

// //静态资源服务中间件
// app.use(express.static('./public'))

app.listen(8080, () => {
  console.log('localhost:8080')
})