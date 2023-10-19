const darkTheme = document.getElementById('dark');
const lightTheme = document.getElementById('light');
const link = document.querySelector('.website');
let container = document.querySelector('.container');
let body = document.body;

darkTheme.addEventListener('click', function () {
    container.style.backgroundColor = 'black';
    body.style.backgroundColor = "black";
    link.style.color = "#38196B";
});

lightTheme.addEventListener('click', function () {
    container.style.backgroundColor = "#FFF";
    body.style.backgroundColor = "#F4EDFF";
});
