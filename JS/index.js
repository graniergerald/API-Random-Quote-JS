const randomPic = document.querySelector(".random-pic");
const randomQuote = document.querySelector(".random-quote");
const ClickCitation = document.querySelector(".ClickCitation");
const ClickPicture = document.querySelector(".ClickPicture");
const ClickBoth = document.querySelector(".ClickBoth");

console.log(randomQuote);

const getPicture = () => {
  fetch("https://picsum.photos/1500/1000").then(
    (res) => (randomPic.innerHTML = `<img src=${res.url} alt="random-image">`)
  );
};
getPicture();

const getQuote = () => {
  fetch("https://api.quotable.io/random")
    .then((res) => res.json())
    .then(
      (data) =>
        (randomQuote.innerHTML = `${data.content} </br> By ${data.author}`)
    );
};
getQuote();

ClickCitation.addEventListener("click", () => {
  getQuote();
});

ClickPicture.addEventListener("click", () => {
  getPicture();
});

ClickBoth.addEventListener("click", () => {
  getPicture();
  getQuote();
});
