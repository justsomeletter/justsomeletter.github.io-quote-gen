"use strict";
let sentences = [
  `"Be yourself; everyone else is already taken.”
― Oscar Wilde`,
  `“I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.”
  ― Marilyn Monroe`,
  `“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”
  ― Albert Einstein`,
  `“So many books, so little time.”
  ― Frank Zappa`,
  `"A room without books is like a body without a soul.”
  ― Marcus Tullius Cicero`,
  `“A friend is someone who knows all about you and still loves you.”
  ― Elbert Hubbard`,
  `"To live is the rarest thing in the world. Most people exist, that is all.”
  ― Oscar Wilde`,
  `“I am so clever that sometimes I don't understand a single word of what I am saying.”
  ― Oscar Wilde, The Happy Prince and Other Stories`,
];

document.querySelector(".click").addEventListener("click", function () {
  let choice = Math.floor(Math.random() * 7);
  document.querySelector("#quoteDisplay").textContent = sentences[choice];
  console.log(document.querySelector("#quoteDisplay").textContent);
});
