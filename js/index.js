window.addEventListener('DOMContentLoaded',function () {
//  获取footer所有菜单
  const footerlis = document.querySelectorAll('.footerLi')
//  获取所有内容区
  const sectionLis = document.querySelectorAll('.section')
  //获取所有的星星
  const starts = document.querySelectorAll('.startLis')
  //获取分数
  const scores = document.querySelectorAll('.section-bottom .contentLis span.score')
  let lastSec
//  footer菜单事件
  footerlis.forEach(function (item,index) {
    item.addEventListener('touchstart',function () {
      sectionLis[0].classList.remove('on')
      footerlis[0].classList.remove('active')
      if(lastSec) {
        footerlis[lastSec].classList.remove('active')
        sectionLis[lastSec].classList.remove('on')}
        footerlis[index].classList.add('active')
        sectionLis[index].classList.add('on')
        lastSec = index
    })
  })
//  轮播图
  var mySwiper = new Swiper ('.swiper-container', {
    direction: 'horizontal', // 垂直切换选项
    loop: true, // 循环模式选项
    // autoplay: true,//等同于以下设置
    // 如果需要分页器
    pagination: {
      el: '.swiper-pagination',
      clickable :true,
    }
  })
  count()
  function count() {
    scores.forEach(function (item,index) {
      handlerCountStart(item,index)
    })
  }
//  计算星星
  function handlerCountStart(score,index) {
    const startItem = starts[index].querySelectorAll('li')
    startItem.forEach(function (star,index) {
      let num = score.textContent
      let onStarNum = Math.floor(num)//向下取整
      let halfStarNum = Math.round(num) - onStarNum
      if(index < onStarNum){
        star.classList.add('on')
      } else if(index < onStarNum + halfStarNum){
        star.classList.add("half")
      }else {
        star.classList.add('off')
      }
    })
  }
})
