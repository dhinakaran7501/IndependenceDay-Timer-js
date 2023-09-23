let mainDiv = document.getElementById("button");
let sec = document.getElementById("countNum");
let color = document.getElementById("color");
let orange = document.getElementById("orange");
let white = document.getElementById("white");
let green = document.getElementById("green");

let countNum = document.createElement("h2");
countNum.textContent = "10";
sec.appendChild(countNum);

let button = document.createElement("button");
button.onclick =function startTimer() {
  setTimeout(() => {
    countNum.textContent = "10";
    setTimeout(() => {
      countNum.textContent = "09";
    setTimeout(() => {
      countNum.textContent = "08";
      setTimeout(() => {
        countNum.textContent = "07";
        setTimeout(() => {
          countNum.textContent = "06";
          setTimeout(() => {
            countNum.textContent = "05";
            setTimeout(() => {
              countNum.textContent = "04";
              setTimeout(() => {
                countNum.textContent = "03";
                setTimeout(() => {
                  countNum.textContent = "02";
                  setTimeout(() => {
                    countNum.textContent = "01";
                    setTimeout(() => {
                      countNum.textContent = "00";
                      color.style.display = "block";
                      color.style.animation = "0.5s";
                    },1000);
                  },1000);
                },1000);
              },1000);
            },1000);      
          },1000);
        },1000);
      },1000);
    },1000);
  },1000);
  },1000);
}
button.textContent = "Start the Time";
mainDiv.appendChild(button);

// let countVal = 10;
// function timer(){
// setInterval(()=>{
//     if(countVal>=0){
//       console.log(countVal);
//       countVal-=1;
//     }
//   },1000);

//   content();
// }

// function content(){
//   console.log("gg")
// }
