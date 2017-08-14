const STORAGE_KEY = 'todos-vuejs';
/*
（1）JSON.parse 函数
作用：将 JavaScript 对象表示法 (JSON) 字符串转换为对象。　
语法：JSON.parse(text [, reviver])
参数：
text　　必需。 一个有效的 JSON 字符串。
reviver　　可选。 一个转换结果的函数。 将为对象的每个成员调用此函数。
返回值：一个对象或数组
example：
1 var json = '{"name":"GDT","age":23,"University":"GDUT"}';
2 var info = JSON.parse(json);　　//解析为JSON对象
3 document.write(info.name + ' is a student of ' + info.University + ' and he is ' + info.age + " years old."); /info为Object对象

（2）JSON.stringify()函数
作用：将 JavaScript 值转换为 JavaScript 对象表示法 (JSON) 字符串
语法：JSON.stringify( value [, replacer] [, space])
参数：
value　　必需，通常为需要转换的JavaScript值（通常为对象或者数组）
replacer　　可选，用于转换结果的函数或者数组
space　　可选。向返回值 JSON 文本添加缩进、空格和换行符以使其更易于读取。
返回值：一个包含JSON文本的字符串
example：
1 var info = {name:"GDT",age:23,University:"GDUT"};
2 var json = JSON.stringify(info); //转换为JSON字符串
3 document.write(json); //output为{"name":"GDT","age":23,"University":"GDUT"}
*/
export default {
  fetch() {
    return JSON.parse(window.localStorage.getItem(STORAGE_KEY) || '[]');
  },
  save(items) {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  }
}
