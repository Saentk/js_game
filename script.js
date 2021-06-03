
const Scorpion = {
	name: 'Scorpion',
	hp: 100,
	img: 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
	weapon: ['AK- 103', 'T64'],
	attack : function() {
		console.log(Scorpion.name + ' Fight')
	}
}
const Kitana = {
	name : 'Kitana',
	hp : 100,
	img : 'http://reactmarathon-api.herokuapp.com/assets/kitana.gif',
	weapon : ['AK- 103', 'T64'],
	attack : function() {
		console.log(Kitana.name + ' Fight')
	}
}
const Liukang = {
	name : 'Liukang',
	hp : 100,
	img : 'http://reactmarathon-api.herokuapp.com/assets/liukang.gif',
	weapon : ['AK- 103', 'T64'],
	attack : function() {
		console.log(Liukang.name + ' Fight')
	}
}

const $arenas = document.querySelector('.arenas')


// Создал функцию чтобы уменьшить количество повторений
function addDiv(nameStr) {
	$name = document.createElement('div')
	$name.classList.add(nameStr)
	return $name
}

function createPlayer(playerNum, playerType) {

	$player = addDiv(playerNum)
	$progressbar = addDiv('progressbar')
	$progressbar = addDiv('progressbar')
	$character = addDiv('character')
	$life = addDiv('life')
	$name = addDiv('name')

	$arenas.appendChild($player)
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

createPlayer('player1', Scorpion)
createPlayer('player2', Kitana)





// scorpion = 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif'
// kitana = 'http://reactmarathon-api.herokuapp.com/assets/kitana.gif'
// liukang = 'http://reactmarathon-api.herokuapp.com/assets/liukang.gif'
// sonya = 'http://reactmarathon-api.herokuapp.com/assets/sonya.gif'
// subzero = 'http://reactmarathon-api.herokuapp.com/assets/subzero.gif'