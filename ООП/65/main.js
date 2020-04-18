//Задание 4
console.log("↓Задание 4↓")
class MyString {

	reverse(str){
		return str.split('').reverse().join('');
	}

	ucFirst(str){
		let strin = str.split('');
		strin[0] = strin[0].toUpperCase();
		str = strin.join('');
		return str;
	}

	ucWords(str){
		return str.split(' ').map(word => word[0].toUpperCase() + word.substring(1)).join(' ');
	}
}
var str = new MyString;

console.log(str.reverse('abcde')); //выведет 'edcba'
console.log(str.ucFirst('abcde')); //выведет 'Abcde'
console.log(str.ucWords('abcde abcde abcde')); //выведет 'Abcde Abcde Abcde'

//Задание 5
console.log("↓Задание 5↓") 
class Validator{
	isEmail(str){

		if(str.match(/[^\s]+@+[^\s\.]+\.+[a-z]+/)){
			return true;
		}
		else{
			return false;
		}
	}
	isDomain(str){

		if (str.match(/[^\s]+\.[a-z]{2,}$/g)){
			return true;
		}
		 else{ 
			return false;
		}
	}
	isDate(str){

		if (str.match(/^(0?[1-9]|[012][0-9]|3[01])\.(0?[1-9]|1[012])\.\d{4}$/)){ 
			return true;
		}
		else{
			return false;
		}
	}
	isPhone(str){

		if (str.match(/^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/)){ 
			return true;
		}
		else{
			return false;
		}
	}
}

var validator = new Validator();

console.log(validator.isEmail('cobakamailtochkaru@mail.ru')); //true
console.log(validator.isEmail('cobakamailtochkaru@mail')); //false

console.log(validator.isDomain('tochkaru.ru')); //true
console.log(validator.isDomain('tochkaru@ru')); //false

console.log(validator.isDate('18.04.2020')); //true
console.log(validator.isDate('18.04.20')); //false

console.log(validator.isPhone('87776665544')); //true
console.log(validator.isPhone('8-777-666-555-444')); //false