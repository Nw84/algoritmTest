
import checkWord from "../src/checkWord.js";

test("function gives the correct response if the correct word is guessed", () => {
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