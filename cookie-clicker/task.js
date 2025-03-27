const img = document.getElementById('cookie')
const cnt = document.getElementById('clicker__counter')

function changeImgSize() {
    img.width +=30
    cnt.textContent = Number(cnt.textContent) + 1
}
  
  document.addEventListener('click', changeImgSize);