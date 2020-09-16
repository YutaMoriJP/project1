'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var one = document.getElementById('one'),
    two = document.getElementById('two'),
    three = document.getElementById('three'),
    four = document.getElementById('four'),
    five = document.getElementById('five'),
    six = document.getElementById('six'),
    seven = document.getElementById('seven'),
    eight = document.getElementById('eight'),
    nine = document.getElementById('nine');

var plus = document.getElementById('plus'),
    sub = document.getElementById('sub'),
    mult = document.getElementById('mult'),
    divide = document.getElementById('divide');

var submit = document.querySelector('.enter');
var area = document.querySelector('.area');
var on = false;

var Calculator = function () {
    function Calculator() {
        _classCallCheck(this, Calculator);

        this.numbers = [];
    }

    _createClass(Calculator, [{
        key: 'addNum',
        value: function addNum(n) {
            this.numbers.push(n);
        }
    }, {
        key: 'add',
        value: function add(n1, n2) {
            var num1 = +n1.join('');
            var num2 = +n2.join('');
            var screen = document.getElementById('screen');
            screen.innerHTML = num1 + num2;
        }
    }, {
        key: 'sub',
        value: function sub(n1, n2) {
            var num1 = +n1.join('');
            var num2 = +n2.join('');
            var screen = document.getElementById('screen');
            screen.innerHTML = num1 - num2;
        }
    }, {
        key: 'mult',
        value: function mult(n1, n2) {
            var num1 = +n1.join('');
            var num2 = +n2.join('');
            var screen = document.getElementById('screen');
            screen.innerHTML = num1 * num2;
        }
    }, {
        key: 'divide',
        value: function divide(n1, n2) {
            var num1 = +n1.join('');
            var num2 = +n2.join('');
            var screen = document.getElementById('screen');
            screen.innerHTML = num1 / num2;
        }
    }]);

    return Calculator;
}();

clicked = false;

var c1 = new Calculator();
var c2 = new Calculator();
var factor = [];

[one, two, three, four, five, six, seven, eight, nine].forEach(function (value) {
    value.addEventListener('mousedown', function (event) {
        return event.target.style.backgroundColor = 'white';
    });
    value.addEventListener('mouseup', function (event) {
        return event.target.style.backgroundColor = '#F5F5F5';
    });
});

plus.addEventListener('click', function () {
    factor.push('add');
    clicked = true;
});

sub.addEventListener('click', function () {
    factor.push('sub');
    clicked = true;
});

mult.addEventListener('click', function () {
    factor.push('mult');
    clicked = true;
});

divide.addEventListener('click', function () {
    factor.push('divide');
    clicked = true;
});

one.addEventListener('click', function () {
    if (clicked) {
        c2.addNum(1);
    } else {
        c1.addNum(1);
    }
});

two.addEventListener('click', function () {
    if (clicked) {
        c2.addNum(2);
    } else {
        c1.addNum(2);
    }
});

three.addEventListener('click', function () {
    if (clicked) {
        c2.addNum(3);
    } else {
        c1.addNum(3);
    }
});

four.addEventListener('click', function () {
    if (clicked) {
        c2.addNum(4);
    } else {
        c1.addNum(4);
    }
});
five.addEventListener('click', function () {
    if (clicked) {
        c2.addNum(5);
    } else {
        c1.addNum(5);
    }
});
six.addEventListener('click', function () {
    if (clicked) {
        c2.addNum(6);
    } else {
        c1.addNum(6);
    }
});
seven.addEventListener('click', function () {
    if (clicked) {
        c2.addNum(7);
    } else {
        c1.addNum(7);
    }
});
eight.addEventListener('click', function () {
    if (clicked) {
        c2.addNum(8);
    } else {
        c1.addNum(8);
    }
});
nine.addEventListener('click', function () {
    if (clicked) {
        c2.addNum(9);
    } else {
        c1.addNum(9);
    }
});

submit.addEventListener('click', function () {
    new Calculator()[factor[0]](c1.numbers, c2.numbers);
});