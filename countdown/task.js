const p = document.getElementById('timer')
let timerId = setInterval(() => {
    p.textContent = Number(p.textContent) - 1
    if (p.textContent == 0) {
        alert("Вы победили в конкурсе");
        clearInterval(timerId);
    }
}, 1000);
