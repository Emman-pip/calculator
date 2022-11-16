const add = (a,b)=>a+b;
const subtract = (a,b)=>a-b;
const multiply = (a,b)=>a*b;
const divide = (a,b)=>a/b;

const operate = (operator, a, b) => {
	if (operator === '+'){
		add(a,b);
	}
	else if (operator === '-'){
		subtract(a,b);
	}
	else if (operator === '*'){
		multiply(a,b);
	}
	else if (operator === '/'){
		divide(a,b);
	}
}

const display = document.querySelector('#display');
const clear = document.querySelector('.clear');
const number = document.querySelectorAll('.number');


number.forEach((e)=>{
	e.addEventListener('click', ()=>{
		display.textContent = display.textContent + e.textContent;
		let displayValue = display.textContent
	})
})

clear.addEventListener('click', ()=>{
	display.textContent = ''
})