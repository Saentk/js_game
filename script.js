const $arenas = document.querySelector('.arenas')
const $randomButton = document.querySelector('.button')

const player1 = {
	player: 1,
	name: 'Scorpion',
	hp: 100,
	img: 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
	weapon: ['AK- 103', 'T64'],
	attack : function() {
		console.log(Scorpion.name + ' Fight')
	}
}
const player2 = {
	player: 2,
	name : 'Kitana',
	hp : 100,
	img : 'http://reactmarathon-api.herokuapp.com/assets/kitana.gif',
	weapon : ['AK- 103', 'T64'],
	attack : function() {
		console.log(Kitana.name + ' Fight')
	}
}

function changeHP (playerType) {
	const $playerLife = document.querySelector('.player' + playerType.player + ' .life');
	playerType.hp -= Math.ceil(Math.random() * 20);
	$playerLife.style.width = playerType.hp + '%';
	console.log(player1.hp)

	if (player1.hp < 0) {
		$arenas.appendChild(playerWin(player2.name));
		$randomButton.disabled = true
	} else if (player2.hp < 0) {
		$arenas.appendChild(playerWin(player1.name));
		$randomButton.disabled = true
	}
}


function playerWin(name) {
	const $winTitle = addDiv('winTitle');
	$winTitle.innerText = name + ' wins';

	return $winTitle
}
// alternative way to show winner (not active)
function playerLose(name) {
	const $loseTitle = addDiv('loseTitle');
	$loseTitle.innerText = name + ' lose';

	return $loseTitle
}

$randomButton.addEventListener('click', function(){
	changeHP(player1);
	changeHP(player2);
})

// Don`t want to repeat myself
function addDiv(nameStr) {
	$name = document.createElement('div')
	$name.classList.add(nameStr)
	return $name
}

function createPlayer(playerType) {

	$player = addDiv('player' + playerType.player)
	$progressbar = addDiv('progressbar')
	$progressbar = addDiv('progressbar')
	$character = addDiv('character')
	$life = addDiv('life')
	$name = addDiv('name')

	$player.appendChild($progressbar)
	$progressbar.appendChild($life)
	$progressbar.appendChild($name)
	$player.appendChild($character)

	$img = document.createElement('img')
	$img.src = playerType.img
	$character.appendChild($img)

	$life.style.width = playerType.hp + '%'
	$name.innerText = playerType.name

	return $player
}

$arenas.appendChild(createPlayer(player1))
$arenas.appendChild(createPlayer(player2))








// You can choose other player
// scorpion = 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif'
// kitana = 'http://reactmarathon-api.herokuapp.com/assets/kitana.gif'
// liukang = 'http://reactmarathon-api.herokuapp.com/assets/liukang.gif'
// sonya = 'http://reactmarathon-api.herokuapp.com/assets/sonya.gif'
// subzero = 'http://reactmarathon-api.herokuapp.com/assets/subzero.gif'
