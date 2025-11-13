// функція тасування Фішера-Йетса -для перемішування відповідей
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1)); // випадковий індекс
    [array[i], array[j]] = [array[j], array[i]];  // обмін місцями
  }
  return array;
}
//

// твій код


// масив запитань
import {questions} from "./data.js"

//
let q_index = 0 // індекс поточного запитання
let score = 0 // кількість правильних відповідей
let btn_ans = document.querySelectorAll(".ans") // кнопки відповідей
let qw_text = document.querySelector(".qw") // текст запитання
let qw = ""
// функція відображення запитання

function showQuestion(){
    // отримуємо поточне запитання
    qw = questions[q_index]
    // відображаємо текст запитання
        qw_text.innerHTML = qw.qw
    // тасуємо відповіді
    let ans = shuffle(qw.ans)
        ans =  shuffle(ans)
    // тасуємо копію масиву відповідей
   // відображаємо відповіді на кнопках відповідей
   for (let i = 0; i < btn_ans.length; i++){
    btn_ans[i].innerHTML = Object.keys(ans[i])[0]
    btn_ans[i].dataset.value = Object.values(ans[i])[0]
}

    
}
//відображаємо перше запитання
showQuestion()

// обробники кліків по кнопках відповідей
   for (let i = 0; i < btn_ans.length; i++){
    btn_ans[i].addEventListener("click", function(){

            console.log("ok")
            score += ++btn_ans[i].dataset.value

        q_index ++
        anime ({
            targets: ".card-qw",
            translateX: [0,500],
            opacity: [1,0],
            duration: 2000
        }).finished.then(function(){
        if (q_index == questions.length){
            document.cookie = `score=${score};max-age=3600`
            window.location.replace("result.html")
        }
        else {
            showQuestion()
            anime ({
                targets: ".card-qw",
                translateX: [-500,0],    
                opacity: [0,1], 
                duration: 2000
            })
        }})
    })
}
//1. отримуємо всі кнопки відповідей у циклі
//2. додаємо обробник кліку на кожну кнопку
//3. у обробнику перевіряємо чи правильна відповідь
//4. змінюємо змінну-колір  (зелений - правильна, червоний - неправильна) та рахунок
//5. запускаємо анімацію зміни кольору кнопки
//6. після завершення анімації збільшуємо індекс запитання
//7. якщо запитання закінчилися - переходимо на сторінку результатів та 
//   зберігаємо у cookie кількість правильних відповідей та загальну кількість запитань,
//  інакше показуємо наступне запитання
