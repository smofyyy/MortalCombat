const $arenas = document.querySelector(".arenas");
const $root = document.querySelector(".root");
const $randomButton = document.querySelector(".button");

const firstCharacter = {
  player: 1,
  name: "Sub-Zero",
  hp: 100,
  img: "http://reactmarathon-api.herokuapp.com/assets/subzero.gif",
  weapon: ["Sword"],
  attack: function () {
    console.log(`${firstCharacter.name} Fight`);
  },
};
const secondCharacter = {
  player: 2,
  name: "Scorpion",
  hp: 100,
  img: "http://reactmarathon-api.herokuapp.com/assets/scorpion.gif",
  weapon: ["Harpoon"],
  attack: function () {
    console.log(`${secondCharacter.name} Fight`);
  },
};

function createElement(tag, className) {
  const $tag = document.createElement(tag);
  if (className) {
    $tag.classList.add(className);
  }
  return $tag;
}

function createPlayer(character) {
  const $player = createElement("div", `player${character.player}`);
  const $progressbar = createElement("div", "progressbar");
  const $character = createElement("div", "character");
  const $life = createElement("div", "life");
  const $name = createElement("div", "name");
  const $img = createElement("img");

  $life.style.width = `${character.hp}%`;
  $name.innerText = character.name;
  $img.src = character.img;

  $progressbar.appendChild($life);
  $progressbar.appendChild($name);

  $player.appendChild($progressbar);
  $player.appendChild($character);

  $character.appendChild($img);

  $root.appendChild($player);

  return $player;
}

function randomizeHp() {
  const randomHp = Math.ceil(Math.random() * 20);
  return randomHp;
}

function changeHp(character) {
  const $playerLife = document.querySelector(
    `.player${character.player} .life`
  );
  if (character.hp > 0) {
    character.hp -= randomizeHp();
    $playerLife.style.width = character.hp + "%";
  }

  if (character.hp <= 0) {
    $playerLife.style.width = 0 + "%";
  }

  if (character.hp <= 0) {
    $arenas.appendChild(playerWin(character.name));
    $randomButton.disabled = true;
  }
}

function playerWin(name) {
  const $winTitle = createElement("div", "winTitle");
  $winTitle.innerText = `${name} win`;
  return $winTitle;
}

$randomButton.addEventListener("click", function () {
  changeHp(firstCharacter);
  changeHp(secondCharacter);
});

$arenas.appendChild(createPlayer(firstCharacter));
$arenas.appendChild(createPlayer(secondCharacter));
