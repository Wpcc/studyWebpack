window.onload = function(){
  var oDiv = document.querySelector('div')
  oDiv.innerHTML = 'hello world'
  console.log(VERSION)
  console.log(process.env.VERSION)
  // webpack定义的全局变量并不是直接定义在process.env上，这和vueCLI3.0还是有一定的不同
}
