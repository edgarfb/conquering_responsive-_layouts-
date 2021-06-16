(function app() {
    let d = document,
        menu = d.getElementById('menu'),
        nav = d.getElementById('navId')
    ;


    menu.addEventListener('click', function btnClick() {
        nav.classList.toggle('nav--visible');
        console.log('click')
    });



})();


