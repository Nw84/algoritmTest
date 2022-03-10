
const inputButton = document.querySelector(".outputBtn");
const input1 = document.querySelector(".input-1");
const input2 = document.querySelector(".input-2");

function ost(secretWord, guess) {
    let array1 = secretWord.split("");
    let array2 = guess.split("");
    let answerArray = [];
    for (let k = 0; k < array2.length; k++) {
        answerArray.push(array2[k] + " incorrect")
    }
    console.log(answerArray)
    for (let i = 0; i < array2.length; i++) {
        if (array2[i] === array1[i]) {
            answerArray.splice([i], 1, array2[i] + " " + "correct")
            array1[i] = "!";
            array2[i] = "&";
        }
    }
    console.log(answerArray)
    for (let i = 0; i < array2.length; i++) {
        if (array1.includes(array2[i])) {
            for (let j = 0; j < array2.length; j++) {
                if (array1[j] === array2[i])
                    array1[j] = "?";
            }
            answerArray.splice([i], 1, array2[i] + " " + " missplaced")
            console.log(answerArray)
        }
    }

}

ost("hello", "hlelo");