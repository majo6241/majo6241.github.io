// Complete variable definitions and random functions

const customName = document.getElementById("custom-name");
const generateBtn = document.querySelector(".generate");
const story = document.querySelector(".story");

function randomValueFromArray(array) {
  const random = Math.floor(Math.random() * array.length);
  return array[random];
}

// Raw text strings
let randomCharacter = ["Willy the Goblin","Big Daddy","Father Christmas"]

let randomPlace = ["the soup kitchen","Disneyland","the White House"]

let randomEvents = ["spontaneously combusted","melted into a puddle on the sidewalk","turned into a slug and slithered away"]

// Partial return random string function

function returnRandomStoryString() {
  let storyText = "It was 94 Fahrenheit outside, so " + randomValueFromArray(randomCharacter) +
  "got into a massive fight in front of " + randomValueFromArray(randomPlace) +
  "! Oh gosh! What is going on on?! Suddenly he" + randomValueFromArray(randomEvents) +
  " but immediately receives himself to normal. Bob is in this fight and can't fight" + randomValueFromArray(randomCharacter) +
  " who weighs 300 pounds and continue fighting on even on a hot day."
  return storyText;
}

// Event listener and partial generate function definition

generateBtn.addEventListener("click", generateStory);

function generateStory() {
let newStory = returnRandomStoryString()
  if (customName.value !== "") {
    const name = customName.value;
    newStory.replace("Bob",name);}

  if (document.getElementById("uk").checked) {
    const weight = Math.round(300/14) + " stone";
    const temperature = Math.round((94 - 32)/1.8) + " Celsius";
    newStory.replace("300 pounds",weight);
    newStory.replace("94 Fahrenheit",temperature);
  }

  // TODO: replace "" with the correct expression
  story.textContent = newStory;
  story.style.visibility = "visible";
}