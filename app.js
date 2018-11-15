function loadCities()
{
    var tmp = '';
    for (item in raspisanie)
    {
        tmp += '<option value="' + item + '">' + item +'</option>';
    }
    document.querySelector('select').innerHTML = tmp;
}
function btnClicked()
{
    var tmp = '';
    var r = raspisanie[document.querySelector('select').value];
    
    for (var i = 0; i < r.length; i++)
    {
        tmp += '<tr><td>' + r[i][0] + '</td>';
        tmp += '<td>' + r[i][1] + '</td>';
        tmp += '<td>' + r[i][2] + '</td></tr>';
    }
    document.querySelector('tbody').innerHTML = tmp;
}
function loadNavbar()
{
    var nbb = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
    if (nbb.length > 0) 
    {
        nbb.forEach(function (el) 
        {
            el.addEventListener('click', function () 
            {
                var target = el.dataset.target;
                var target = document.getElementById(target);
                el.classList.toggle('is-active');
                target.classList.toggle('is-active');
            });
        });
    }
}
function initialize()
{
    loadNavbar();
    loadCities();

    document.querySelector('#btnShow').onclick = btnClicked;

    VK.init({apiId: 6306483, onlyWidgets: true});
    VK.Widgets.Comments("vk_comments", {limit: 15, attach: "*"});
}

document.addEventListener("DOMContentLoaded", initialize);

var raspisanie = {
    'Направление': [
        ['', '', '']
    ],
    'на Дубну': [
        ['07:30 (б)', '№55*', 'Дубна (ЗЖБИ)'],
        ['08:00', '№55', 'Дубна (ЗЖБИ)'],
        ['09:28 (б)', '№55', 'Дубна (ЗЖБИ)'],
        ['11:15 (б)', '№55*', 'Дубна (ЗЖБИ)'],
        ['12:08', '№55', 'Дубна (ЗЖБИ)'],
        ['13:50 (б)', '№55', 'Дубна (ЗЖБИ)'],
        ['15:05', '№55', 'Дубна (ЗЖБИ)'],
        ['15:38 (б)', '№55*', 'Дубна (ЗЖБИ)'],
        ['17:55 (б)', '№55', 'Дубна (ЗЖБИ)'],
        ['19:00 (б)', '№55*', 'Дубна (ЗЖБИ)']
    ], 
    'из Дубны': [
        ['08:25 (б)', '№55*', 'Запрудня'],
        ['09:00', '№55', 'Дмитров'],
        ['10:30 (б)', '№55', 'Дмитров'],
        ['12:15 (б)', '№55*', 'Дмитров'],
        ['13:00', '№55', 'Дмитров'],
        ['14:45 (б)', '№55', 'Дмитров'],
        ['16:10', '№55', 'Дмитров'],
        ['18:00 (б)', '№55*', 'Запрудня'],
        ['18:50 (б)', '№55', 'Запрудня'],
        ['20:00 (б)', '№55*', 'Дмитров']
    ]
};
