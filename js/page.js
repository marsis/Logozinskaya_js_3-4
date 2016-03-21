
var element = document.createElement('div');
element.classList.add('container-fluid');
var body = document.querySelector('body');
document.body.appendChild(element);

var element = document.createElement('div');
element.classList.add('row');
var container = document.querySelector('.container-fluid');
container.appendChild(element);

//Заголовок

var element = document.createElement('div');
element.classList.add('col-xs-12', 'header');
var container = document.querySelector('.row');
container.appendChild(element);

var element = document.createElement('h3');
element.classList.add('h3','text-left');
var container = document.querySelector('.col-xs-12', '.header' );
container.appendChild(element);
element.innerHTML = ('Тест по программированию');


//Вопрос1
var element = document.createElement('div');
element.classList.add('question1','col-xs-12');
var container = document.querySelector('.row');
container.appendChild(element);


var element = document.createElement('h4');
element.classList.add( 'h4','text-justify');
var question = document.querySelector('.question1');
question.appendChild(element);
element.innerHTML = ('1. Вопрос № 1');


var element = document.createElement('div');
element.classList.add( 'col-xs-12' , 'col-xs-offset-1', 'answers1');
var container = document.querySelector('.row');
container.appendChild(element);


var element = document.createElement('div');
element.classList.add( 'checkbox1');
var container = document.querySelector('.answers1', '.col-xs-12' , '.col-xs-offset-1');
container.appendChild(element);


var element = document.createElement('input');
element.setAttribute('type', 'checkbox');
element.setAttribute('id', 'ch1');
element.classList.add('label1','ch1');
var label = document.querySelector('.checkbox1');
label.appendChild(element);


var element = document.createElement('div');
element.classList.add( 'label1');
var container = document.querySelector('.checkbox1');
container.appendChild(element);
element.innerHTML = ('Вариант ответа №1');

//for (i = 1; i < 4; i++){
var element = document.createElement('div');
element.classList.add( 'checkbox2');
var container = document.querySelector('.answers1','.col-xs-12' , '.col-xs-offset-1');
container.appendChild(element);

var element = document.createElement('input');
element.setAttribute('type', 'checkbox');
element.setAttribute('id', 'ch2');
element.classList.add('label2', 'ch2');
var label = document.querySelector('.checkbox2');
label.appendChild(element);

	
var element = document.createElement('div');
element.classList.add( 'label2');
var container = document.querySelector('.checkbox2');
container.appendChild(element);
element.innerHTML = ('Вариант ответа №2');


var element = document.createElement('div');
element.classList.add( 'checkbox3');
var container = document.querySelector('.answers1','.col-xs-12' , '.col-xs-offset-1');
container.appendChild(element);


var element = document.createElement('input');
element.setAttribute('type', 'checkbox');
element.setAttribute('id', 'ch3');
element.classList.add('label3', 'ch3');
var label = document.querySelector('.checkbox3');
label.appendChild(element);

	
var element = document.createElement('div');
element.classList.add( 'label3');
var container = document.querySelector('.checkbox3');
container.appendChild(element);
element.innerHTML = ('Вариант ответа №3');


//Вопрос2
var element = document.createElement('div');
element.classList.add('question2','col-xs-12');
var container = document.querySelector('.row');
container.appendChild(element);


var element = document.createElement('h4');
element.classList.add('h4');
var question = document.querySelector('.question2');
question.appendChild(element);
element.innerHTML = ('2. Вопрос № 2');


var element = document.createElement('div');
element.classList.add( 'col-xs-12' , 'col-xs-offset-1', 'answers2');
var container = document.querySelector('.row');
container.appendChild(element);


var element = document.createElement('div');
element.classList.add( 'checkbox4');
var container = document.querySelector('.answers2', '.col-xs-12' , '.col-xs-offset-1');
container.appendChild(element);


var element = document.createElement('input');
element.setAttribute('type', 'checkbox');
element.setAttribute('id', 'ch4');
element.classList.add('label4','ch4');
var label = document.querySelector('.checkbox4');
label.appendChild(element);


var element = document.createElement('div');
element.classList.add( 'label4');
var container = document.querySelector('.checkbox4');
container.appendChild(element);
element.innerHTML = ('Вариант ответа №1');


var element = document.createElement('div');
element.classList.add( 'checkbox5');
var container = document.querySelector('.answers2','.col-xs-12' , '.col-xs-offset-1');
container.appendChild(element);


var element = document.createElement('input');
element.setAttribute('type', 'checkbox');
element.setAttribute('id', 'ch5');
element.classList.add('label5', 'ch5');
var label = document.querySelector('.checkbox5');
label.appendChild(element);

	
var element = document.createElement('div');
element.classList.add( 'label5');
var container = document.querySelector('.checkbox5');
container.appendChild(element);
element.innerHTML = ('Вариант ответа №2');


var element = document.createElement('div');
element.classList.add( 'checkbox6');
var container = document.querySelector('.answers2','.col-xs-12' , '.col-xs-offset-1');
container.appendChild(element);


var element = document.createElement('input');
element.setAttribute('type', 'checkbox');
element.setAttribute('id', 'ch6');
element.classList.add('label6', 'ch6');
var label = document.querySelector('.checkbox6');
label.appendChild(element);

	
var element = document.createElement('div');
element.classList.add( 'label6');
var container = document.querySelector('.checkbox6');
container.appendChild(element);
element.innerHTML = ('Вариант ответа №3');
	
	
	
	
//Вопрос3
var element = document.createElement('div');
element.classList.add('question3','col-xs-12');
var container = document.querySelector('.row');
container.appendChild(element);


var element = document.createElement('h4');
element.classList.add('h4');
var question = document.querySelector('.question3');
question.appendChild(element);
element.innerHTML = ('3. Вопрос № 3');


var element = document.createElement('div');
element.classList.add( 'col-xs-12' , 'col-xs-offset-1', 'answers3');
var container = document.querySelector('.row');
container.appendChild(element);


var element = document.createElement('div');
element.classList.add( 'checkbox7');
var container = document.querySelector('.answers3', '.col-xs-12' , '.col-xs-offset-1');
container.appendChild(element);


var element = document.createElement('input');
element.setAttribute('type', 'checkbox');
element.setAttribute('id', 'ch7');
element.classList.add('label7','ch7');
var label = document.querySelector('.checkbox7');
label.appendChild(element);


var element = document.createElement('div');
element.classList.add( 'label7');
var container = document.querySelector('.checkbox7');
container.appendChild(element);
element.innerHTML = ('Вариант ответа №1');


var element = document.createElement('div');
element.classList.add( 'checkbox8');
var container = document.querySelector('.answers3','.col-xs-12' , '.col-xs-offset-1');
container.appendChild(element);


var element = document.createElement('input');
element.setAttribute('type', 'checkbox');
element.setAttribute('id', 'ch8');
element.classList.add('label8', 'ch8');
var label = document.querySelector('.checkbox8');
label.appendChild(element);

	
var element = document.createElement('div');
element.classList.add( 'label8');
var container = document.querySelector('.checkbox8');
container.appendChild(element);
element.innerHTML = ('Вариант ответа №2');


var element = document.createElement('div');
element.classList.add( 'checkbox9');
var container = document.querySelector('.answers3','.col-xs-12' , '.col-xs-offset-1');
container.appendChild(element);


var element = document.createElement('input');
element.setAttribute('type', 'checkbox');
element.setAttribute('id', 'ch9');
element.classList.add('label9', 'ch9');
var label = document.querySelector('.checkbox9');
label.appendChild(element);

	
var element = document.createElement('div');
element.classList.add( 'label9');
var container = document.querySelector('.checkbox9');
container.appendChild(element);
element.innerHTML = ('Вариант ответа №3');	
 
 
var element = document.createElement('div');
element.classList.add('res', "col-xs-12");
var container = document.querySelector('.row');
container.appendChild(element);


var element = document.createElement('div');
element.classList.add('results');
var container = document.querySelector('.res');
container.appendChild(element);


var element = document.createElement('a');
element.setAttribute('href', '#');
var container = document.querySelector('.results');
container.appendChild(element);
element.innerHTML = ('Проверить мои результаты');
