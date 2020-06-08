// const fs = require('fs-extra')
// fs.emptyDir('../dist/wx', function (err) {
//   if (!err) console.log('success!')
// })
const path = require('path');
const fs = require('fs');
const dist=path.resolve(__dirname, '../dist');
delDir(dist)
function delDir(path){
  let files = [];
  if(fs.existsSync(path)){
    files = fs.readdirSync(path);
    files.forEach((file, index) => {
      let curPath = path + "/" + file;
      if(fs.statSync(curPath).isDirectory()){
        delDir(curPath); //递归删除文件夹
      } else {
        fs.unlinkSync(curPath); //删除文件
      }
    });
    fs.rmdirSync(path);
  }
}
