/*

const inputButton = document.querySelector(".outputBtn");
const input1 = document.querySelector(".input-1");
const input2 = document.querySelector(".input-2");

function ost(secretWord, guess) {
    let array1 = secretWord.split("");
    let array2 = guess.split("");
    let answerArray = [];
    console.log(array2);
    console.log(array1)

    for (let i = 0; i < array2.length; i++) {
        if (array1[i] === array2[i]) {
            answerArray.push(array2[i] + " " + "correct")
            array1[i] = "!";
        } else {
            if (array1.includes(array2[i])) {
                answerArray.push(array2[i] + " " + "missplaced")
                array2[i] = "?";
            } else {
                answerArray.push(array2[i] + " " + "incorrect")
            }
        }
    }
    console.log(answerArray)
}

ost("hello", "eeost");
*/

const inputButton = document.querySelector(".outputBtn");
const input1 = document.querySelector(".input-1");
const input2 = document.querySelector(".input-2");

function ost(secretWord, guess) {
    let array1 = secretWord.split("");
    let array2 = guess.split("");
    let answerArray = [];
    for (let i = 0; i < array2.length; i++) {
        answerArray.push(array2[i] + " incorrect")
    }
    for (let i = 0; i < array2.length; i++) {
        if (array1[i] === array2[i]) {
            answerArray.splice([i], [i], array2[i] + " " + "correct")
            array1[i] = "!";
            array2[i] = "&";
        }
    }
    for (let i = 0; i < array2.length; i++) {
        if (array1.includes(array2[i])) {
            answerArray.splice([i], [i], array2[i] + " " + " missplaced")
            for (let j = 0; j < array2.length; j++) {
                if (array1[j] === array2[i])
                    array1[j] = "?";
            }
            console.log(array1)
        }
        console.log(answerArray)
    }
}

ost("hello", "kekhe");