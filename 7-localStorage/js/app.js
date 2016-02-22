(function() {
    'use strict';
    window.onload = function() {
        if (localStorage.getItem('counter')) {
            counter();
        } else {
            setCounter(1);
        }
    };

    function setCounter(value) {
        localStorage.setItem('counter', value);
        outputCounter(value);
    }

    function getCounter() {
        var curentCounter = localStorage.getItem('counter');
        return curentCounter;
    }

    function counter() {
        var counter = getCounter();
        counter++;
        setCounter(counter);
    }

    function outputCounter(curentValue) {
        var conteiner = document.getElementById('wrapper');
        var text = 'Current call ' + curentValue;
        conteiner.textContent = text;
    }
})();