// знайти кнопку старту
let btn_start = document.querySelector(".btn-start");

// створюємо звук
const clickSound = new Audio("start.mp3"); // тут назва твого звуку

btn_start.addEventListener("click", function(){
    // відтворюємо звук одразу при кліку
    clickSound.currentTime = 0;
    clickSound.play().catch(e => {
        console.warn("Автоплей заблоковано браузером:", e);
    });

    // нова анімація кнопки
    anime({
        targets: btn_start,
        translateY: [
            { value: -100, duration: 500, easing: 'easeOutQuad' }, // кнопка піднімається вгору
            { value: 20, duration: 200, easing: 'easeInOutQuad' },  // трохи опускається
            { value: 0, duration: 200, easing: 'easeOutBounce' }    // і повертається
        ],
        scale: [
            { value: 1.2, duration: 300, easing: 'easeOutQuad' },   // трохи збільшується
            { value: 1, duration: 600, easing: 'easeInOutQuad' }    // повертається до звичайного розміру
        ],
        rotate: [
            { value: '15deg', duration: 300, easing: 'easeOutQuad' },
            { value: '0deg', duration: 600, easing: 'easeInOutQuad' }
        ]
    }).finished.then(function(){
        // після завершення анімації перенаправляємо на тест
        location.href = "test.html";
    });
});
