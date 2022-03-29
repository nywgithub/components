//获取url参数sourceType,sourceId
export const getUrlParam = (key: string) => {
  //以key为wd举例
  var url = window.location.search.substring(1) //返回页面url的?后面的部分 tn=monline_3_dg&ie=utf-8&wd=hello
  var reg = new RegExp('(^|&)' + key + '=([^&]*)(&|$)')
  var res = url.match(reg) //获取与正则匹配的字符串数组 此处返回： &wd=hello,&,hello,
  var value = undefined //数组第三个就是要获取的值 hello
  res && (value = res[2])
  return value
}

