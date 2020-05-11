// btn selectors
let btn__signin = document.querySelector('#btn__signin');
let btn__signup = document.querySelector('#btn__signup');
// form selectors
let form__signin = document.querySelector('.form__signin');
let form__signup = document.querySelector('.form__signup');
// submit selectors
let submit__signin = document.querySelector('.submit__signin');
let submit__signup = document.querySelector('.submit__signup');
// list selectors
let overview = document.querySelector('.overview');
// account helper
let user__btn = document.querySelector('#user__btn');
let user__msg = document.querySelector('#user__msg');
// account msg
let user__new = document.querySelector('#user__new');
let user__old = document.querySelector('#user__old');

// event : btn signin form view
btn__signin.addEventListener('click', ()=>{
    form__defaults();
    if (form__signin.style.display == 'none') {
        form__signin.style.display = 'flex';
        let acct__text = document.querySelector('#acct__text');
        acct__text.style.display = 'none';
    }
    else {
        form__signin.style.display = 'none';
    }

});
// event : btn signup form view
btn__signup.addEventListener('click', ()=>{
    form__defaults();
    if (form__signup.style.display == 'none') {
        form__signup.style.display = 'flex';
        let acct__text = document.querySelector('#acct__text');
        acct__text.style.display = 'none';
    }
    else {
        form__signup.style.display = 'none';
    }

});
// event : submit signin
submit__signin.addEventListener('click', (e)=>{
    // prevent default submit
    e.preventDefault();
    
    // validate form input
    form__validation();

    // display account overview
    acc__overview();
    
    if (user__old.style.display == 'none') {
        user__old.style.display = 'flex';
    }
});
// event : submit signup
submit__signup.addEventListener('click', (e)=>{
    // prevent default submit
    e.preventDefault();
    // display account overview
    acc__overview();
    if (user__new.style.display == 'none') {
        user__new.style.display = 'flex';
    }
});

// function : form default
function form__defaults() {
    if (form__signin.style.display == 'flex') {}
    if (form__signup.style.display == 'flex') {}
    if (overview.style.display == 'flex') {}

    form__signin.style.display = 'none';
    form__signup.style.display = 'none';

    overview.style.display = 'none';
}
// function : overview
function acc__overview() {
    form__defaults();
    if (user__btn.style.display == 'flex') {}
    if (user__msg.style.display == 'none') {}
    if (overview.style.display == 'none') {}

    user__btn.style.display = 'none';
    user__msg.style.display = 'flex';

    overview.style.display = 'flex';
}

// function : validation
function form__validation() {
    // form selector inputs
    let signin__user = document.querySelector('#signin__user');
    let signin__pass = document.querySelector('#signin__pass');
    // account details for current user
    let details__user = document.querySelector('#over__user');
    let details__pass = document.querySelector('#over__pass');
    let details__emal = document.querySelector('#over__emal');
    let details__code = document.querySelector('#over__code');
    let details__date = document.querySelector('#over__date');

    if (signin__user.innerHTML <= 1) {
        // test
        console.log('username is not valid!')
    }
    if (signin__pass.value <= 3) {
        // test
        console.log('password is not valid!')
    }
    if (signin__pass.value == 'password') {
        // test
        console.log('password cannot be password!')
    }
    else {
        // account details output
        details__user.innerHTML = signin__user.value;
        details__pass.innerHTML = signin__pass.value;
        details__emal.innerHTML = 'user @ gmail . com';
        details__code.innerHTML = '1 2 3 4 5 6';
        details__date.innerHTML = '01 - 01 - 2020';
    }
}