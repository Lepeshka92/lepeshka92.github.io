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

function getT()
{
    if(window.sensor_esp && sensor_esp['t3'])
        if(tmDiff(sensor_esp['date']) < 3)
            return +sensor_esp['t3'] + "&deg;";

    if(window.sensor_owm && sensor_owm['main']['temp'])
        return +sensor_owm['main']['temp'] + "&deg;";
    
    return "0&deg;";
}

function getH()
{
    if(window.sensor_esp && sensor_esp['h1'])
        if(tmDiff(sensor_esp['date']) < 3)
            return +sensor_esp['h1'] + "%";

    if(window.sensor_owm && sensor_owm['main']['humidity'])
        return +sensor_owm['main']['humidity']+ "%";
}

function toDate(date)
{
    var t = date.split(/[- :]/);
    return new Date(t[0], t[1] - 1, t[2], t[3], t[4], t[5]);
}

function tmDiff(date)
{
    var d = toDate(date);
    var n = new Date(Date.now());
    return Math.floor(Math.abs(n - d) / 36e5);
}

function showImage()
{
    document.querySelector('.modal').classList.add('is-active');
}

function hideImage()
{
    document.querySelector('.modal').classList.remove('is-active');
}

function initialize()
{
    loadNavbar();
    loadCities();
    
    document.querySelector('#btnShow').onclick = btnClicked;
    document.querySelector('#wtemp').innerHTML = getT();
    document.querySelector('#whmdt').innerText = getH();
    document.querySelector('#wdate').innerText = toDate(sensor_esp['date']).toLocaleString("ru", {hour: 'numeric', minute: 'numeric'});
    if(window.sensor_owm)
    {
        document.querySelector('#wwind').innerText = sensor_owm['wind']['speed'] + 'м/с';
        document.querySelector('#wdesc').innerText = sensor_owm['weather'][0]['description'];
    }
    VK.init({apiId: 6306483, onlyWidgets: true});
    VK.Widgets.Comments("vk_comments", {limit: 5, attach: "*"});
    VK.Widgets.Like("vk_like", {type: "mini", height: 24});
}

document.addEventListener("DOMContentLoaded", initialize);
var raspisanie = {
    'Направление': [
        ['', '', '']
    ],
    'на Дубну': [
        ['07:45 (б)', '№55*', 'Дубна (ЗЖБИ)'],
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
        ['08:40 (б)', '№55*', 'Запрудня'],
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
