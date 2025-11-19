const mySymbols = ["$", "@", "#", "*"];

let balance = 25;
let score = 0;

const grabSymbols = () => {
  const index = Math.floor(Math.random() * mySymbols.length);
  return mySymbols[index];
};

function leverPull(x) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(x);
      console.clear();
    }, 1000);
  });
}

async function returnSlots() {
  let myArray = [];

  balance -= 5;
  const myBalance = document.getElementById("balance");
  myBalance.innerText = "Balance: " + balance;

  console.clear();

  for (let i = 0; i < 3; i++) {
    const resultSlot = grabSymbols();
    const x = await leverPull(resultSlot);
    myArray.push(x);
    console.log(myArray);
  }

  if (myArray[0] === myArray[1] && myArray[1] === myArray[2]) {
    console.log("Wow you won!");
    score += 1;
    const myScore = document.getElementById("score");
    myScore.innerText = "Score: " + score;
    balance += 5;
    const myBalance = document.getElementById("balance");
    myBalance.innerText = "Balance: " + balance;
  } else {
    console.log("Uh oh. Better luck next time!");
    return myArray;
  }
}

const startGame = () => {
  const myBalance = document.getElementById("balance");
  myBalance.innerText = "Balance: " + balance;

  const myScore = document.getElementById("score");
  myScore.innerText = "Score: " + score;

  if (balance <= 0) {
    console.log("You cannot play. No balance.");
    return;
  }
  returnSlots();
};

const newGame = () => {
  balance = 25;
  score = 0;

  const myBalance = document.getElementById("balance");
  myBalance.innerText = "Balance: " + balance;

  const myScore = document.getElementById("score");
  myScore.innerText = "Score: " + score;

  console.clear();
  console.log("New game started!");
};

const continueGame = () => {
  if (balance <= 0) {
    console.log("You cannot play. No balance.");
    return;
  }
  returnSlots();
};
