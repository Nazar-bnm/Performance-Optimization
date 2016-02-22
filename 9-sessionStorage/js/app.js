(function() {
    'use strict';
    window.onload = function() {
        if (sessionStorage.getItem('aut') == 'admin') {
            authetification();
        } else {
            output();
        }
    };
    
    var button = document.getElementById('button');
    button.onclick = function() {
        input();
        return false;
    };

    var logout = document.getElementById('logout');
    logout.onclick = function() {
        output()
    };

    function input() {
        var name = document.getElementById('name').value;
        var psw = document.getElementById('psw').value;
        if(name == 'admin' && psw == 123) {
            authetification();
        }
    }

    function authetification() {
        sessionStorage.setItem('aut', 'admin');
        var form = document.getElementById('wrapper-form');
        form.setAttribute("class", "hidden");
        var authorized = document.getElementById('authorized');
        authorized.removeAttribute("class");
    }

    function output() {
        sessionStorage.setItem('aut', 'out');
        var form = document.getElementById('wrapper-form');
        form.removeAttribute("class");
        var authorized = document.getElementById('authorized');
        authorized.setAttribute("class", "hidden");
    }
})();