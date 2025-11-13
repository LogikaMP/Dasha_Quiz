import { results } from "./data.js";

let score = 0;
let cookies = document.cookie.split(";");

for (let i = 0; i < cookies.length; i++) {
    let [name, value] = cookies[i].trim().split("=");
    if (name == "score") {
        score = parseInt(value);
    }
}

let title = document.querySelector(".title");
let description = document.querySelector(".description");
let suitable_fields = document.querySelector(".suitable_fields");
let proffessions = document.querySelector(".professions");

for (let key in results) {
    let [min, max] = key.split("-");
    if (score >= parseInt(min) && score <= parseInt(max)) {
        title.innerHTML = results[key].title;
        description.innerHTML = results[key].description;
        for (let i = 0; i < results[key].suitable_fields.length; i++) {
            suitable_fields.innerHTML += `<li>${results[key].suitable_fields[i]}</li>`;
        }
        for (let i = 0; i < results[key].professions.length; i++) {
            proffessions.innerHTML += `<li>${results[key].professions[i]}</li>`;
        }
    }
}

// підключаємось до події завантаження сторінки для анімації результату
window.onload = function() {
    // відображаємо результат у відповідні елементи
    // (тут твій існуючий код анімації результату)

    // Відтворюємо звук, що сигналізує про закінчення тесту
    const endSound = new Audio("end.mp3");
    endSound.currentTime = 0;
    endSound.play().catch(e => {
        console.warn("Автоплей заблоковано браузером:", e);
    });

    // анімація результату
    // анімація кількості запитань
    // анімація кількості правильних відповідей по завершенню анімації total
};
