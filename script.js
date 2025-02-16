// script.js
function showLove() {
    const texts = [
        "你是我见过最可爱的人！🥰",
        "要不要和我一起养猫？🐱",
        "我偷了星星放进你眼里！✨",
        "和我交往吧！求求了！🥺"
    ];
    // 随机显示一句情话
    document.querySelector(".text").innerHTML = texts[Math.floor(Math.random() * texts.length)];
    
    // 生成飘爱心特效
    const heart = document.createElement("div");
    heart.innerHTML = "❤️";
    heart.classList.add("heart");
    heart.style.left = Math.random() * 100 + "vw";
    document.getElementById("heart-container").appendChild(heart);
    // 3秒后移除爱心
    setTimeout(() => heart.remove(), 3000);
}
