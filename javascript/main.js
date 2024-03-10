const button = document.querySelector("#Transform");
const resultPlace = document.querySelector("#result");
let bufor = "";

const reverseString = (str) => {
  const reversedString = str.split("").reduce((acc, char) => char + acc, "");
  return reversedString;
};

const transform = () => {
  button.addEventListener("click", () => {
    const userInput = document.querySelector("#userInput");
    let text = userInput.value;

    do {
      let binaryChar = text % 2;
      text = parseInt(text / 2);
      bufor += binaryChar;
    } while (text > 0);

    resultPlace.innerHTML = `<i>Result: ${reverseString(bufor)}</i>`;
  });
};

const App = () => {
  transform();
};

window.onload = App;
