(function() {
    'use strict';
    function ready() {
        alert( 'DOM дерево збудоване' );
        var img = document.getElementById('img');
        alert( "Размір картинки: " + img.offsetWidth + "x" + img.offsetHeight );
    }

    document.addEventListener("DOMContentLoaded", ready);
})();