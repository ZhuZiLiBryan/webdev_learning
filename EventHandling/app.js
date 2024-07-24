const btn2 = document.createElement('button');
btn2.innerText = "Button 2!";
document.body.appendChild(btn2);

btn2.onclick = () => {
    document.querySelector('h1').innerText = "WOOP!";
}

btn2.onmouseenter = () => {
    btn2.innerText = "Ouch!";
}

btn2.onmouseleave = () => {
    btn2.innerText = "Button 2!";
}

document.querySelector('h1').classList.add("header");

document.querySelector('h1').onclick = () => {
    document.querySelector('h1').classList.toggle("header");
}