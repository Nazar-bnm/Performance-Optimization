(function() {
    'use strict';
    window.onload = function() {
        alert( 'Документ і всі ресурси загружені' );
        var img = document.getElementById('img');
        alert( "Размір картинки: " + img.offsetWidth + "x" + img.offsetHeight );
    };
})();