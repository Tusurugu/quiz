pytania = []
fetch("./pytania.json")
  .then(function (resp) {
    return resp.json();
  })
  .then(function (data) {
    pytania = data.pytania;
  })
  

pytaniaSkalowanie = [{ poziom: 0, streak: 0 }, { poziom: 0, streak: 0 }, { poziom: 0, streak: 0 }, { poziom: 0, streak: 0 }, { poziom: 0, streak: 0 }, { poziom: 0, streak: 0 }, { poziom: 0, streak: 0 }, { poziom: 0, streak: 0 }, { poziom: 0, streak: 0 }, { poziom: 0, streak: 0 }, { poziom: 0, streak: 0 }, { poziom: 0, streak: 0 }, { poziom: 0, streak: 0 }, { poziom: 0, streak: 0 }, { poziom: 0, streak: 0 }, { poziom: 0, streak: 0 }, { poziom: 0, streak: 0 }, { poziom: 0, streak: 0 }, { poziom: 0, streak: 0 }, { poziom: 0, streak: 0 }, { poziom: 0, streak: 0 }, { poziom: 0, streak: 0 }, { poziom: 0, streak: 0 }, { poziom: 0, streak: 0 }, { poziom: 0, streak: 0 }, { poziom: 0, streak: 0 }, { poziom: 0, streak: 0 }, { poziom: 0, streak: 0 }, { poziom: 0, streak: 0 }, { poziom: 0, streak: 0 }, { poziom: 0, streak: 0 }, { poziom: 0, streak: 0 }, { poziom: 0, streak: 0 }, { poziom: 0, streak: 0 }, { poziom: 0, streak: 0 }, { poziom: 0, streak: 0 }, { poziom: 0, streak: 0 }, { poziom: 0, streak: 0 }, { poziom: 0, streak: 0 }, { poziom: 0, streak: 0 }, { poziom: 0, streak: 0 }, { poziom: 0, streak: 0 }, { poziom: 0, streak: 0 }, { poziom: 0, streak: 0 }, { poziom: 0, streak: 0 }, { poziom: 0, streak: 0 }, { poziom: 0, streak: 0 }, { poziom: 0, streak: 0 }, { poziom: 0, streak: 0 }, { poziom: 0, streak: 0 }, { poziom: 0, streak: 0 }, { poziom: 0, streak: 0 }, { poziom: 0, streak: 0 }, { poziom: 0, streak: 0 }, { poziom: 0, streak: 0 }, { poziom: 0, streak: 0 }, { poziom: 0, streak: 0 }, { poziom: 0, streak: 0 }, { poziom: 0, streak: 0 }, { poziom: 0, streak: 0 }, { poziom: 0, streak: 0 }, { poziom: 0, streak: 0 }, { poziom: 0, streak: 0 }, { poziom: 0, streak: 0 }, { poziom: 0, streak: 0 }, { poziom: 0, streak: 0 }, { poziom: 0, streak: 0 }, { poziom: 0, streak: 0 }, { poziom: 0, streak: 0 }, { poziom: 0, streak: 0 }, { poziom: 0, streak: 0 }, { poziom: 0, streak: 0 }, { poziom: 0, streak: 0 }, { poziom: 0, streak: 0 }, { poziom: 0, streak: 0 }, { poziom: 0, streak: 0 }, { poziom: 0, streak: 0 }, { poziom: 0, streak: 0 }, { poziom: 0, streak: 0 }, { poziom: 0, streak: 0 }, { poziom: 0, streak: 0 }, { poziom: 0, streak: 0 }, { poziom: 0, streak: 0 }, { poziom: 0, streak: 0 }, { poziom: 0, streak: 0 }, { poziom: 0, streak: 0 }, { poziom: 0, streak: 0 }, { poziom: 0, streak: 0 }, { poziom: 0, streak: 0 }, { poziom: 0, streak: 0 }, { poziom: 0, streak: 0 }, { poziom: 0, streak: 0 }, { poziom: 0, streak: 0 }, { poziom: 0, streak: 0 }, { poziom: 0, streak: 0 }, { poziom: 0, streak: 0 }, { poziom: 0, streak: 0 }, { poziom: 0, streak: 0 }, { poziom: 0, streak: 0 }, { poziom: 0, streak: 0 }, { poziom: 0, streak: 0 }, { poziom: 0, streak: 0 }, { poziom: 0, streak: 0 }, { poziom: 0, streak: 0 }, { poziom: 0, streak: 0 }, { poziom: 0, streak: 0 }, { poziom: 0, streak: 0 }, { poziom: 0, streak: 0 }, { poziom: 0, streak: 0 }, { poziom: 0, streak: 0 }, { poziom: 0, streak: 0 }, { poziom: 0, streak: 0 }, { poziom: 0, streak: 0 }, { poziom: 0, streak: 0 }, { poziom: 0, streak: 0 }, { poziom: 0, streak: 0 }, { poziom: 0, streak: 0 }, { poziom: 0, streak: 0 }, { poziom: 0, streak: 0 }, { poziom: 0, streak: 0 }, { poziom: 0, streak: 0 }, { poziom: 0, streak: 0 }, { poziom: 0, streak: 0 }, { poziom: 0, streak: 0 }, { poziom: 0, streak: 0 }, { poziom: 0, streak: 0 }, { poziom: 0, streak: 0 }, { poziom: 0, streak: 0 }, { poziom: 0, streak: 0 }, { poziom: 0, streak: 0 }, { poziom: 0, streak: 0 }, { poziom: 0, streak: 0 }, { poziom: 0, streak: 0 }, { poziom: 0, streak: 0 }, { poziom: 0, streak: 0 }, { poziom: 0, streak: 0 }, { poziom: 0, streak: 0 }, { poziom: 0, streak: 0 }, { poziom: 0, streak: 0 }, { poziom: 0, streak: 0 }, { poziom: 0, streak: 0 }, { poziom: 0, streak: 0 }, { poziom: 0, streak: 0 }, { poziom: 0, streak: 0 }, { poziom: 0, streak: 0 }, { poziom: 0, streak: 0 }, { poziom: 0, streak: 0 }, { poziom: 0, streak: 0 }, { poziom: 0, streak: 0 }, { poziom: 0, streak: 0 }, { poziom: 0, streak: 0 }, { poziom: 0, streak: 0 }, { poziom: 0, streak: 0 }, { poziom: 0, streak: 0 }, { poziom: 0, streak: 0 }, { poziom: 0, streak: 0 }, { poziom: 0, streak: 0 }, { poziom: 0, streak: 0 }, { poziom: 0, streak: 0 }, { poziom: 0, streak: 0 }, { poziom: 0, streak: 0 }, { poziom: 0, streak: 0 }, { poziom: 0, streak: 0 }, { poziom: 0, streak: 0 }, { poziom: 0, streak: 0 }, { poziom: 0, streak: 0 }, { poziom: 0, streak: 0 }, { poziom: 0, streak: 0 }, { poziom: 0, streak: 0 }, { poziom: 0, streak: 0 }, { poziom: 0, streak: 0 }, { poziom: 0, streak: 0 }, { poziom: 0, streak: 0 }, { poziom: 0, streak: 0 }, { poziom: 0, streak: 0 }, { poziom: 0, streak: 0 }, { poziom: 0, streak: 0 }, { poziom: 0, streak: 0 }, { poziom: 0, streak: 0 }, { poziom: 0, streak: 0 }, { poziom: 0, streak: 0 }, { poziom: 0, streak: 0 }, { poziom: 0, streak: 0 }, { poziom: 0, streak: 0 }, { poziom: 0, streak: 0 }, { poziom: 0, streak: 0 }, { poziom: 0, streak: 0 }, { poziom: 0, streak: 0 }, { poziom: 0, streak: 0 }, { poziom: 0, streak: 0 }, { poziom: 0, streak: 0 }, { poziom: 0, streak: 0 }, { poziom: 0, streak: 0 }, { poziom: 0, streak: 0 }, { poziom: 0, streak: 0 }, { poziom: 0, streak: 0 }, { poziom: 0, streak: 0 }, { poziom: 0, streak: 0 }, { poziom: 0, streak: 0 }, { poziom: 0, streak: 0 }, { poziom: 0, streak: 0 }, { poziom: 0, streak: 0 }, { poziom: 0, streak: 0 }, { poziom: 0, streak: 0 }, { poziom: 0, streak: 0 }, { poziom: 0, streak: 0 }, { poziom: 0, streak: 0 }, { poziom: 0, streak: 0 }, { poziom: 0, streak: 0 }, { poziom: 0, streak: 0 }, { poziom: 0, streak: 0 }, { poziom: 0, streak: 0 }, { poziom: 0, streak: 0 }, { poziom: 0, streak: 0 }, { poziom: 0, streak: 0 }, { poziom: 0, streak: 0 }, { poziom: 0, streak: 0 }, { poziom: 0, streak: 0 }, { poziom: 0, streak: 0 }, { poziom: 0, streak: 0 }, { poziom: 0, streak: 0 }, { poziom: 0, streak: 0 }, { poziom: 0, streak: 0 }, { poziom: 0, streak: 0 }, { poziom: 0, streak: 0 }, { poziom: 0, streak: 0 }, { poziom: 0, streak: 0 }, { poziom: 0, streak: 0 }, { poziom: 0, streak: 0 }, { poziom: 0, streak: 0 }, { poziom: 0, streak: 0 }, { poziom: 0, streak: 0 }, { poziom: 0, streak: 0 }, { poziom: 0, streak: 0 }, { poziom: 0, streak: 0 }, { poziom: 0, streak: 0 }, { poziom: 0, streak: 0 }, { poziom: 0, streak: 0 }, { poziom: 0, streak: 0 }, { poziom: 0, streak: 0 }]
let pytaniaSkalowanie_str = JSON.stringify(pytaniaSkalowanie)
function SkalowanieSave() {
  if (localStorage.getItem("pytaniaSkalowanie") === null) {
    localStorage.setItem("pytaniaSkalowanie", pytaniaSkalowanie_str)
    pytaniaSkalowanie_user = pytaniaSkalowanie
  } else {
    pytaniaSkalowanie_user = JSON.parse(localStorage.getItem("pytaniaSkalowanie"))
  }
} SkalowanieSave()
let numerPytania = 0;
let Dobrze = 0;
let zle = 0;
let correct = document.querySelector('.correct');
let question = document.querySelector('#question');
let answer = document.querySelectorAll('.answer');
let next = document.querySelector('.next');
let refresh = document.querySelector('.refresh');
let Planszakoncowa = ""
function refresh1() { window.location.reload(); };
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
function LosoweLiczby() {
  LosoweLiczbyZbior = []
  LosowePytaniaZbior = []
  for (i = 0; i < 41; i++) {
    LosoweLiczba = getRandomInt(240)
    if (LosoweLiczbyZbior.includes(LosoweLiczba) === false) {
      if (pytaniaSkalowanie_user[LosoweLiczba].poziom > 0) {
        i--
        pytaniaSkalowanie_user[LosoweLiczba].poziom -= 1
      } else {
        LosoweLiczbyZbior.push(LosoweLiczba)
        LosowePytaniaZbior.push(pytania[LosoweLiczbyZbior[i]])
      }
    } else {
      i--
    }
  }
  LosowePytaniaZbior.push(Planszakoncowa)
} LosoweLiczby();
function zmianakolorow() {
  for (i = 0; i < 4; i++) {
    answer[i].classList.add("bg-danger")
  }
  correct.classList.remove("bg-danger")
  correct.classList.add("bg-success")
  pytaniaSkalowanie_user[LosoweLiczbyZbior[numerPytania]].streak = 0;
  pytaniaSkalowanie_user[LosoweLiczbyZbior[numerPytania]].poziom = 0;
}
function Dobra() {
  zmianakolorow();
  console.log("dobrze");
  for (i = 0; i < 4; i++) {
    answer[i].removeEventListener("click", Zła);
    answer[i].addEventListener("click", zmianaPytania);
  }
  correct.removeEventListener("click", Dobra)
  pytaniaSkalowanie_user[LosoweLiczbyZbior[numerPytania]].streak++;
  pytaniaSkalowanie_user[LosoweLiczbyZbior[numerPytania]].poziom = pytaniaSkalowanie_user[LosoweLiczbyZbior[numerPytania]].streak * 2;
  Dobrze += 1
}
function Zła() {
  zmianakolorow();
  console.log("źle");
  for (i = 0; i < 4; i++) {
    answer[i].removeEventListener("click", Zła);
    answer[i].addEventListener("click", zmianaPytania);
  }
  correct.removeEventListener("click", Dobra)
  zle += 1
}
function zmianaPytania() {
  numerPytania++;
  if (numerPytania === 41) {
    question.innerHTML = "<p>dobre odpowiedzi" + Dobrze + "</p><p>złe odpowiedzi " + zle + "</p><button class='refresh'>jeszcze raz</button>";
    document.querySelector('.refresh').addEventListener("click", refresh1);
    next.removeEventListener("click", zmianaPytania)
  } else {
    question.innerHTML = LosowePytaniaZbior[numerPytania];
  }
  correct = document.querySelector('.correct');
  answer = document.querySelectorAll('.answer');
  for (i = 0; i < 4; i++) {
    answer[i].addEventListener("click", Zła);
  }
  correct.removeEventListener("click", Zła)
  correct.addEventListener("click", Dobra);
  localStorage.setItem("pytaniaSkalowanie", JSON.stringify(pytaniaSkalowanie_user));
}
next.addEventListener("click", zmianaPytania)
question.addEventListener("load", LosoweLiczby())
