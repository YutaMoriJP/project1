const one = document.getElementById('one'), 
two = document.getElementById('two'), 
three = document.getElementById('three'),
four = document.getElementById('four'),
five = document.getElementById('five'),
six = document.getElementById('six'),
seven = document.getElementById('seven'),
eight = document.getElementById('eight'),
nine = document.getElementById('nine');

const plus = document.getElementById('plus'),
sub = document.getElementById('sub'),
mult = document.getElementById('mult'),
divide = document.getElementById('divide');

const submit = document.querySelector('.enter');
const area = document.querySelector('.area');
let on = false;

class Calculator {
    constructor() {
        this.numbers = []
    }
    addNum(n) { this.numbers.push(n)};
    add(n1, n2) {
        const num1 = +n1.join('')
        const num2 = +n2.join('')
        const screen = document.getElementById('screen');
        screen.innerHTML = (num1 + num2);
    }
    sub(n1, n2) {
        const num1 = +n1.join('')
        const num2 = +n2.join('')
        const screen = document.getElementById('screen');
        screen.innerHTML = (num1 - num2);
    }
    mult(n1, n2) {
        const num1 = +n1.join('')
        const num2 = +n2.join('')
        const screen = document.getElementById('screen');
        screen.innerHTML = (num1 * num2);
    }
    divide(n1, n2) {
        const num1 = +n1.join('')
        const num2 = +n2.join('')
        const screen = document.getElementById('screen');
        screen.innerHTML = (num1 / num2);
    }
}
clicked = false;

const c1 = new Calculator();
const c2 = new Calculator();
const factor = [];

[one, two, three, four, five, six, seven, eight, nine].forEach(value => {
    value.addEventListener('mousedown', event => event.target.style.backgroundColor = 'white');
    value.addEventListener('mouseup', event => event.target.style.backgroundColor = '#F5F5F5');
})

plus.addEventListener('click', () => {
    factor.push('add');
    clicked = true;
});

sub.addEventListener('click', () => {
    factor.push('sub');
    clicked = true;
});

mult.addEventListener('click', () => {
    factor.push('mult');
    clicked = true;
});

divide.addEventListener('click', () => {
    factor.push('divide');
    clicked = true;
});


one.addEventListener('click', () => {
    if(clicked) {
        c2.addNum(1)
    } else {
        c1.addNum(1)
    }
});
       
two.addEventListener('click', () => {
    if(clicked) {
        c2.addNum(2)
    } else {
        c1.addNum(2)
    }
});

three.addEventListener('click', () => {
    if(clicked) {
        c2.addNum(3)
    } else {
        c1.addNum(3)
    }
});

four.addEventListener('click', () => {
    if(clicked) {
        c2.addNum(4)
    } else {
        c1.addNum(4)
    }
});
five.addEventListener('click', () => {
    if(clicked) {
        c2.addNum(5)
    } else {
        c1.addNum(5)
    }
});
six.addEventListener('click', () => {
    if(clicked) {
        c2.addNum(6)
    } else {
        c1.addNum(6)
    }
});
seven.addEventListener('click', () => {
    if(clicked) {
        c2.addNum(7)
    } else {
        c1.addNum(7)
    }
});
eight.addEventListener('click', () => {
    if(clicked) {
        c2.addNum(8)
    } else {
        c1.addNum(8)
    }
});
nine.addEventListener('click', () => {
    if(clicked) {
        c2.addNum(9)
    } else {
        c1.addNum(9)
    }
});

submit.addEventListener('click', () => {
    new Calculator()[factor[0]](c1.numbers, c2.numbers)
})