const firstCharacter = {
  name: "Sub-Zero",
  hp: 100,
  img: "http://reactmarathon-api.herokuapp.com/assets/subzero.gif",
  weapon: ["Sword"],
  attack: function () {
    console.log(`${firstCharacter.name} Fight`);
  },
};
const secondCharacter = {
  name: "Scorpion",
  hp: 100,
  img: "http://reactmarathon-api.herokuapp.com/assets/scorpion.gif",
  weapon: ["Harpoon"],
  attack: function () {
    console.log(`${secondCharacter.name} Fight`);
  },
};

function createPlayer(playerClass, character) {
  const $player = document.createElement("div");
  $player.classList.add(playerClass);

  const $root = document.querySelector(".root");
  $root.appendChild($player);

  const $progressbar = document.createElement("div");
  $progressbar.classList.add("progressbar");

  const $character = document.createElement("div");
  $character.classList.add("character");

  $player.appendChild($progressbar);
  $player.appendChild($character);

  const $life = document.createElement("div");
  $life.classList.add("life");
  $life.style.width = `${character.hp}%`;

  const $name = document.createElement("div");
  $name.classList.add("name");
  $name.innerText = character.name;

  $progressbar.appendChild($life);
  $progressbar.appendChild($name);

  const $img = document.createElement("img");
  $img.src = character.img;

  $character.appendChild($img);

  const $arenas = document.querySelector(".arenas");
  $arenas.appendChild($player);
}

createPlayer('player1', firstCharacter);
createPlayer('player2', secondCharacter);

// Я не очень понял как правильно следовало бы расставлять переменные в функции, а точнее в каком порядке?
// Я когда объявлял переменную, следом для нее создавал div и в принципе с ней работал, потом же приступал к следующей,
// но мне кажется если сначала вывести все переменные, потом выводить присвоение классов для каждого созданного div'а и так далее, 
// то так удобнее читать, но я не уверен.

// Собственно сам вопрос, как и в каком порядке создавать функцию? Правильный ли у меня стиль написания? Если нет, то как правильнее?

