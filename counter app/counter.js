// const numBer = document.querySelector(".number");
// const btnOne = document.getElementById("btn-one");
// const btnTwo = document.getElementById("btn-two");
// const btnThree = document.getElementById("btn-three");

// // declare a constant
// let generatedNumber = 0;
// btnThree.addEventListener("click", function () {
//     // generatedNumber++
//     numBer.textContent = generatedNumber++;
// })

// btnOne.addEventListener("click", function () {
//     // generatedNumber--
//     numBer.textContent = generatedNumber--;
    
// })

// btnTwo.addEventListener("click", function () {
//     generatedNumber = 0;
//     numBer.textContent = generatedNumber;
// })

const value = document.querySelector(".number");
const btns = document.querySelectorAll(".btn");

let count = 0;
btns.forEach( function (btnn) {
    btnn.addEventListener("click", function (e) {
        const styles = e.currentTarget.classList;
        if(styles.contains("decrease")) {
            count--;
        } else if (styles.contains("increase")){
            count++;
        } else {
            count = 0;
        }

        value.textContent = count;
    })
})

