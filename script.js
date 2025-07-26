let iconUpDown = document.querySelectorAll(".iconUpDown");
let backgroundNoise = document.querySelector('.section2-btn1')
let video = document.querySelector('.backgroundNoise')
let section2box1 = document.querySelector('.section2-box1')
let section2box2 = document.querySelector('.section2-box2')
let section2btn2 = document.querySelector('.section2-btn2')
let section2box = document.querySelector('.section2-box')

iconUpDown.forEach((item) => {
  const plusMinus = item.querySelector(".plusMinus");
  const ans = item.querySelector(".ans");

  plusMinus.addEventListener("click", () => {
    for (var i = 0; i < iconUpDown.length; i++) {
      if (iconUpDown[i] != item) {
        iconUpDown[i].querySelector('.ans').style.display = "none"
        iconUpDown[i].querySelector('.plusMinus').innerText = '+'
      } else {
        plusMinus.innerText === "+"
          ? ((plusMinus.innerText = "-"), (ans.style.display = "block"))
          : ((plusMinus.innerText = "+"), (ans.style.display = "none"));
      }
    }
  });
});

backgroundNoise.addEventListener("click", () => {
    video.style.display = 'block',
    section2box1.style.display = 'none', section2box2.style.display = 'none'
    backgroundNoise.style.backgroundColor = '#e0e7ff'
    section2btn2.style.backgroundColor = 'transparent'
})

section2btn2.addEventListener('click', () => {
    video.style.display = 'none'
    section2box1.style.display = 'flex', section2box2.style.display = 'flex'
    section2btn2.style.backgroundColor = '#e0e7ff'
    backgroundNoise.style.backgroundColor = 'transparent'
})