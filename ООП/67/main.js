//Задание 3
console.log("↓Задание 3↓")
class Rectangle {
	constructor(width, height) {
		this.elem = document.createElement('div');

		this.elem.style.width = width + 'px';
		this.elem.style.height = height + 'px';
		this.elem.style.border = '3px solid blue';

		document.body.appendChild(this.elem);
	}	

	getWidth(width) {
		return parseInt(this.elem.style.width);
	}

	setWidth(width) {
		this.elem.style.width = width + 'px';
	}

	getHeight(height) {
		return parseInt(this.elem.style.height);
	}
	
	setHeight(height) {
		this.elem.style.height = height + 'px';
	}
}

let block = new Rectangle();

block.setWidth(500);
block.setHeight(150);

alert('Блок1: ' + 'Height: '+ block.getHeight()+' '+' Width: '+block.getWidth());

let block1 = new Rectangle();

block1.setWidth(650);
block1.setHeight(200);

alert('Блок2: ' + 'Height: '+ block1.getHeight()+' '+' Width: '+block1.getWidth());