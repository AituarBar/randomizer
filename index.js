const btn = document.getElementById("btn");
const input = document.getElementById("ipt")

const test = () => {
    let x = Math.floor(Math.random() * 100);
    ipt.value = x;
    ipt.classList.add('answer')
}

btn.addEventListener("click", test)
