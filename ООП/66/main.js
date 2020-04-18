//Задание 1
console.log("↓Задание 1↓")
class User {
	constructor(name, surname) {

		this.name = name;
		this.surname = surname;
	}

	getFullName() {

		return this.name + ' ' + this.surname;
	}
}

class Student extends User {

	constructor(name,surname,year){
		super(name,surname);
		this.year = year;
	}
	getCourse(){

		let now = new Date();
		return now.getFullYear() - this.year;
	}
}

var student = new Student('Иван', 'Сергеев', 2020);

console.log(student.name);
console.log(student.surname);
console.log(student.getFullName()); 
console.log(student.year); 
console.log(student.getCourse());