const adviceBox = document.querySelector(".main-content");
const adviceText = document.querySelector(".advice-text");
const adviceId = document.querySelector(".advice-id");
const rolldice = document.querySelector(".btn-random-quote");

console.log(adviceText, adviceId);

const getAdvice = async function () {
  try {
    const response = await fetch("https://api.adviceslip.com/advice");
    const jsonData = await response.json();
    console.log(jsonData);
    adviceText.textContent = `" ${jsonData.slip.advice} "`;
    adviceId.textContent = `${jsonData.slip.id}`;
  } catch (err) {
    alert(err);
  }
};

rolldice.addEventListener("click", getAdvice);
