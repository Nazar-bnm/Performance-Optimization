(function() {
    'use strict';
    window.onload = function() {
        if(localStorage.getItem('counter')) {
            resetCounter();
            counter();
        } else {
            setCounter(1);
            setCurTime();
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

    function setCurTime() {
        var date = Date.now();
        localStorage.setItem('time', date);
    }

    function resetCounter() {
        var date = Date.now();
        var prewDate = localStorage.getItem('time');
        var time = date - prewDate;
        if(time > 10000){
            localStorage.removeItem('counter');
            localStorage.setItem('time', date);
        }
    }

})();