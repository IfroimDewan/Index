var gbp, usd, eur, cad, aud;
function init()
{
    gbp = document.getElementById("GBP");
    usd = document.getElementById("USD");
    eur = document.getElementById("EUR");
    cad = document.getElementById("CAD");
    aud = document.getElementById("AUD");
}

function gbpfunc()
{
    usd.value = parseFloat(gbp.value) * 2.03032;
    eur.value = parseFloat(gbp.value) * 1.43448;
    cad.value = parseFloat(gbp.value) * 1.99169;
    aud.value = parseFloat(gbp.value) * 2.29964;
}

function eurfunc()
{
    gbp.value = parseFloat(eur.value) * 0.69714;
    usd.value = parseFloat(eur.value) * 1.41544;
    cad.value = parseFloat(eur.value) * 1.38814;
    aud.value = parseFloat(eur.value) * 1.60329;
}

function cadfunc()
{
    gbp.value = parseFloat(cad.value) * 0.50221;
    usd.value = parseFloat(cad.value) * 1.01941;
    eur.value = parseFloat(cad.value) * 0.72037;
    aud.value = parseFloat(cad.value) * 1.15498;
}

function audfunc()
{
    gbp.value = parseFloat(aud.value) * 0.43497;
    usd.value = parseFloat(aud.value) * 0.88297;
    eur.value = parseFloat(aud.value) * 0.62382;
    cad.value = parseFloat(aud.value) * 0.86613;    
}

function usdfunc()
{
    gbp.value = parseFloat(usd.value) * 0.49246;
    eur.value = parseFloat(usd.value) * 0.70641;
    cad.value = parseFloat(usd.value) * 0.98054;
    aud.value = parseFloat(usd.value) * 1.13262;
}

init();