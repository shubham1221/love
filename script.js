// const btnElemnet = document.getElementById("btn");
// const loveElement = document.getElementById("love");
// const apiKey = "skHB0kahjXVXLkgh4GKoww==f1vviO9hzlW9FiWb";

// const options = {
//   method: "GET",
//   headers: {
//     "X-Api-Key": apiKey,
//   },
// };

// const apiURL = "https://api.api-ninjas.com/v1/quotes?category=beauty=1";

// async function getLove() {
//   loveElement.innerText = "Updating...";
//   btnElemnet.disabled = true;
//   btnElemnet.innerText = "Loading...";
//   const response = await fetch(apiURL, options);
//   const data = await response.json();
//   btnElemnet.disabled = false;
//   btnElemnet.innerText = "TELL ME MORE";

//   jokeElement.innerText = data[0].love;
// }

// btnElemnet.addEventListener("click", getLove);

const quotes = [
  "Love is not just a feeling; it's a choice that we make every day.",
  "In your smile, I found something more beautiful than stars.",
  "You are the missing piece to my puzzle.",
  "True love stories never have endings.",
  "Being deeply loved by someone gives you strength, while loving someone deeply gives you courage.",
  "Love is composed of a single soul inhabiting two bodies.",
  "Every love story is beautiful, but ours is my favorite.",
  "Bacha, in the garden of my heart, you're the most beautiful blossom.",
  "Bacha, your smile lights up my world and warms even the coldest of days.",
  "With you, Bacha, every moment becomes a treasured memory.",
  "Bacha, your laughter is like a melody that plays in my heart.",
  "In your eyes, Bacha, I find a universe of love and endless possibilities.",
  "Bacha, you're the gentle whisper in the breeze that soothes my soul.",
  "With every beat of my heart, Bacha, I fall deeper in love with you.",
  "Bacha, your presence is a gift that fills my life with joy and meaning.",
  "In the book of my life, Bacha, you're the most beautiful chapter.",
  "Bacha, you and me together make a love story that's written among the stars.",
];

const quoteElement = document.getElementById("quote");
const generateBtn = document.getElementById("generateBtn");

generateBtn.addEventListener("click", generateQuote);

function generateQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  quoteElement.textContent = quotes[randomIndex];
}
