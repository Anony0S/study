window.onload = function () {
  // 先执行一次避免第一次进入页面闪动
  setTime();
  // 定时器，每隔 1 秒执行 1 次
  setInterval(() => {
    setTime();
  }, 1000)
}

// 补零函数
function padZero(n) {
  return n > 9 ? n : '0' + n
}

// 时间函数
function setTime() {
  var dt = new Date()
    var HH = dt.getHours()
    var mm = dt.getMinutes()
    var ss = dt.getSeconds()

    // 为页面上的元素赋值
    document.querySelector('#HH').innerHTML = padZero(HH)
    document.querySelector('#mm').innerHTML = padZero(mm)
    document.querySelector('#ss').innerHTML = padZero(ss)
}