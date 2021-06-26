const generate = [
	0, 1, 2, 3, 4, 5, 6, 7, 8, 9,
	'A', 'B', 'C', 'D', 'E', 'F'
]
const getColor = document.querySelector('input[type="text"]')
const newColor = document.querySelector('.new-color')
const demoColor = document.querySelector('.demo-color')

newColor.addEventListener( 'click', function() {
	let currentColor = '#'
	for(let i = 0;i < 6;i++) {
		currentColor += generate[generator()]
	}
	getColor.value = currentColor
	demoColor.style.backgroundColor = currentColor
})

function generator() {
	return Math.floor(Math.random() * generate.length)
}

function copyToClipboard() {
	getColor.select()
	document.execCommand("copy")
	alert("copy in clipboard")
}