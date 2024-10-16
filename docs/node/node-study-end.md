####  fs系统模块读取文件和写入文件
```js
const path = require('path')
const fs = require('fs')
let resCity = fs.readFileSync(`${__dirname}/city.json`,'utf-8')
console.log(JSON.parse(resCity));
let baseData = fs.readFileSync(`${__dirname}/images/swiper1.jpg`).toString('base64')
// console.log(baseData);
const url = `data:image/jpg;base64,${baseData}`
// console.log(url);
const uri = url.split(',')[1]
const myjpg = Buffer(uri,'base64')
console.log(myjpg);
fs.writeFileSync(`${__dirname}/1.jpg`,myjpg)
fs.readFile('./images/swiper1.jpg',function(err,res) {
  console.log(err);
  console.log(res);
  if(!err) {
    console.log(res);
    var jp = res.toString('base64')
    console.log(jp);
    var url = Buffer.from(jp,'base64')
    fs.writeFile('./1.jpg',url,function(err,data) {
      console.log(err);
      console.log(data);
    })
  }else {
      throw new Error('出错了')
  }
})
```


####  node实现文件上传
* 引入formidable模块
* 创建formidable模块实例对象
* 设置文件上传路径
```css
const path = require('path')
const baseURL = require('../../config/config')
const formidable = require('formidable')
module.exports = (req,res) => {
        const form = new formidable.IncomingForm();
        //创设置文件上传路径
        form.uploadDir = path.join(__dirname,'../','../', 'public','upload');
        form.keepExtensions = true;
        form.parse(req, async(err, fields, files) => {
                let index = files.file.path.lastIndexOf('\\')
                let imgStr = files.file.path.substr(index+1)
                let imgPath = baseURL + imgStr
                res.send(imgPath)

        })

}
```
