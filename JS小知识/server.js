const https = require('https')

https.get('https://www.huya.com/g/393', (res) => {
  // console.log(res)
  let str = ''
  res.on('data', (chunk) => {
    str += chunk
  })
  res.on('end', () => {
    console.log(str)
  })
})