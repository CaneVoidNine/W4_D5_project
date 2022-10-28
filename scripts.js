let inputName = document.querySelector("#namer");
let addButton = document.querySelector(".butt");
let plusButton = document.querySelector("#plus-butt");
let minusButton = document.querySelector("#minus-butt");
let assignButton = document.querySelector(".butt2");
let resetButton = document.querySelector(".butt3");
let peepsField = document.querySelector(".card");
let teamsField = document.querySelector(".right");
let numberOfTeams = document.querySelector("#team-nb");
let addingName = function () {
  let newN = document.createElement("p");
  newN.innerText = inputName.value;
  inputName.value = "";
  peepsField.append(newN);
};
let addCard = function () {
  let mainCard = teamsField.appendChild(document.createElement("div"));
  mainCard.classList.add("team");
  let createH2 = document.createElement("h2");
  createH2.innerText = "Team " + numberOfTeams.innerText;
  mainCard.appendChild(createH2);
  let subCard = mainCard.appendChild(document.createElement("div"));
  subCard.classList.add("teammembers");
  subCard.appendChild(document.createElement("p"));
};

let removeCard = function () {
  teamsField.removeChild(teamsField.lastChild);
};

let memeNumberUp = function () {
  parseInt(numberOfTeams.innerText);
  numberOfTeams.innerText++;
};

let memeNumberDown = function () {
  parseInt(numberOfTeams.innerText);
  numberOfTeams.innerText--;
};

let assignMember = function () {
  teamsField.appendChild(peepsField.lastElementChild);
};

plusButton.addEventListener("click", function () {
  memeNumberUp();
  addCard();
});
minusButton.addEventListener("click", function () {
  memeNumberDown();
  removeCard();
});
