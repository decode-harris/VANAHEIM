// view selectors
let home = document.querySelector('#homepage');
let dash = document.querySelector('#dashboard');
let shar = document.querySelector('#sharepage');
let data = document.querySelector('#database');
let acct = document.querySelector('#account');
let sett = document.querySelector('#settings');
let supp =document.querySelector('#support');
// btn selectors
let btn__home = document.querySelector('#btn__home');
let btn__dash = document.querySelector('#btn__dash');
let btn__shar = document.querySelector('#btn__shar');
let btn__data = document.querySelector('#btn__data');
let btn__acct = document.querySelector('#btn__acct');
let btn__sett = document.querySelector('#btn__sett');
let btn__supp = document.querySelector('#btn__supp');

// event : home view
btn__home.addEventListener('click', (e)=>{
    // default views 
    e.preventDefault();
    defaults();

    // display view
    if(home.style.display == 'none') {}
    home.style.display = 'grid';

});
// event : dashboard view
btn__dash.addEventListener('click', (e)=>{
    // default view
    e.preventDefault();
    defaults();

    // display view
    if (dashboard.style.display == 'none') {}
    dashboard.style.display = 'grid';

});
// event : share view
btn__shar.addEventListener('click', (e)=>{
    // default view
    e.preventDefault();
    defaults();

    // display view
    if (shar.style.display == 'none') {}
    shar.style.display = 'grid';

});
// event : data view
btn__data.addEventListener('click', (e)=>{
    // default view
    e.preventDefault();
    defaults();

    // display view
    if (data.style.display == 'none') {}
    data.style.display = 'grid';

});
// event : acct view
btn__acct.addEventListener('click', (e)=>{
    // default view
    e.preventDefault();
    defaults();
    
    // display view
    if (acct.style.display == 'none') {}
    acct.style.display = 'grid';

});
// event : sett view
btn__sett.addEventListener('click', (e)=>{
    // default view
    e.preventDefault();
    defaults();
    
    // display view
    if (sett.style.display == 'none') {}
    sett.style.display = 'grid';

});
// event : supp view
btn__supp.addEventListener('click', (e)=>{
    // default view
    e.preventDefault();
    defaults();

    // display view
    if (supp.style.display == 'none') {}
    supp.style.display = 'grid';

});

/* 
    function defaults
    1. validate view
    2. remove view
    3. return
*/
function defaults() {
    // validate if view is displaying grid
    if (home.style.display == 'grid') {}
    if (dash.style.display == 'grid') {}
    if (shar.style.display == 'grid') {}
    if (data.style.display == 'grid') {}
    if (acct.style.display == 'grid') {}
    if (sett.style.display == 'grid') {}
    if (supp.style.display == 'grid') {}

    // remove grid from view
    home.style.display = 'none';
    dash.style.display = 'none';
    shar.style.display = 'none';
    data.style.display = 'none';
    acct.style.display = 'none';
    sett.style.display = 'none';
    supp.style.display = 'none';

    return;
}