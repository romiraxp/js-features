const img = document.getElementById('cookie')
const cnt = document.getElementById('clicker__counter')
const wdt = img.width

function changeImgSize() {
    if (img.width == wdt) {
      img.width+=50
    } else {
      img.width -= 50
    }
    cnt.textContent = Number(cnt.textContent) + 1
    //    console.log(wdt)
}
  document.addEventListener('click', changeImgSize);