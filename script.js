// querySelectors
const display2 = document.querySelector('#display2');
const display = document.querySelector('#display');
const clear = document.querySelector('.clear');
const equal = document.querySelector('.equal');
const period = document.querySelector('.period')
const del = document.querySelector('.del')

function calculate(){
	if (display2.textContent == '') {
		display2.textContent = parseFloat(display.textContent);
	} else if (display2.textContent.includes('+')){
		display2.textContent = parseFloat(display2.textContent)+parseFloat(display.textContent);
		op = '+';
	}else if (display2.textContent.includes('-')){
		display2.textContent = parseFloat(display2.textContent)-parseFloat(display.textContent);
		op = '-';
	}else if (display2.textContent.includes('*')){
		display2.textContent = parseFloat(display2.textContent)*parseFloat(display.textContent);
		op = '*';
	}else if (display2.textContent.includes('/')){
		display2.textContent = parseFloat(display2.textContent)/parseFloat(display.textContent);
		op = '/';
	}
	display.textContent = '';
}


// querySelectorsAll
const number = document.querySelectorAll('.number');
const operator = document.querySelectorAll('.operator');

let op;
// functional buttons
number.forEach((e)=>{
	e.addEventListener('click', ()=>{
		display.textContent = display.textContent + e.textContent;
	})
})

operator.forEach((e)=>{
	e.addEventListener('click', ()=>{
		display.textContent = display.textContent + e.textContent;
	})
})


period.addEventListener('click',()=>{
	if (!display.textContent.includes('.')){
		display.textContent = display.textContent+period.textContent;
	} else {
		alert('no more than one period')
	}
})

clear.addEventListener('click', ()=>{
	display.textContent = '';
	display2.textContent = '';
})

del.addEventListener('click', ()=>{
	x = display.textContent
	display.textContent = x.slice(0,display.textContent.length-1);
})


// record numbers entered

operator.forEach((e)=>{
	e.addEventListener('click', function(){
		calculate()
	})})

//operators
const plus = document.querySelector('#plus')
const minus = document.querySelector('#minus')
const multipl = document.querySelector('#multiply')
const divid = document.querySelector('#divide')


plus.addEventListener('click', ()=>{
	display2.textContent=display2.textContent+plus.textContent
})

minus.addEventListener('click', ()=>{
	display2.textContent=display2.textContent+minus.textContent
})

multipl.addEventListener('click', ()=>{
	display2.textContent=display2.textContent+multipl.textContent
})

divid.addEventListener('click', ()=>{
	display2.textContent=display2.textContent+divid.textContent
})


equal.addEventListener('click', function(){
		calculate()
	})


/////////////////////////////////////////////

window.addEventListener('keydown', (e)=>{
    if (e.key == 0){
        display.textContent = display.textContent+e.key
    } else if (e.key == 1){
        display.textContent = display.textContent+e.key
    } else if (e.key == 2){
        display.textContent = display.textContent+e.key
    } else if (e.key == 3){
        display.textContent = display.textContent+e.key
    } else if (e.key == 4){
        display.textContent = display.textContent+e.key
    } else if (e.key == 5){
        display.textContent = display.textContent+e.key
    } else if (e.key == 6){
        display.textContent = display.textContent+e.key
    } else if (e.key == 7){
        display.textContent = display.textContent+e.key
    } else if (e.key == 8){
        display.textContent = display.textContent+e.key
    } else if (e.key == 9){
        display.textContent = display.textContent+e.key
    } else if (e.key == 'Backspace'){
        x = display.textContent;
		display.textContent = x.slice(0,display.textContent.length-1);
    } else if (e.key == '+'){
        calculate()
        display2.textContent=display2.textContent+'+'
    }  else if (e.key == '-'){
        calculate()
        display2.textContent=display2.textContent+'-'
    }  else if (e.key == '*'){
        calculate()
        display2.textContent=display2.textContent+'*'
    }  else if (e.key == '/'){
        calculate()
        display2.textContent=display2.textContent+'/'
    }  else if (e.key == 'Enter'){
        calculate()
    } else if (e.key == '.') {
		if (display.textContent.includes('.')){alert('no more than one period')}
		
		else {display.textContent = display.textContent+e.key}

	}
})