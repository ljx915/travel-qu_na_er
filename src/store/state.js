// 8-10 Vue项目城市选择页 - Vuex的高级使用及localStorage
let defaultCity = '深圳'
try {
  if (localStorage.city) {
    defaultCity = localStorage.city
  }
} catch(e) {}
// e为error，错误信息，如果接收错误信息再执行代码，里面一般写console.log(error)
  //把默认城市赋值给defaultCity，try。。catch。。,try块内执行语句，如果异常，则执行catch块内的语句，如果没异常，正常输出即可

export default {
  city: defaultCity
}