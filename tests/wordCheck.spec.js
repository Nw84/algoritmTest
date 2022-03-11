
import checkWord from "../src/checkWord.js";

test("1: function gives the correct response if the correct word is guessed", () => {
    let response = checkWord("cykla", "cykla");

    let expectedResponse = [
        {
            letter: "C", result: "correct"
        },
        {
            letter: "Y", result: "correct"
        },
        {
            letter: "K", result: "correct"
        },
        {
            letter: "L", result: "correct"
        },
        {
            letter: "A", result: "correct"
        },
    ]

    expect(response).toEqual(expectedResponse);
})

test("2: function gives the correct response if its the right letters, but in the wrong order", () => {
    let response = checkWord("hammare", "erammah");

    let expectedResponse = [
        {
            letter: "E", result: "missplaced"
        },
        {
            letter: "R", result: "missplaced"
        },
        {
            letter: "A", result: "missplaced"
        },
        {
            letter: "M", result: "correct"
        },
        {
            letter: "M", result: "missplaced"
        },
        {
            letter: "A", result: "missplaced"
        },
        {
            letter: "H", result: "missplaced"
        },
    ]

    expect(response).toEqual(expectedResponse);
})

test("3: function gives the correct response if several of the same letters are guessed", () => {
    let response = checkWord("llploooos", "oolllolop");

    let expectedResponse = [
        {
            letter: "O", result: "missplaced"
        },
        {
            letter: "O", result: "missplaced"
        },
        {
            letter: "L", result: "missplaced"
        },
        {
            letter: "L", result: "correct"
        },
        {
            letter: "L", result: "missplaced"
        },
        {
            letter: "O", result: "correct"
        },
        {
            letter: "L", result: "incorrect"
        },
        {
            letter: "O", result: "correct"
        },
        {
            letter: "P", result: "missplaced"
        },

    ]

    expect(response).toEqual(expectedResponse);
})

test("4: function gives the correct response if the secret word is lowercased and the guess is uppercased", () => {
    let response = checkWord("akuten", "ALENnA");

    let expectedResponse = [
        {
            letter: "A", result: "correct"
        },
        {
            letter: "L", result: "incorrect"
        },
        {
            letter: "E", result: "missplaced"
        },
        {
            letter: "N", result: "missplaced"
        },
        {
            letter: "N", result: "incorrect"
        },
        {
            letter: "A", result: "incorrect"
        },
    ]

    expect(response).toEqual(expectedResponse);
})

test("5: Richards test example from the assignment", () => {
    let response = checkWord("cykla", "hallå");

    let expectedResponse = [
        {
            letter: "H", result: "incorrect"
        },
        {
            letter: "A", result: "missplaced"
        },
        {
            letter: "L", result: "incorrect"
        },
        {
            letter: "L", result: "correct"
        },
        {
            letter: "Å", result: "incorrect"
        },
    ]

    expect(response).toEqual(expectedResponse);
}) 